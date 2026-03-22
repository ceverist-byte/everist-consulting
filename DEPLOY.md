# Everist Consulting — Deployment Guide

## Prerequisites
- Node.js 18.17+ installed (`node -v` to check)
- A Vercel account (free tier: vercel.com)
- A GitHub account (optional but recommended)
- ConvertKit account (free tier handles up to 10,000 subscribers)
- Calendly account (free tier works fine)

---

## Step 1 — Install dependencies

Open a terminal in the project folder:

```bash
cd everist-consulting
npm install
```

Test the site locally:

```bash
npm run dev
```

Open http://localhost:3000 — you should see the homepage.

---

## Step 2 — Set up Calendly

1. Log in to calendly.com
2. Create a new event type:
   - Name: "VDC Structural Diagnostic"
   - Duration: 30 minutes
   - Description: "A structured 30-minute conversation that maps your VDC structure against your stated outcomes."
3. Copy your scheduling link (e.g. `https://calendly.com/your-name/vdc-structural-diagnostic`)
4. Open `app/contact/ContactClient.tsx`
5. Replace the `CALENDLY_URL` constant at the top of the file with your link

---

## Step 3 — Set up ConvertKit

### Create forms (7 total)

In ConvertKit → **Landing Pages & Forms** → **Create Form** → **Inline** each time:

**VDC track (4 forms — one per archetype):**
1. "VDC Archetype 1 — Coordination Shop"
2. "VDC Archetype 2 — Preconstruction Tool Group"
3. "VDC Archetype 3 — Execution Engine"
4. "VDC Archetype 4 — Strategic Delivery Office"

**AI track (3 forms — one per tier):**
5. "AI Adoption — Foundational"
6. "AI Adoption — Developing"
7. "AI Adoption — Advanced"

For each form, note the **Form ID** from the URL (`convertkit.com/forms/XXXXXXX/edit`).

### Get your API key
ConvertKit → **Settings** → **Developer** → **API Key** (copy the secret key, not the public one)

### Create tags (optional but recommended for segmentation)
ConvertKit → **Subscribers** → **Tags** → create:
- `quiz-vdc`
- `quiz-ai`
- `vdc-archetype-1`
- `vdc-archetype-2`
- `vdc-archetype-3`
- `vdc-archetype-4`
- `ai-foundational`
- `ai-developing`
- `ai-advanced`

### Set up email sequences (one per form)
For the VDC track, each archetype gets a 3-email sequence:
- **Email 1** (immediate): Full archetype report with their specific signals and path forward
- **Email 2** (+3 days): "What it takes to shift" — the structural decisions your archetype needs to make
- **Email 3** (+7 days): Discovery call CTA — the 30-minute Structural Diagnostic offer

---

## Step 4 — Create your .env.local file

In the project root, create a file called `.env.local`:

```bash
# ConvertKit
CONVERTKIT_API_KEY=your_api_secret_key_here

# VDC quiz forms (Archetype 1–4)
CONVERTKIT_FORM_VDC_1=1234567
CONVERTKIT_FORM_VDC_2=1234568
CONVERTKIT_FORM_VDC_3=1234569
CONVERTKIT_FORM_VDC_4=1234570

# AI quiz forms (3 tiers)
CONVERTKIT_FORM_AI_FOUNDATIONAL=1234571
CONVERTKIT_FORM_AI_DEVELOPING=1234572
CONVERTKIT_FORM_AI_ADVANCED=1234573
```

Replace each value with your actual ConvertKit form IDs and API key.

**Important:** `.env.local` is in `.gitignore` and will never be committed to GitHub. It only lives on your machine and in Vercel's environment variable settings.

---

## Step 5 — Update content

### Email address
Search for `chris@everistconsulting.com` in these files and update:
- `components/Footer.tsx`
- `app/contact/ContactClient.tsx`

### Domain metadata
Open `app/layout.tsx` and update:
```typescript
metadataBase: new URL("https://everistconsulting.com"),
```
Change to your actual domain.

### LinkedIn URL (optional)
If you want to add a LinkedIn link to the footer or about page, add it to `components/Footer.tsx`.

---

## Step 6 — Deploy to Vercel

### Option A: Via Vercel CLI (recommended for first deploy)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from the project folder
cd everist-consulting
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (your Vercel account)
# - Link to existing project? No (first time)
# - Project name: everist-consulting
# - Directory: ./
# - Override settings? No
```

Your site will deploy to a `.vercel.app` URL immediately.

### Option B: Via GitHub + Vercel dashboard

1. Push the project to a GitHub repo
2. Log in to vercel.com → **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects Next.js — accept all defaults
5. Deploy

### Add environment variables to Vercel

After deploying:
1. Vercel dashboard → your project → **Settings** → **Environment Variables**
2. Add each variable from your `.env.local` file
3. Set scope to **Production**, **Preview**, and **Development**
4. Redeploy after adding variables: `vercel --prod`

---

## Step 7 — Connect your custom domain

1. Vercel dashboard → **Settings** → **Domains**
2. Add `everistconsulting.com`
3. Vercel gives you DNS records to add at your domain registrar
4. Add the records (typically an A record and CNAME)
5. DNS propagates within 24–48 hours (usually much faster)
6. SSL certificate provisions automatically

---

## Day-to-day editing guide

### Update text content
Every page's content is in its corresponding file:
- **Homepage**: `app/page.tsx` — edit the text strings directly
- **About**: `app/about/page.tsx` — timeline, philosophy, credentials
- **Services**: `app/services/page.tsx` — phases, pricing, service lines
- **Assessment**: `app/assessment/page.tsx` + `AssessmentClient.tsx`
- **Contact**: `app/contact/page.tsx` + `ContactClient.tsx`

All text is in plain strings inside JSX — search for the phrase you want to change and edit it.

### Update quiz questions
- **VDC quiz**: `lib/quiz-vdc.ts` → `VDC_QUIZ.questions` array
- **AI quiz**: `lib/quiz-vdc.ts` → `AI_QUIZ.questions` array

Each question has:
```typescript
{
  id: "q1",           // Don't change these IDs
  domain: "...",      // Section label shown in quiz
  question: "...",    // The question text
  subtext: "...",     // Optional — shown below question
  options: [          // Always 4 options: A, B, C, D
    { label: "A", text: "..." },
    // ...
  ]
}
```

### Update archetype descriptions
`lib/archetypes.ts` → `ARCHETYPES` object. Each archetype has:
- `name`, `tagline`, `description`
- `signals` — array of bullet points
- `whatItMeans`, `shiftPath`

### Redeploy after edits

If using Claude Code locally:
```bash
vercel --prod
```

If using GitHub integration: push to main branch — Vercel deploys automatically.

---

## Performance notes

- Lighthouse score target: 95+ on all metrics
- Images: use `next/image` if you add photos — it auto-optimizes
- Fonts: loaded via `next/font` — no flash of unstyled text
- The quiz runs entirely client-side — no loading states except the email submission

---

## Troubleshooting

**Quiz emails not sending:**
- Check Vercel environment variables are set and you've redeployed
- Check ConvertKit API key is the secret key (not public)
- Check form IDs match exactly — no leading/trailing spaces

**Calendly not loading:**
- The Calendly script loads client-side — it may not appear in dev if blocked by an ad blocker
- Test in an incognito window without extensions

**Build errors:**
- Run `npm run build` locally to see errors before deploying
- TypeScript errors will block the build — read the error message carefully

**Domain not working:**
- Wait 24 hours for DNS propagation
- Use dnschecker.org to verify your records are live
