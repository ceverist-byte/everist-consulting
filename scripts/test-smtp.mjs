// Standalone Fastmail SMTP verification for the /field form transport.
// Loads credentials from .env.local and sends one test message.
// Run: node scripts/test-smtp.mjs

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import nodemailer from "nodemailer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, "..", ".env.local");

function loadEnvLocal(path) {
  let raw;
  try {
    raw = readFileSync(path, "utf8");
  } catch {
    console.error(`Could not read ${path}`);
    process.exit(1);
  }
  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadEnvLocal(envPath);

const user = process.env.FASTMAIL_SMTP_USER;
const pass = process.env.FASTMAIL_SMTP_PASS;

if (!user || !pass) {
  console.error(
    "FASTMAIL_SMTP_USER and FASTMAIL_SMTP_PASS must be set in .env.local"
  );
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: "smtp.fastmail.com",
  port: 465,
  secure: true,
  auth: { user, pass },
});

const timestamp = new Date().toISOString();

try {
  const info = await transporter.sendMail({
    from: "readiness@everistconsulting.com",
    to: "readiness@everistconsulting.com",
    subject: "[/field] SMTP test",
    text: `SMTP transport test for the /field form.\n\nSent: ${timestamp}\n`,
  });
  console.log("Sent. messageId:", info.messageId);
  console.log("Accepted:", info.accepted);
  console.log("Response:", info.response);
} catch (err) {
  console.error("Send failed:", err.message);
  process.exit(1);
}
