import { NextRequest, NextResponse } from "next/server";

// Minimal payload accepted from the optional post-result email offer
interface QuizResultPayload {
  email?: string;
  quizTrack: "vdc" | "ai";
  resultName: string; // e.g. "Coordination Shop" or "Developing"
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as QuizResultPayload;
    const { email, quizTrack, resultName } = body;

    // Validate required fields
    if (!quizTrack || !resultName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Email is optional — only present if the user filled in the offer
    if (email && !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // ──────────────────────────────────────────────────────────────
    // STORAGE — wire this up when you're ready (Phase 2)
    //
    // Option A (Notion): uncomment and fill in NOTION_RESULTS_DB_ID
    //   import { Client } from "@notionhq/client";
    //   const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN });
    //   await notion.pages.create({
    //     parent: { database_id: process.env.NOTION_RESULTS_DB_ID! },
    //     properties: {
    //       Email: { email: email ?? null },
    //       Track: { select: { name: quizTrack } },
    //       Result: { title: [{ text: { content: resultName } }] },
    //       "Submitted at": { date: { start: new Date().toISOString() } },
    //     },
    //   });
    //
    // Option B (Supabase):
    //   import { createClient } from "@supabase/supabase-js";
    //   const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
    //   await supabase.from("quiz_results").insert({ email, quiz_track: quizTrack, result_name: resultName });
    //
    // For now: just log to console (visible in Vercel dashboard → Functions → Logs)
    // ──────────────────────────────────────────────────────────────
    console.log("Quiz result:", {
      email: email ?? "(no email provided)",
      quizTrack,
      resultName,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quiz results API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
