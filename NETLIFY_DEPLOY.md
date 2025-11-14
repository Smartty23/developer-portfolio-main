# Netlify Deployment Guide

## Quick Start

Your portfolio is ready for deployment! Follow these steps:

---

## Step 1: Set Up EmailJS (for Contact Form)

### 1.1 Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (100 emails/month free)

### 1.2 Add Email Service
1. Click **Email Services** → **Add New Service**
2. Choose your email provider (Gmail recommended)
3. For Gmail:
   - Click **Connect Account**
   - Sign in with your Gmail
   - Allow permissions
4. Copy the **Service ID** (e.g., `service_abc123`)

### 1.3 Create Email Template
1. Click **Email Templates** → **Create New Template**
2. Use this template:
   ```
   Subject: New Portfolio Contact from {{from_name}}
   
   You have a new message from your portfolio!
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   
   ---
   Reply directly to this email to respond.
   ```
3. Set **To Email** to your email address
4. Set **Reply To** to `{{from_email}}`
5. Save and copy the **Template ID** (e.g., `template_xyz789`)

### 1.4 Get Public Key
1. Click **Account** → **General**
2. Copy your **Public Key** (e.g., `abcDEF123xyz`)

---

## Step 2: Deploy to Netlify

### Option A: Drag & Drop (Easiest)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to https://app.netlify.com/drop
   - Drag the `out` folder onto the page
   - Wait for deployment to complete

3. **Add Environment Variables:**
   - Go to **Site settings** → **Environment variables**
   - Click **Add a variable** and add these:
   
   | Key | Value | Required |
   |-----|-------|----------|
   | `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Your Service ID from step 1.2 | ✅ Yes |
   | `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Your Template ID from step 1.3 | ✅ Yes |
   | `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Your Public Key from step 1.4 | ✅ Yes |
   | `NEXT_PUBLIC_GTM` | Your Google Tag Manager ID | ❌ Optional |

4. **Redeploy:**
   - Go to **Deploys** → **Trigger deploy** → **Deploy site**
   - This applies the environment variables

### Option B: Connect to GitHub

1. Go to https://app.netlify.com/
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub** and select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Add environment variables (same as Option A, step 3)
6. Click **Deploy site**

---

## Step 3: Test Contact Form

1. Visit your deployed site
2. Scroll to the contact section
3. Fill out the form and click **Send Message**
4. Check your email - you should receive the message!

---

## Local Development

To test locally with the contact form:

1. Create `.env.local` file in the project root
2. Add your EmailJS credentials:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcDEF123xyz
   ```
3. Run: `npm run dev`
4. Test the contact form at http://localhost:3000

---

## How It Works

### Contact Form Flow:
1. User fills out the form (name, email, message)
2. Clicks "Send Message"
3. EmailJS sends the data directly from the browser to your email
4. You receive an email with the contact details
5. You can reply directly to the sender

### Why EmailJS?
- ✅ No backend server needed
- ✅ Works with static sites
- ✅ Free tier (100 emails/month)
- ✅ Secure and reliable
- ✅ No API keys exposed (uses public key)

---

## Troubleshooting

### Contact form not working?
1. Check browser console for errors
2. Verify all 3 EmailJS variables are set in Netlify
3. Make sure you redeployed after adding variables
4. Check EmailJS dashboard for failed sends

### Need to update the site?
1. Make your changes
2. Run `npm run build`
3. Re-upload the `out` folder to Netlify (drag & drop)
   OR
4. Push to GitHub (auto-deploys if connected)

---

## Optional: Google Tag Manager

To track visitors:
1. Create account at https://tagmanager.google.com/
2. Get your Container ID (GTM-XXXXXX)
3. Add `NEXT_PUBLIC_GTM=GTM-XXXXXX` to Netlify environment variables
4. Redeploy

---

## Support

- EmailJS Docs: https://www.emailjs.com/docs/
- Netlify Docs: https://docs.netlify.com/
- Next.js Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
