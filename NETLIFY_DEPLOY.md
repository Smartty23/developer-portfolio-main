# Netlify Deployment Guide

## Drag & Drop Deployment

Your portfolio is now ready for drag-and-drop deployment to Netlify!

### Steps:

1. **Build the project** (already done):
   ```bash
   npm run build
   ```

2. **Drag and drop the `out` folder** to Netlify:
   - Go to https://app.netlify.com/drop
   - Drag the `out` folder from your project directory
   - Drop it on the Netlify page

3. **Set up environment variables** (optional, for contact form):
   - Go to Site settings → Environment variables
   - Add these variables:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
     - `NEXT_PUBLIC_GTM` (Google Tag Manager, optional)

### EmailJS Setup (for contact form):

1. Create a free account at https://www.emailjs.com/
2. Create an email service
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add them to Netlify environment variables

### Notes:

- The `out` folder contains your static site
- No server-side code - fully static and fast
- Contact form uses EmailJS (client-side)
- Images are unoptimized for static export

### Rebuild for updates:

```bash
npm run build
```

Then re-upload the `out` folder to Netlify.
