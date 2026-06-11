import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { FIELD_QUESTIONS } from "@/app/field/questions";

const TEXT_CAP = 10000;
const CONTACT_CAP = 200;
const ADDRESS = "readiness@everistconsulting.com";

// Lenient but plausible email check.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Payload {
  name?: string;
  email?: string;
  a1?: string;
  a2?: string;
  a3?: string;
  a4?: string;
  a5?: string;
  website?: string; // spam control
}

function cap(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.slice(0, max);
}

export async function POST(req: NextRequest) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // spam control: silently accept and send nothing.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = cap(body.email, CONTACT_CAP).trim();
  const name = cap(body.name, CONTACT_CAP).trim();

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const answers = [body.a1, body.a2, body.a3, body.a4, body.a5].map((a) =>
    cap(a, TEXT_CAP)
  );

  if (answers.every((a) => a.trim() === "")) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const now = new Date();
  const day = now.toISOString().slice(0, 10);
  const displayName = name || "no name";

  const pairs = FIELD_QUESTIONS.map((q, i) => {
    const answer = answers[i].trim() === "" ? "— no answer —" : answers[i];
    return `${q}\n${answer}`;
  }).join("\n\n");

  const text = `${displayName} — ${email}\n\n${pairs}\n\n${now.toISOString()}\n`;

  const transporter = nodemailer.createTransport({
    host: "smtp.fastmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.FASTMAIL_SMTP_USER,
      pass: process.env.FASTMAIL_SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: ADDRESS,
      to: ADDRESS,
      replyTo: email,
      subject: `/field submission, ${displayName}, ${day}`,
      text,
    });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
