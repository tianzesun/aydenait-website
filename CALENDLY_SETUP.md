# Calendly Integration Setup Guide

This guide will help you set up Calendly for instant consultation booking on your website.

## Why Calendly?

Adding Calendly scheduling increases consultation bookings by **2-3x** compared to contact forms alone because:
- ✅ Removes friction - prospects can book instantly
- ✅ Shows your availability - builds trust and professionalism
- ✅ Automatic reminders - reduces no-shows
- ✅ Syncs with your calendar - prevents double-booking

---

## Step 1: Create Your Calendly Account

1. Go to [calendly.com](https://calendly.com)
2. Sign up for a **free account** (or paid for advanced features)
3. Connect your Google Calendar, Outlook, or other calendar

---

## Step 2: Create Your Event Type

1. Click **"Create New Event Type"**
2. Choose **"One-on-One"**
3. Configure your consultation event:

### Recommended Settings for Enterprise Consulting:

**Event Name:**
- "Free AI Consultation" or "Enterprise Discovery Call"

**Duration:**
- 30 minutes (for initial consultation)
- 60 minutes (for in-depth strategy session)

**Description:** (Example)
```
In this free 30-minute consultation, we'll discuss:

• Your current AI/IT challenges and pain points
• Potential solutions and approaches
• How we can help accelerate your digital transformation
• Next steps and timeline

No obligation - just an open conversation about your needs.
```

**Location:**
- Google Meet (automatic video link)
- Zoom (if you prefer)
- Phone call

**Availability:**
- Set your working hours (e.g., Mon-Fri, 9am-5pm EST)
- Add buffer time between meetings (15 min recommended)

**Questions to Ask:** (Collect info before call)
- Company name
- Industry
- Current challenges
- What brings you to this call?

---

## Step 3: Get Your Calendly Link

1. After creating your event, Calendly will generate a link like:
   ```
   https://calendly.com/your-name/30min
   ```

2. Copy this link

---

## Step 4: Update Your Website

Replace `YOUR-CALENDLY-LINK` in these files with your actual Calendly link:

### **src/pages/Home.tsx** (Line 213)
```typescript
href="https://calendly.com/YOUR-CALENDLY-LINK"
```
Replace with:
```typescript
href="https://calendly.com/your-name/30min"
```

### **src/pages/Services.tsx** (Line 276)
```typescript
href="https://calendly.com/YOUR-CALENDLY-LINK"
```
Replace with:
```typescript
href="https://calendly.com/your-name/30min"
```

---

## Step 5: Test Your Integration

1. Visit your website
2. Click "Schedule Free Consultation"
3. Verify:
   - ✓ Opens your Calendly page
   - ✓ Shows correct availability
   - ✓ Event description is clear
   - ✓ Questions are helpful

---

## Step 6: Set Up Notifications

In Calendly Settings:
1. Enable **email notifications** for new bookings
2. Enable **calendar invites** (automatically sent to attendees)
3. Add **email reminders** (1 day before, 1 hour before)
4. Enable **SMS reminders** (if on paid plan)

---

## Advanced Setup (Optional)

### Calendly Embed Widget

Instead of linking to Calendly, you can **embed it directly** on your Contact page:

1. Get your embed code from Calendly
2. Create a new component `src/components/CalendlyWidget.tsx`:

```tsx
const CalendlyWidget = () => {
  return (
    <div className="calendly-inline-widget"
         data-url="https://calendly.com/your-name/30min"
         style={{minWidth: '320px', height: '700px'}}>
    </div>
  );
};

export default CalendlyWidget;
```

3. Add Calendly script to `index.html`:
```html
<script src="https://assets.calendly.com/assets/external/widget.js"></script>
```

### Multiple Event Types

Create different Calendly events for different needs:
- **30-min discovery call** (general inquiries)
- **60-min strategy session** (serious prospects)
- **15-min quick chat** (follow-ups)

Then use different links for different CTAs.

---

## Pro Tips for Maximum Conversions

1. **Use Clear CTA Text:**
   - ✅ "Schedule Free Consultation"
   - ✅ "Book Your Discovery Call"
   - ❌ "Calendly" or "Book Now"

2. **Highlight Benefits:**
   - "30-minute free consultation"
   - "No commitment required"
   - "NDA provided"

3. **Show Social Proof Near Scheduling:**
   - Place testimonials above Calendly CTA
   - Show trust badges
   - Display "50+ consultations booked this month"

4. **Follow Up Immediately:**
   - Send confirmation email with:
     - What to prepare for the call
     - Link to case studies
     - Your LinkedIn profile
   - Add to your CRM

5. **Track Conversions:**
   - Use Calendly analytics to see booking rates
   - A/B test different CTA copy
   - Measure show-up rates

---

## Common Issues & Solutions

**Issue: No one is booking**
- Solution: Make CTA more prominent, add urgency, improve copy

**Issue: Too many no-shows**
- Solution: Add more reminder emails, require phone number, ask commitment question

**Issue: Wrong type of leads**
- Solution: Add qualifying questions, be clearer about who you serve, increase minimum project size in description

---

## Need Help?

- Calendly Support: [help.calendly.com](https://help.calendly.com)
- Video Tutorial: Search "Calendly setup tutorial" on YouTube
- Integration Questions: Check Calendly's integration docs

---

## Summary

✅ Create Calendly account
✅ Set up 30-min consultation event
✅ Get your Calendly link
✅ Replace `YOUR-CALENDLY-LINK` in Home.tsx and Services.tsx
✅ Test the integration
✅ Set up notifications and reminders

**Expected Result:**
- 2-3x increase in consultation bookings
- Higher quality leads (self-qualified)
- Less time spent on email back-and-forth
- Professional, streamlined booking experience

Good luck! 🚀
