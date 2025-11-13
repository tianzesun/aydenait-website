# Contact Form Setup Guide

The contact form is fully functional and uses serverless functions to send emails. This guide will help you configure email delivery for your contact form submissions.

## Overview

The contact form implementation includes:
- **Frontend**: React form with validation and error handling (src/pages/Contact.tsx)
- **Backend**: Netlify serverless function (netlify/functions/contact.ts)
- **Email Services**: Supports SendGrid, Mailgun, or SMTP (Gmail, Outlook, custom)

## Quick Setup

### Step 1: Choose an Email Service

Select ONE of the following email services:

#### Option 1: SendGrid (Recommended - Easiest)
- **Free tier**: 100 emails/day
- **Best for**: Production use, easy setup
- **Setup time**: 5 minutes

#### Option 2: Mailgun
- **Free tier**: 5,000 emails/month for 3 months
- **Best for**: High volume, developer-friendly
- **Setup time**: 10 minutes

#### Option 3: SMTP (Gmail, Outlook, Custom)
- **Free tier**: Depends on provider
- **Best for**: Using existing email account
- **Setup time**: 5 minutes

---

## Configuration Instructions

### Option 1: SendGrid Setup

1. **Sign up for SendGrid**
   - Visit: https://signup.sendgrid.com/
   - Free tier: 100 emails/day forever

2. **Create API Key**
   - Go to: https://app.sendgrid.com/settings/api_keys
   - Click "Create API Key"
   - Name it: "AydenAIT Contact Form"
   - Select "Full Access" or "Restricted Access" with Mail Send permission
   - Copy the API key (you'll only see it once!)

3. **Verify Sender Email**
   - Go to: https://app.sendgrid.com/settings/sender_auth/senders
   - Click "Create New Sender"
   - Use your company email (e.g., hello@aydenait.com)
   - Verify the email address

4. **Set Environment Variables in Netlify**
   - Go to your Netlify site dashboard
   - Navigate to: Site settings → Environment variables
   - Add these variables:
     ```
     SENDGRID_API_KEY=your_sendgrid_api_key_here
     SENDGRID_FROM_EMAIL=hello@aydenait.com
     ADMIN_EMAIL=hello@aydenait.com
     ```

5. **Redeploy your site**
   - Trigger a new deploy in Netlify
   - Test the contact form!

---

### Option 2: Mailgun Setup

1. **Sign up for Mailgun**
   - Visit: https://signup.mailgun.com/
   - Free tier: 5,000 emails/month for 3 months

2. **Get API Credentials**
   - Go to: https://app.mailgun.com/app/account/security/api_keys
   - Copy your "Private API key"
   - Note your domain (e.g., sandbox123.mailgun.org or your verified domain)

3. **Set Environment Variables in Netlify**
   - Go to your Netlify site dashboard
   - Navigate to: Site settings → Environment variables
   - Add these variables:
     ```
     MAILGUN_API_KEY=your_mailgun_private_api_key
     MAILGUN_DOMAIN=your_mailgun_domain
     ADMIN_EMAIL=hello@aydenait.com
     ```

4. **Redeploy your site**
   - Trigger a new deploy in Netlify
   - Test the contact form!

---

### Option 3: SMTP Setup (Gmail Example)

1. **Enable 2-Factor Authentication** (for Gmail)
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Create App Password** (for Gmail)
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password

3. **Set Environment Variables in Netlify**
   - Go to your Netlify site dashboard
   - Navigate to: Site settings → Environment variables
   - Add these variables:
     ```
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_USER=your-email@gmail.com
     SMTP_PASS=your_16_char_app_password
     SMTP_FROM=hello@aydenait.com
     ADMIN_EMAIL=hello@aydenait.com
     ```

4. **For Outlook/Office 365**:
   ```
   SMTP_HOST=smtp.office365.com
   SMTP_PORT=587
   SMTP_USER=your-email@outlook.com
   SMTP_PASS=your_password
   ```

5. **Redeploy your site**
   - Trigger a new deploy in Netlify
   - Test the contact form!

---

## Local Development

### Testing Locally with Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Create .env file**
   ```bash
   cp .env.example .env
   ```

3. **Edit .env with your credentials**
   ```
   # Choose ONE of the options above and add credentials
   SENDGRID_API_KEY=your_key_here
   SENDGRID_FROM_EMAIL=hello@aydenait.com
   ADMIN_EMAIL=hello@aydenait.com
   ```

4. **Run local development server**
   ```bash
   netlify dev
   ```
   This runs your site at http://localhost:8888 with serverless functions enabled.

5. **Test the contact form**
   - Fill out the form and submit
   - Check your email for the submission

---

## Troubleshooting

### Form submission fails with "Failed to send message"

**Check:**
1. Are environment variables set correctly in Netlify?
2. Have you redeployed after setting environment variables?
3. Is your email service API key valid?
4. Check Netlify function logs: Site → Functions → contact → Logs

### Emails not being received

**Check:**
1. Verify the ADMIN_EMAIL environment variable is correct
2. Check spam/junk folders
3. For SendGrid: Verify sender email is authenticated
4. For SMTP: Ensure app password is correct (not regular password)

### "Method not allowed" error

**Issue:** The serverless function only accepts POST requests.
**Solution:** Ensure your form is using POST method (already configured in Contact.tsx)

### Local testing not working

**Check:**
1. Using `netlify dev` (not `npm run dev`)
2. .env file exists and has correct format
3. Environment variables have no quotes around values

---

## Email Templates

The serverless function sends both plain text and HTML emails. To customize the email template:

1. Edit: `netlify/functions/contact.ts`
2. Find the `text` and `html` sections
3. Modify the template as needed
4. Commit and push changes

---

## Security Features

✓ **Input validation**: Required fields, email format validation
✓ **Rate limiting**: Consider adding rate limiting for production
✓ **CORS**: Serverless function only accepts POST requests
✓ **Environment variables**: Sensitive data stored securely in Netlify
✓ **No API keys in frontend**: All email logic in serverless function

---

## Cost Breakdown

| Service | Free Tier | Overage Cost |
|---------|-----------|-------------|
| **SendGrid** | 100 emails/day | $19.95/month for 50K emails |
| **Mailgun** | 5,000 emails/month (3 months) | $0.80 per 1,000 emails |
| **Gmail SMTP** | ~500 emails/day | N/A (account limit) |

**Recommendation**: Start with SendGrid's free tier (100 emails/day). For most small businesses, this is more than enough.

---

## Support

If you need help:
1. Check Netlify function logs for errors
2. Verify environment variables are set correctly
3. Test with `netlify dev` locally first
4. Check email service status pages

---

## Next Steps

After setup is complete:

1. ✅ Test the contact form thoroughly
2. ✅ Update contact information in src/pages/Contact.tsx:
   - Email address
   - Phone number
   - Business address
   - Social media links
3. ✅ Set up email notifications for form submissions
4. ✅ Consider adding Google reCAPTCHA for spam protection (optional)

---

## Additional Features (Optional)

### Add reCAPTCHA

To prevent spam, you can add Google reCAPTCHA:

1. Get reCAPTCHA keys: https://www.google.com/recaptcha/admin
2. Add reCAPTCHA to the form in Contact.tsx
3. Verify token in netlify/functions/contact.ts
4. Documentation: https://developers.google.com/recaptcha/docs/v3

### Save to Database

To save submissions to a database:

1. Set up a database (e.g., Supabase, Firebase, MongoDB Atlas)
2. Add database save logic in netlify/functions/contact.ts
3. Store: name, email, phone, message, timestamp

### Email Notifications

To receive instant notifications:

1. Use the email service already configured (automatic)
2. Or integrate with Slack: https://api.slack.com/messaging/webhooks
3. Or integrate with Discord webhooks

---

## Questions?

For more help, refer to:
- **Netlify Functions**: https://docs.netlify.com/functions/overview/
- **SendGrid Docs**: https://docs.sendgrid.com/
- **Mailgun Docs**: https://documentation.mailgun.com/
- **Nodemailer Docs**: https://nodemailer.com/about/
