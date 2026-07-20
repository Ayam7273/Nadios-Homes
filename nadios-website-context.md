# NADIOS HOMES & PROPERTIES LIMITED — Website Build Context File

## 1. COMPANY OVERVIEW
- **Company Name:** Nadios Homes & Properties Limited
- **Industry:** Real Estate Development, Property Construction, Residential Housing Development, Property Investment, Property Management, Real Estate Advisory Services
- **Experience:** 10+ years
- **Head Office:** 17 Ijaiye Street, Itire, Lagos 102215, Lagos, Nigeria
- **Tagline:** Building Quality Homes. Creating Lasting Value.

---

## 2. BRAND IDENTITY

### Primary Colour
- **Brand Green:** `#028B4A`
- **Dark Green (hover/accent):** `#016A38`
- **Light Green (tint/bg wash):** `#E8F5EE`

### Supporting Palette (derive from brand green)
- **Off-White / Background:** `#F8FAF9`
- **Deep Charcoal (text):** `#1A1A1A`
- **Mid Grey (body text):** `#4A4A4A`
- **Light Grey (borders/dividers):** `#E0E0E0`
- **White:** `#FFFFFF`

### Typography
- **Display / Heading Font:** `Playfair Display` (Google Fonts) — elegant, premium real estate feel
- **Body Font:** `DM Sans` (Google Fonts) — clean, modern, readable
- **Accent / Caption Font:** `DM Mono` or small-caps `DM Sans` — for labels, tags, stats

### Logo
- File: `Nadio-Logo_V2.png` (provided — place in `/assets/images/logo.png`)
- Use on: navbar (white bg version), footer, favicon

---

## 3. WEBSITE STRUCTURE (8 Pages + Features)

### Pages
1. **Home** (`index.html`)
2. **About Us** (`about.html`)
3. **Services** (`services.html`)
4. **Projects / Properties** (`projects.html`)
5. **Why Choose Us** (`why-us.html`) — *merged into About or standalone section*
6. **Gallery** (`gallery.html`)
7. **Testimonials** (`testimonials.html`) — *can be section on Home*
8. **FAQs** (`faqs.html`)
9. **Contact** (`contact.html`)
10. **Investment Calculator** (`calculator.html`) — *CREATIVE ADD-ON page not on Hollybrook*

---

## 4. PAGE-BY-PAGE CONTENT

### HOME PAGE

#### Hero Section (full-screen video hero, like Hollybrook)
- **Background:** Full-screen video placeholder (`[VIDEO PLACEHOLDER — aerial drone footage of Lagos residential development]`)
- **Headline:** `Building Quality Homes. Creating Lasting Value.`
- **Sub-headline:** `For over 10 years, Nadios Homes & Properties Limited has been delivering exceptional residential developments across Nigeria — combining premium construction, modern design, and long-term investment value.`
- **Primary CTA Button:** `Explore Our Projects`
- **Secondary CTA Button:** `Contact Us`
- **Scroll indicator:** animated down arrow

#### About Preview Strip (dark green band, like Hollybrook's intro strip below hero)
- Short paragraph: *"At Nadios Homes & Properties Limited, we believe every property should be built with integrity, precision, and attention to detail. Our team develops residential properties that meet modern living standards while remaining affordable and investment-worthy."*
- Link: `More About Nadios →`

#### Core Teams / Services Grid (4-tile grid like Hollybrook "Core Teams")
- Tile 1: **Property Development** — `[IMAGE PLACEHOLDER — planning/design table]`
- Tile 2: **Construction Services** — `[IMAGE PLACEHOLDER — construction site]`
- Tile 3: **Property Management** — `[IMAGE PLACEHOLDER — property manager at building]`
- Tile 4: **Investment Advisory** — `[IMAGE PLACEHOLDER — meeting with investors]`

#### Featured Projects Section (alternating full-width + half-width tiles like Hollybrook portfolio grid)
- Project 1 (full-width): `[IMAGE PLACEHOLDER — hero project exterior]` — "Coming Soon / Featured Development — Lagos"
- Project 2 (half-width): `[IMAGE PLACEHOLDER]` — "Residential Estate — Lagos"
- Project 3 (half-width): `[IMAGE PLACEHOLDER]` — "Luxury Homes — Lagos"
- CTA: `Explore All Projects →`

#### Stats / Numbers Bar
- `10+` Years of Experience
- `50+` Homes Delivered
- `100%` Client Satisfaction Focus
- `3` Active Developments

#### Testimonials Carousel (3 testimonials)
- *Placeholder names and quotes — client to supply real ones*

#### Why Choose Us Strip (6 icon+text cards)
1. 10+ Years Industry Experience
2. Quality Construction Standards
3. Professional Project Management
4. Customer-Focused Approach
5. Reliable Delivery Standards
6. Long-Term Investment Value

---

### ABOUT US PAGE

#### Hero Banner
- Background: `[IMAGE PLACEHOLDER — team photo or site photo]`
- Title: `About Nadios`

#### Our Story
*"Founded with a vision to contribute to Nigeria's growing real estate sector, Nadios Homes & Properties Limited has spent more than a decade building residential properties designed for modern lifestyles. Through professionalism, transparency, and quality workmanship, the company has established itself as a trusted name in property development and construction."*

#### Mission / Vision / Values (3 columns)
- **Mission:** To develop high-quality residential properties that improve living standards, deliver value to investors, and contribute positively to community development.
- **Vision:** To become one of Nigeria's most trusted and respected property development companies, recognised for excellence, innovation, and customer satisfaction.
- **Core Values:** Integrity · Excellence · Innovation · Accountability · Customer Satisfaction · Sustainability

#### Values Cards (3 cards like Hollybrook)
- Card 1: **Integrity & Accountability** — We build trust through transparency, take ownership of our work, and follow through on every commitment.
- Card 2: **Excellence & Innovation** — We deliver to the highest standards while embracing modern methods and continuous improvement.
- Card 3: **Partnership & Long-Term Thinking** — We collaborate openly, build lasting relationships, and create sustainable value for clients, communities, and future residents.

#### Team Image
- `[IMAGE PLACEHOLDER — Nadios team photo]`

#### Core Services Tiles (same 4-tile grid as homepage)

---

### SERVICES PAGE

#### Hero Banner
- Title: `Our Services`
- Subtitle: `End-to-end property development and advisory services tailored to Nigeria's real estate market.`

#### Service Cards (6 cards, icon + title + description)
1. **Property Development** — End-to-end development from planning and design to construction and delivery.
2. **Construction Services** — Professional construction with emphasis on quality materials, safety, and durability.
3. **Property Management** — Maintenance and management services to preserve property value and improve occupancy.
4. **Investment Advisory** — Guidance for investors seeking opportunities in Nigeria's growing real estate market.
5. **Project Management** — Strategic planning, supervision, budgeting, and execution of construction projects.
6. **Property Sales & Acquisition** — Support for clients buying, selling, or acquiring residential properties.

---

### PROJECTS / PROPERTIES PAGE

#### Hero Banner
- Title: `Our Developments`
- Subtitle: `Explore residential properties built with quality craftsmanship, modern architecture, and long-term investment value.`

#### Filter Tabs (JS-powered)
- All | Completed | Ongoing | Upcoming

#### Project Grid (masonry/alternating layout like Hollybrook portfolio)
Each project card:
- `[IMAGE PLACEHOLDER]`
- Project Name
- Location (Lagos)
- Status badge (Completed / Ongoing / Upcoming)
- Short description
- `View Project →` link

**Placeholder Projects:**
1. **Nadios Court Phase 1** — Itire, Lagos — Completed — `[IMAGE PLACEHOLDER]`
2. **Greenfield Estate** — Surulere, Lagos — Completed — `[IMAGE PLACEHOLDER]`
3. **Palm Gardens Residence** — Ikorodu, Lagos — Ongoing — `[IMAGE PLACEHOLDER]`
4. **Horizon Homes** — Lekki, Lagos — Upcoming — `[IMAGE PLACEHOLDER]`
5. **Sunrise Estate** — Gbagada, Lagos — Upcoming — `[IMAGE PLACEHOLDER]`

#### Individual Project Detail Page Template (`project-detail.html`)
- Hero image `[IMAGE PLACEHOLDER]`
- Project name, location, status
- Description
- Features list (bedrooms, bathrooms, size, finishes)
- Gallery grid `[IMAGE PLACEHOLDERS x6]`
- Enquiry form

---

### GALLERY PAGE

#### Masonry photo grid layout
- Filter: All | Exteriors | Interiors | Construction Progress | Sites
- `[IMAGE PLACEHOLDERS — 12 minimum grid items]`
- Lightbox on click

---

### TESTIMONIALS PAGE (or section on Home)

#### 3-column card layout
Each card:
- Quote text
- Client name (placeholder)
- Property purchased
- Star rating (5 stars default)

---

### FAQ PAGE

#### Accordion layout
**Q: What services does Nadios provide?**
A: Property development, construction, project management, property management, and investment advisory.

**Q: Where is Nadios located?**
A: 17 Ijaiye Street, Itire, Lagos 102215, Lagos, Nigeria.

**Q: Do you handle residential projects?**
A: Yes. Nadios specialises in quality residential developments.

**Q: Can investors partner with Nadios?**
A: Yes. Investment and development partnership opportunities can be discussed directly with our team.

**Q: What areas in Lagos do you develop in?**
A: We have developed properties across various Lagos locations including Itire, Surulere, Ikorodu, Lekki, and Gbagada.

**Q: How long does a typical project take?**
A: Timelines vary by project scope. Our team provides detailed schedules during initial consultations.

**Q: Do you offer flexible payment plans?**
A: Yes. We offer structured payment plans for off-plan purchases. Contact us to discuss available options.

---

### CONTACT PAGE

#### Layout: Split — left info panel, right contact form (like Hollybrook)
- **Heading:** `Get In Touch`
- **Subtext:** *Ready to discuss your next property project or investment opportunity? Our team is available to answer your questions and provide professional guidance.*
- **Office Address:** 17 Ijaiye Street, Itire, Lagos 102215, Lagos, Nigeria
- **Form Fields:** Full Name | Phone Number | Email Address | Subject (dropdown: General Enquiry / Buy a Property / Investment Partnership / Project Management / Other) | Message | Submit Button
- **Google Maps embed placeholder:** `[GOOGLE MAPS EMBED PLACEHOLDER — 17 Ijaiye Street, Itire, Lagos]`
- **WhatsApp CTA button:** `Chat on WhatsApp` (link to `https://wa.me/234XXXXXXXXXX` — client to fill number)

---

### INVESTMENT CALCULATOR PAGE *(Creative Add-On — not on Hollybrook)*

#### Concept
An interactive ROI / property investment calculator to help prospective investors estimate returns on Nadios properties.

#### UI Layout
- Clean split layout: left = input sliders/fields, right = live results card
- Branded green accent on results

#### Inputs
- Property Price (₦ slider or input — range ₦5M to ₦500M)
- Initial Deposit (% slider — 10% to 50%)
- Loan Tenure (years — 5, 10, 15, 20)
- Expected Annual Rental Yield (% — default 8%)
- Annual Property Appreciation Rate (% — default 12%)

#### Outputs (live calculated)
- Estimated Monthly Rental Income (₦)
- Estimated 5-Year Capital Gain (₦)
- Total ROI % at 5 Years
- Estimated Net Yield After Management Fee

#### Disclaimer
*"This calculator provides estimates only and is not financial advice. Contact Nadios for a personalised investment consultation."*

---

## 5. DESIGN & LAYOUT SYSTEM (Inspired by Hollybrook)

### Navigation (Fixed/Sticky)
- Logo left
- Nav links centre: Home | About Us | Services | Projects | Gallery | Contact
- CTA button right: `Contact Us` (filled green)
- Mobile: hamburger menu, full-screen overlay nav
- On scroll: nav background becomes white with drop shadow

### Hero Sections
- **Homepage:** Full-screen video background, dark overlay, white text, animated headline reveal
- **Inner pages:** Full-width image banner, 50% dark overlay, page title centred

### Section Rhythm (Hollybrook pattern)
- Alternating white and off-white (`#F8FAF9`) section backgrounds
- Occasional full-width dark green (`#028B4A`) sections for CTAs and stats
- Generous vertical padding: `120px` desktop, `60px` mobile

### Cards & Tiles
- Subtle box shadows
- On hover: slight lift (`translateY(-4px)`) + shadow deepens
- Image tiles: zoom effect on hover (`transform: scale(1.04)` on inner image)
- Border-radius: `4px` (subtle, not pill-shaped)

### Buttons
- Primary: filled `#028B4A`, white text, hover → `#016A38`
- Secondary: transparent, `#028B4A` border + text, hover → filled green
- Arrow CTAs: inline text link with `→` that slides right on hover

### Footer
- Dark green background (`#016A38`)
- Logo (white version or logo on dark)
- 4-column layout: About | Quick Links | Services | Contact
- Social icons: Facebook, Instagram, LinkedIn, Twitter/X
- Bottom bar: © 2025 Nadios Homes & Properties Limited | Privacy Policy | Terms

---

## 6. CREATIVE ADD-ON FEATURES (Not on Hollybrook)

1. **Investment ROI Calculator page** — `/calculator.html` — full interactive JS calculator in Naira (₦)
2. **WhatsApp Floating Chat Button** — bottom-right corner, always visible, links to WhatsApp
3. **Project Status Badges** — colour-coded: Completed (green), Ongoing (amber), Upcoming (blue)
4. **Back-to-Top Button** — appears after scroll, smooth scroll
5. **Cookie Consent Banner** — simple, matches brand
6. **Lazy-loading images** — `loading="lazy"` on all `<img>` tags
7. **Smooth scroll** — `scroll-behavior: smooth` on `html`
8. **Scroll-triggered fade-in animations** — IntersectionObserver on section entries
9. **Active nav highlighting** — JS detects current page
10. **SEO meta tags** — Open Graph, Twitter Card, description per page

---

## 7. FILE STRUCTURE

```
nadios-website/
├── index.html
├── about.html
├── services.html
├── projects.html
├── project-detail.html
├── gallery.html
├── testimonials.html (or section)
├── faqs.html
├── contact.html
├── calculator.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   ├── logo.png              ← Upload: Nadio-Logo_V2.png
│   │   ├── logo-white.png        ← Create or use same logo on dark bg
│   │   ├── hero-placeholder.jpg  ← Upload: aerial/exterior photo
│   │   ├── about-team.jpg        ← Upload: team photo
│   │   ├── project-1.jpg         ← Upload: Nadios Court
│   │   ├── project-2.jpg         ← Upload: Greenfield Estate
│   │   ├── project-3.jpg         ← Upload: Palm Gardens
│   │   ├── project-4.jpg         ← Upload: Horizon Homes
│   │   ├── project-5.jpg         ← Upload: Sunrise Estate
│   │   ├── gallery-1.jpg → gallery-12.jpg ← Upload: gallery images
│   │   ├── service-1.jpg         ← Property Development
│   │   ├── service-2.jpg         ← Construction
│   │   ├── service-3.jpg         ← Management
│   │   └── service-4.jpg         ← Advisory
│   └── video/
│       └── hero-video.mp4        ← Upload: drone/aerial video
└── favicon.ico
```

---

## 8. TECHNICAL SPECIFICATIONS

- **Pure HTML / CSS / Vanilla JS** — no framework required (or use as single-page SPA with JS routing if preferred)
- **Google Fonts:** `Playfair Display` (700, 900) + `DM Sans` (300, 400, 500, 700)
- **Icons:** Lucide Icons CDN or Font Awesome Free (for service icons, social icons)
- **No jQuery** — pure vanilla JS
- **Responsive:** Mobile-first. Breakpoints: 375px, 768px, 1024px, 1280px, 1440px
- **Accessibility:** Alt text on all images, semantic HTML5, ARIA labels on interactive elements
- **Performance:** Lazy load images, minified CSS/JS in production, preload critical fonts

---

## 9. IMAGE PLACEHOLDER STYLE

All image placeholders should be styled divs with:
- Background: `#E8F5EE` (light green tint)
- Border: `2px dashed #028B4A`
- Centred label text: e.g. `[IMAGE: Exterior Photo — Hero]`
- Aspect ratio maintained (e.g. `aspect-ratio: 16/9` or `aspect-ratio: 4/3`)
- No broken `<img>` tags — use `<div class="img-placeholder">` with descriptive label

---

## 10. COPY TONE OF VOICE

- Professional but approachable
- Confident — "we deliver", "we build", not "we try to"
- Nigerian context — mention Lagos, Nigeria naturally
- Investment-focused when speaking to investors
- Community-focused when speaking to homebuyers
- Always end sections with a CTA

---

*End of Context File — Nadios Homes & Properties Limited Website Build*
*Prepared for: Claude IDE / Developer Handoff*
*Brand Primary: #028B4A | Fonts: Playfair Display + DM Sans*
