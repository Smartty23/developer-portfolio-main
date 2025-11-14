# Contact Form Setup - Visual Guide

## How the Contact Form Works

```
┌─────────────────────────────────────────────────────────────┐
│                    YOUR PORTFOLIO WEBSITE                    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │           CONTACT FORM                              │    │
│  │                                                     │    │
│  │  Name:    [John Doe____________]                   │    │
│  │  Email:   [john@example.com____]                   │    │
│  │  Message: [I'd like to hire you]                   │    │
│  │                                                     │    │
│  │           [Send Message] ← User clicks here        │    │
│  └────────────────────────────────────────────────────┘    │
│                          │                                   │
└──────────────────────────┼───────────────────────────────────┘
                           │
                           │ (Sends data using EmailJS)
                           ▼
                  ┌─────────────────┐
                  │    EMAILJS      │
                  │   (Free Service)│
                  └─────────────────┘
                           │
                           │ (Forwards as email)
                           ▼
                  ┌─────────────────┐
                  │  YOUR EMAIL     │
                  │  INBOX          │
                  │                 │
                  │  📧 New message │
                  │  From: John Doe │
                  │  john@example..│
                  └─────────────────┘
```

---

## Environment Variables Explained

### Where They Go:

**Local Development (.env.local file):**
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcDEF123xyz
```

**Netlify (Dashboard → Site settings → Environment variables):**
- Same variables, added through the web interface
- Must redeploy after adding them

---

## What Each Variable Does:

### 1. NEXT_PUBLIC_EMAILJS_SERVICE_ID
```javascript
// Used in: app/components/homepage/contact/contact-form.jsx
await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // ← Tells EmailJS which email service to use
  // ...
);
```
**Purpose:** Connects to your Gmail/Outlook/etc account

---

### 2. NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
```javascript
// Used in: app/components/homepage/contact/contact-form.jsx
await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // ← Tells EmailJS which template to use
  // ...
);
```
**Purpose:** Formats the email (subject, body, layout)

---

### 3. NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```javascript
// Used in: app/components/homepage/contact/contact-form.jsx
await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  { /* data */ },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // ← Authenticates your website
);
```
**Purpose:** Proves your website is authorized to send emails

---

## Step-by-Step Setup

### 📧 Step 1: Get EmailJS Credentials (5 minutes)

1. **Go to EmailJS:**
   - Visit: https://www.emailjs.com/
   - Click "Sign Up" (free account)

2. **Add Email Service:**
   - Dashboard → "Email Services" → "Add New Service"
   - Choose "Gmail" (or your email provider)
   - Click "Connect Account" and sign in
   - ✅ Copy the **Service ID** → This is `NEXT_PUBLIC_EMAILJS_SERVICE_ID`

3. **Create Template:**
   - Dashboard → "Email Templates" → "Create New Template"
   - Template Name: "Portfolio Contact"
   - Subject: `New message from {{from_name}}`
   - Content:
     ```
     Name: {{from_name}}
     Email: {{from_email}}
     
     Message:
     {{message}}
     ```
   - To Email: your-email@gmail.com
   - Reply To: `{{from_email}}`
   - ✅ Copy the **Template ID** → This is `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`

4. **Get Public Key:**
   - Dashboard → "Account" → "General"
   - ✅ Copy the **Public Key** → This is `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

---

### 🚀 Step 2: Add to Netlify (2 minutes)

1. **Go to your Netlify site:**
   - Site settings → Environment variables

2. **Add variables:**
   - Click "Add a variable"
   - Key: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - Value: (paste your Service ID)
   - Click "Create variable"
   
   - Repeat for:
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

3. **Redeploy:**
   - Deploys → Trigger deploy → Deploy site
   - Wait for deployment to finish

---

### ✅ Step 3: Test (1 minute)

1. Visit your live site
2. Scroll to contact form
3. Fill it out and click "Send Message"
4. Check your email inbox!

---

## Example Values

Here's what your variables should look like:

```bash
# ✅ CORRECT FORMAT:
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123xyz
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789abc
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=aBcDeFgHiJkLmNoPqR

# ❌ WRONG (don't include quotes or spaces):
NEXT_PUBLIC_EMAILJS_SERVICE_ID="service_abc123xyz"
NEXT_PUBLIC_EMAILJS_SERVICE_ID = service_abc123xyz
```

---

## Troubleshooting

### "Failed to send message"
- ✅ Check all 3 variables are set in Netlify
- ✅ Make sure you redeployed after adding variables
- ✅ Check EmailJS dashboard for error logs

### Not receiving emails?
- ✅ Check spam folder
- ✅ Verify "To Email" in EmailJS template
- ✅ Check EmailJS service is connected

### Form submits but no success message?
- ✅ Open browser console (F12) to see errors
- ✅ Verify variable names match exactly (case-sensitive)

---

## Free Tier Limits

EmailJS Free Plan:
- ✅ 200 emails/month
- ✅ 2 email services
- ✅ 2 email templates
- ✅ No credit card required

Perfect for a portfolio site!

---

## Security Note

**Why NEXT_PUBLIC_ prefix?**
- These variables are exposed to the browser (client-side)
- EmailJS public key is designed to be public
- It's safe because EmailJS has rate limiting and domain restrictions
- You can restrict which domains can use your key in EmailJS dashboard

**To restrict domains:**
1. EmailJS Dashboard → Account → Security
2. Add your Netlify domain (e.g., `yoursite.netlify.app`)
3. This prevents others from using your key
