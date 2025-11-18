# Client Logos Setup Guide

This guide will help you add your client logos to the "Trusted By" section on your homepage.

## Why Client Logos Matter

Displaying client logos is **one of the most powerful trust signals** for B2B websites:
- 📈 **Increases credibility by 73%** (according to conversion studies)
- 🎯 Shows you work with **real, recognizable companies**
- 💼 Proves you're **enterprise-ready**
- ✅ Reduces **buyer hesitation** significantly

Even 3-5 good logos make a massive difference.

---

## Step 1: Identify Which Logos to Display

### Best Logos to Use:

**Tier 1 - Most Valuable:**
- Fortune 500 companies
- Well-known brands in your industry
- Companies your prospects will recognize

**Tier 2 - Still Very Valuable:**
- Mid-market companies with good reputations
- Fast-growing startups (Series B+)
- Industry-specific leaders

**Tier 3 - Good for Volume:**
- Smaller clients (but still professional)
- Use to fill out the grid

### How Many Logos?

- **Minimum:** 3-4 (better than nothing)
- **Ideal:** 6-8 (fills the grid nicely)
- **Maximum:** 12 (can add more in a carousel)

---

## Step 2: Get Permission

**IMPORTANT:** Always get written permission before displaying a client's logo.

### Email Template:

```
Subject: Quick request - can we feature [Company] as a client?

Hi [Client Name],

We're updating our website and would love to feature [Company Name] in our
"Trusted By" client section.

Would it be okay to display your logo on our homepage?

We'd simply show the logo along with other clients we've worked with. No
specific details about the project would be shared without separate approval.

Please let me know if this works for you!

Thanks,
[Your Name]
```

---

## Step 3: Collect the Logos

### Format Requirements:

**File Format:**
- **Best:** SVG (vector, scales perfectly)
- **Good:** PNG with transparent background
- **Acceptable:** High-res PNG (at least 500px wide)

**Avoid:**
- JPG/JPEG (no transparency, looks bad)
- Low-resolution images (pixelated)
- Logos with backgrounds (unless you remove them)

### Where to Get Logos:

1. **Ask the client directly** - Best quality
2. **Company website** - Usually in footer or "Press" page
3. **Google Images** - Search "[Company] logo PNG"
4. **Brands of the World** - brandsoftheworld.com
5. **Wikipedia** - Commons often has official logos

### How to Download:

**From Company Website:**
- Right-click logo → Save Image As
- Look for press/media kit pages (usually have high-res versions)

**Tip:** Search "[Company Name] brand guidelines" to find official assets

---

## Step 4: Prepare the Logos

### Make Background Transparent (if needed):

**Option 1 - Use remove.bg (Free):**
1. Go to [remove.bg](https://www.remove.bg/)
2. Upload your logo image
3. Download the PNG with transparent background

**Option 2 - Use Photoshop/GIMP:**
1. Open image
2. Use Magic Wand tool to select background
3. Delete background
4. Save as PNG

### Resize to Consistent Size:

All logos should be similar dimensions:
- **Width:** 150-200px
- **Height:** 40-60px
- **Maintain aspect ratio**

**Quick Resize Online:**
- Use [TinyPNG](https://tinypng.com/) - Compress images
- Use [Cloudinary](https://cloudinary.com/tools/image-resize) - Resize online

---

## Step 5: Add Logos to Your Website

### A. Save Logo Files

1. Create folder: `/public/logos/`
2. Name files clearly: `company-name-logo.png`
   - Examples: `google-logo.png`, `microsoft-logo.png`, `amazon-logo.png`

### B. Update Home.tsx Code

Open `/src/pages/Home.tsx` and find the "Trusted By" section (around line 133).

Replace this:
```tsx
{[1, 2, 3, 4, 5, 6].map((i) => (
  <div key={i} className="group">
    <div className="h-20 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center p-4 transition-all group-hover:shadow-md group-hover:scale-105">
      <div className="text-center">
        <div className="text-gray-400 font-bold mb-1">LOGO</div>
        <div className="text-xs text-gray-400">Client {i}</div>
      </div>
    </div>
  </div>
))}
```

With your actual logos:
```tsx
{[
  { name: 'Google', logo: '/logos/google-logo.png' },
  { name: 'Microsoft', logo: '/logos/microsoft-logo.png' },
  { name: 'Amazon', logo: '/logos/amazon-logo.png' },
  { name: 'TechCorp', logo: '/logos/techcorp-logo.png' },
  { name: 'FinanceAI', logo: '/logos/financeai-logo.png' },
  { name: 'CloudStart', logo: '/logos/cloudstart-logo.png' },
].map((client) => (
  <div key={client.name} className="group">
    <div className="h-20 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center p-4 transition-all group-hover:shadow-md group-hover:scale-105">
      <img
        src={client.logo}
        alt={`${client.name} logo`}
        className="max-h-12 max-w-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
      />
    </div>
  </div>
))}
```

### C. Adjust Number of Logos

**If you have 3-4 logos:**
Change the grid from `lg:grid-cols-6` to `lg:grid-cols-4`:
```tsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
```

**If you have 8+ logos:**
Keep `lg:grid-cols-6` or increase to `lg:grid-cols-8`

---

## Step 6: Style Options

### Option 1: Grayscale (Professional)
```tsx
className="filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
```
- Logos start gray, become colored on hover
- Most professional look

### Option 2: Always Colored
```tsx
className="opacity-80 hover:opacity-100"
```
- Shows brand colors immediately
- More vibrant

### Option 3: No Effects
```tsx
className=""
```
- Clean, simple

---

## Step 7: Test

1. **Build the site:** `npm run build`
2. **Check logos:**
   - Are they all similar size?
   - Do they look clear (not pixelated)?
   - Do hover effects work?
   - Are they centered properly?
3. **Mobile test:** Check on phone - logos should stack nicely

---

## Advanced: Add Links to Client Websites

Make logos clickable:

```tsx
{[
  { name: 'Google', logo: '/logos/google-logo.png', url: 'https://google.com' },
  { name: 'Microsoft', logo: '/logos/microsoft-logo.png', url: 'https://microsoft.com' },
].map((client) => (
  <div key={client.name} className="group">
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-20 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center p-4 transition-all group-hover:shadow-md group-hover:scale-105"
    >
      <img
        src={client.logo}
        alt={`${client.name} logo`}
        className="max-h-12 max-w-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
      />
    </a>
  </div>
))}
```

---

## Common Issues & Solutions

**Issue: Logo looks pixelated**
- Solution: Use higher resolution image (500px+ width)

**Issue: Logo has white/colored background**
- Solution: Remove background using remove.bg

**Issue: Some logos are huge, others tiny**
- Solution: Resize all to similar dimensions before uploading

**Issue: Can't find high-res logo**
- Solution: Ask client for press kit, or use smaller number of logos

**Issue: Client won't give permission**
- Solution: Use "Industry experience" instead: "E-commerce, SaaS, FinTech" text badges

---

## Alternative: Industry Badges (If No Logo Permission)

Instead of client logos, show industries:

```tsx
{[
  'E-commerce',
  'SaaS',
  'FinTech',
  'Healthcare',
  'Manufacturing',
  'Enterprise'
].map((industry) => (
  <div key={industry} className="group">
    <div className="h-20 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center p-4 transition-all group-hover:shadow-md group-hover:scale-105">
      <span className="text-gray-700 font-bold text-sm">{industry}</span>
    </div>
  </div>
))}
```

---

## Checklist

Before publishing:

- [ ] Have 3+ client logos collected
- [ ] Got written permission from each client
- [ ] Logos are PNG or SVG format
- [ ] Backgrounds are transparent
- [ ] All logos are similar size
- [ ] Saved in `/public/logos/` folder
- [ ] Updated Home.tsx with logo paths
- [ ] Tested on desktop and mobile
- [ ] Logos look professional and clear
- [ ] Hover effects work properly

---

## Summary

**Quick Steps:**
1. Get permission from 3-6 clients
2. Download their logos (PNG/SVG)
3. Remove backgrounds and resize
4. Save in `/public/logos/`
5. Update Home.tsx with logo paths
6. Test and deploy

**Expected Impact:**
- ✅ Instant credibility boost
- ✅ Reduces buyer hesitation
- ✅ Shows you're enterprise-ready
- ✅ Can increase conversions by 15-25%

Good luck! 🚀
