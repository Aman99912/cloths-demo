from pathlib import Path

content = r"""# ULTRA-PREMIUM INDIAN CLOTHING BRAND LANDING PAGE
## Agent Build Specification

---

# 1. CORE OBJECTIVE

Build an **ultra-premium Indian clothing/fashion brand landing page** that creates a powerful first impression immediately.

This is a **brand landing page / campaign website**, NOT a traditional ecommerce store.

The website should feel like:

- A premium Indian fashion house
- A luxury campaign website
- An editorial fashion experience
- A high-end design agency case-study
- Sophisticated, cinematic and expensive
- Modern Indian, but not stereotypically ethnic
- Minimal, confident and highly polished

The entire experience must look intentional.

The target reaction should be:

> "This looks like a real premium fashion brand."

Do not make it look like a generic HTML demo, ecommerce template, SaaS website, Bootstrap template or AI-generated template.

---

# 2. NON-NEGOTIABLE TECHNOLOGY RULES

## ONLY use

- HTML5
- CSS3
- Vanilla JavaScript

## NEVER use

- Bootstrap
- Tailwind CSS
- jQuery
- React
- Next.js
- Vue
- Angular
- Svelte
- GSAP
- AOS
- Framer Motion
- Swiper
- Slick
- Any CSS framework
- Any JavaScript framework
- Any UI component library
- Any animation library
- Any carousel library
- Any icon library

No dependencies are required.

The website must work with plain HTML + CSS + JS.

Use native:

- CSS transitions
- CSS animations
- CSS Grid
- Flexbox
- IntersectionObserver
- JavaScript event listeners
- Inline SVG
- CSS variables
- Native dialogs/modals where appropriate

---

# 3. IMPORTANT: THIS IS NOT AN ECOMMERCE WEBSITE

Do NOT build a normal online store.

Do NOT make the website dominated by:

- Product grids
- Filters
- Sorting
- Shopping categories
- Large ecommerce menus
- Cart-heavy UI
- Checkout
- Marketplace UI

The primary purpose is to **sell the brand and aesthetic**, not to build a complete shopping platform.

Products may appear as part of the visual storytelling, but the experience must remain a **fashion brand landing page**.

---

# 4. DESIGN REFERENCE DIRECTION

Use the overall quality and premium fashion presentation of Indian fashion brands and editorial fashion sites as inspiration.

The visual direction should combine:

- Indian fashion sensibility
- Luxury editorial photography
- Modern typography
- Large visual compositions
- Sophisticated whitespace
- Smooth cinematic movement
- Premium storytelling

Do NOT copy:

- Logos
- Brand names
- Exact wording
- Exact layouts
- Existing illustrations
- Existing photographs
- Proprietary visual identities

Create a completely fictional original brand.

---

# 5. BRAND IDENTITY

Create a fictional premium Indian clothing brand.

The brand name should be short, memorable and premium.

Examples of naming direction:

- AAVRA
- VÉRA
- AARA
- NOORÉ
- VAYRA
- ÉLANE
- AARÉ

Choose ONE original brand name and use it consistently.

Do not use an existing fashion brand name.

Create a refined text-based logo using typography.

No logo image is necessary.

---

# 6. COLOR SYSTEM

The entire design should be based around a sophisticated **cream / ivory / warm neutral palette**.

Use CSS variables.

Suggested direction:

```css
:root {
  --cream: #F4EEE4;
  --ivory: #FBF8F2;
  --sand: #E4D8C7;
  --taupe: #B8AA96;
  --espresso: #2A211B;
  --charcoal: #302A25;
  --muted: #766B60;
  --bronze: #9A8061;
  --white: #FFFFFF;
}
```

These are examples only. Refine them based on the final visual composition.

The palette should feel:

- Warm
- Premium
- Calm
- Expensive
- Timeless

Avoid:

- Bright red
- Neon
- Electric blue
- Purple gradients
- Excessive black
- Cheap gold
- Excessive saturation

No generic gradients.

---

# 7. TYPOGRAPHY

Use a premium serif + modern sans-serif combination.

### Display / headlines

Use an elegant editorial serif.

### UI / supporting content

Use a clean modern sans-serif.

Typography hierarchy must be strong.

Use:

- Huge hero typography
- Elegant thin/regular serif
- Small uppercase labels
- Carefully spaced navigation
- Tight editorial headings
- Comfortable body copy

Use:

```css
font-size: clamp(...)
```

for responsive typography.

Do not make every heading bold.

Large whitespace + typography should create the luxury feeling.

---

# 8. WEBSITE STRUCTURE

Build the landing page with these sections:

1. Announcement bar
2. Main navbar
3. Hero campaign
4. Brand introduction
5. Collections / edits
6. Editorial story
7. Featured looks
8. Craftsmanship / philosophy
9. About the brand
10. Campaign image section
11. Private styling / experience
12. Newsletter
13. Footer

The page should flow like a fashion editorial rather than a store.

---

# 9. ANNOUNCEMENT BAR

Create a very thin top announcement bar.

Example:

`THE NEW AUTUMN EDIT — NOW PRESENTING`

Other possibilities:

`PRIVATE PREVIEW · AUTUMN / WINTER 2026`

Keep it subtle.

It should not visually compete with the hero.

---

# 10. NAVBAR

Create a premium transparent/overlay navbar.

Desktop:

LEFT:

- COLLECTIONS
- JOURNAL
- ABOUT

CENTER:

- BRAND LOGO / BRAND NAME

RIGHT:

- SEARCH
- INSTAGRAM
- MENU

Do not use a shopping bag or ecommerce-heavy controls.

Navbar should be minimal.

When scrolling:

- Navbar changes from transparent to cream
- Text becomes dark
- Subtle border appears
- Slight background blur if appropriate
- Smooth transition
- Sticky positioning

No excessive shadow.

---

# 11. ALL NAVIGATION MUST ACTUALLY WORK

This is mandatory.

Do NOT create decorative links that do nothing.

Every navigation item must have a real action.

### COLLECTIONS

Clicking "COLLECTIONS" should smoothly scroll to the collections section.

### JOURNAL

Clicking "JOURNAL" should smoothly scroll to the editorial/journal section.

### ABOUT

Clicking "ABOUT" should smoothly scroll to the about section.

### SEARCH

Open a functioning fullscreen search overlay.

Search must:

- Open
- Close
- Have an input
- Accept text
- Show relevant demo results from predefined content
- Allow clicking a result
- Close with X
- Close with Escape
- Support keyboard focus

### INSTAGRAM

Open the configured Instagram destination in a new tab.

Use a fictional/demo URL if a real account is not available.

### MENU

Open a full-screen/mobile navigation overlay.

The overlay must actually work.

---

# 12. HERO — MOST IMPORTANT SECTION

The hero must be spectacular.

This is the first thing the client sees.

Use a large, beautiful Indian fashion campaign image.

Possible visual direction:

- Indian model
- Premium contemporary clothing
- Neutral studio
- Soft natural light
- Architectural background
- Beige / stone / warm cream environment
- Editorial fashion photography

The image should dominate the viewport.

Use:

```css
min-height: 100svh;
```

or an equivalent responsive hero height.

Hero content:

Small label:

`AUTUMN / WINTER 2026`

Large headline:

Example:

`FORM, FABRIC,
AND THE ART
OF ARRIVAL.`

Supporting paragraph:

`A contemporary expression of Indian craftsmanship, shaped into refined silhouettes for the modern wardrobe.`

Primary CTA:

`EXPLORE THE EDIT`

Secondary CTA:

`OUR STORY`

Both must work.

---

# 13. HERO ANIMATION

The hero animation should feel cinematic.

Initial sequence:

1. Hero image softly appears
2. Image subtly scales from ~1.04 to 1
3. Small label fades upward
4. Main heading reveals line by line
5. Paragraph appears
6. CTA appears

Timing should be elegant.

Avoid:

- Bounce
- Elastic animations
- Huge rotations
- Flashing
- Over-animation

Luxury = restraint.

---

# 14. HERO IMAGE QUALITY

Images are extremely important.

Use high-quality fashion/editorial imagery.

Prefer:

- Indian models
- Indian fashion
- Premium contemporary clothing
- Neutral environments
- Strong composition
- High resolution
- Consistent lighting

Images should have a cohesive art direction.

Do not mix random stock photos.

Do not use:

- Watermarked images
- Low-resolution imagery
- Cartoon imagery
- Poorly cropped models
- Visually inconsistent photos

Every image should feel like it belongs to the same campaign.

---

# 15. BRAND INTRODUCTION

Immediately after the hero, introduce the brand.

Use a strong editorial statement.

Example:

`NOT MADE TO FOLLOW.
MADE TO BE REMEMBERED.`

Supporting text:

`Rooted in Indian craft and interpreted through a contemporary lens, we create clothing where texture, proportion and detail become the language of personal style.`

Keep the copy concise.

Use strong typography.

---

# 16. COLLECTIONS SECTION

This should not look like an ecommerce category grid.

Create an editorial collection presentation.

Example:

### 01 — THE QUIET FORM

Image + editorial text

`Quiet silhouettes. Precise construction. A study in restraint.`

CTA:

`VIEW EDIT`

### 02 — MONSOON LIGHT

Image + editorial text

### 03 — AFTER DUSK

Image + editorial text

Use alternating layouts:

- Image left / text right
- Text left / image right
- Large image
- Narrow text column

This should feel like a fashion magazine.

---

# 17. COLLECTION INTERACTION

Collection cards should feel alive.

On hover:

- Image subtly zooms
- Typography shifts slightly
- Arrow moves
- Image cropping gently changes

Use CSS transitions.

No excessive effects.

Clicking `VIEW EDIT` should open a proper collection overlay or dedicated internal section.

For demo purposes:

- Show collection title
- Show 3–6 looks
- Description
- Close button

Everything must work with vanilla JS.

---

# 18. EDITORIAL / JOURNAL SECTION

Create a fashion editorial section called:

`THE JOURNAL`

Include 3 editorial stories.

Example titles:

`The New Indian Silhouette`

`Inside the Craft`

`Dressing Between Seasons`

Each story should have:

- Editorial image
- Category
- Title
- Short description
- Read button

Clicking a story must open an actual working article modal.

The article modal should contain:

- Large image
- Title
- Body copy
- Close button
- Previous / Next article navigation

No dead buttons.

---

# 19. FEATURED LOOKS

Create a visual lookbook section.

Use large imagery.

Possible layout:

- One dominant portrait
- Two smaller editorial images
- One wide horizontal image

Add small labels such as:

`LOOK 01`

`LOOK 02`

`LOOK 03`

This section should feel like a digital campaign.

Do NOT turn it into product cards.

---

# 20. LOOKBOOK LIGHTBOX

Clicking any look should open a fullscreen lightbox.

Required functionality:

- Open image
- Close
- Next
- Previous
- Keyboard arrows
- Escape to close
- Background click to close where appropriate
- Image counter

Example:

`03 / 08`

The lightbox should animate elegantly.

---

# 21. CRAFTSMANSHIP / PHILOSOPHY

Create a premium section around craftsmanship.

Possible content:

`MADE SLOW.
DESIGNED TO LAST.`

Copy:

`Every piece begins with material, proportion and patience. Traditional techniques meet contemporary construction to create clothing that feels considered in every detail.`

Visual:

- Macro fabric photograph
- Artisan detail
- Needle/thread
- Hand finishing
- Textile texture

Keep this section atmospheric.

---

# 22. ABOUT THE BRAND

Create a proper About section.

Heading:

`ABOUT AAVRA`

or the selected fictional brand name.

Content should communicate:

- Contemporary Indian identity
- Craftsmanship
- Modern silhouettes
- Thoughtful materials
- Long-term design philosophy
- Personal expression

Example:

`We are an independent Indian clothing label exploring the space between heritage and modernity. Our collections are built around thoughtful proportions, tactile fabrics and details that reveal themselves slowly.`

Include:

- Founder/brand philosophy statement
- Established year
- Location
- Design approach

Do not invent an elaborate fake corporate history.

Keep the fictional brand story believable and concise.

---

# 23. BRAND STATEMENT SECTION

Create a visually dramatic full-width statement.

Example:

`INDIA, REIMAGINED
THROUGH CLOTHING.`

Use a strong background image.

This should be one of the strongest visual moments on the page.

---

# 24. PRIVATE EXPERIENCE SECTION

Create a luxury-service section.

Instead of ecommerce features, communicate brand experience.

Three elegant items:

### PRIVATE STYLING

One-on-one styling sessions.

### PERSONAL APPOINTMENTS

Discover the collection privately.

### CURATED DELIVERY

Thoughtfully packaged pieces delivered to you.

Each can open a small information modal.

All buttons/links must work.

---

# 25. CONTACT / APPOINTMENT INTERACTION

Create a working appointment modal.

Fields:

- Name
- Email
- Phone
- Preferred Date
- Message

Submit button:

`REQUEST APPOINTMENT`

No backend needed.

On successful validation:

Show a beautiful success state/toast:

`THANK YOU — YOUR REQUEST HAS BEEN RECEIVED.`

Do not actually submit data anywhere.

Validate with vanilla JS.

---

# 26. NEWSLETTER

Create a minimal premium newsletter.

Heading:

`A LITTLE SOMETHING BEFORE EVERYONE ELSE.`

Supporting copy:

`Join our private list for collection previews, editorial stories and invitations.`

Email field.

Button:

`JOIN THE LIST`

Validation must work.

Show success feedback.

---

# 27. FOOTER

Premium oversized footer.

Include:

### EXPLORE

- Collections
- Journal
- About
- Lookbook

### EXPERIENCE

- Private Styling
- Appointments
- Contact

### FOLLOW

- Instagram
- Pinterest
- Facebook

### LEGAL

- Privacy
- Terms

LEGAL links should open functioning lightweight modal panels with demo legal copy.

No dead links.

Add:

- Brand logo
- Short brand sentence
- Copyright

Footer should have generous spacing.

---

# 28. SEARCH EXPERIENCE

Create a sophisticated fullscreen search experience.

When opened:

- Page darkens softly
- Search field appears large
- Autofocus
- Search results update while typing

Use a small predefined JavaScript data set.

Example searchable content:

- Autumn Edit
- Monsoon Light
- The New Indian Silhouette
- Craftsmanship
- About
- Styling

Clicking a result should navigate/scroll to its section or open its corresponding modal.

Search must be functional.

---

# 29. MOBILE EXPERIENCE

Mobile is NOT just a smaller desktop.

Redesign thoughtfully.

Mobile navbar:

- Hamburger
- Center logo
- Search icon

Mobile menu:

- Fullscreen or large overlay
- Large typography
- Animated entrance
- Functional links

Hero:

- Correct mobile crop
- Carefully sized typography
- No text clipping
- CTA remains accessible

Editorial layouts should stack beautifully.

Lookbook should be swipe-like through native interaction or simple horizontal scrolling.

No horizontal page overflow.

---

# 30. RESPONSIVE BREAKPOINTS

Test at:

- 1536px
- 1440px
- 1280px
- 1024px
- 900px
- 768px
- 600px
- 480px
- 390px
- 375px

Use fluid layouts where possible.

Use:

- CSS Grid
- Flexbox
- clamp()
- min()
- max()
- calc()

Do not rely on hundreds of arbitrary media-query overrides.

---

# 31. SCROLL ANIMATIONS

Use only CSS + vanilla JavaScript.

Primary tool:

`IntersectionObserver`

Animate:

- Section labels
- Headings
- Images
- Paragraphs
- Collection blocks
- Journal cards
- Brand statement

Use staggered timing where appropriate.

Animation style:

- opacity
- translateY
- clip-path reveal if used carefully
- scale
- subtle image movement

No gimmicks.

Do not animate every element.

---

# 32. PARALLAX

A subtle parallax effect may be used for large campaign images.

Requirements:

- Minimal movement
- Respect reduced-motion preference
- Never cause jank
- Never lock scrolling

Use vanilla JS only.

---

# 33. MICRO-INTERACTIONS

Every major interactive element should have a refined response.

Buttons:

- Subtle background change
- Text movement
- Arrow movement

Links:

- Elegant underline/reveal

Images:

- Gentle zoom

Navigation:

- Active state

Modal:

- Fade + scale

Close buttons:

- Smooth interaction

Cursor:

Optional subtle custom cursor for desktop only.

Do NOT use custom cursor on mobile.

---

# 34. ICONS

Do NOT use icon packages.

Use inline SVG.

Create only the icons you need:

- Search
- Menu
- Close
- Arrow
- Instagram
- Play if needed
- Chevron

Keep icon strokes thin and refined.

---

# 35. IMAGE IMPLEMENTATION

Use real image URLs or provided local assets.

Prefer modern responsive image techniques where possible.

Use:

```html
loading="lazy"
decoding="async"
```

for below-the-fold images.

Hero should load immediately.

Use descriptive alt text.

Images must have intentional aspect ratios.

---

# 36. IMAGE ART DIRECTION

All imagery should share one art direction.

Recommended visual language:

- Warm daylight
- Cream architecture
- Neutral walls
- Sandstone
- Linen
- Natural fabrics
- Indian faces/features
- Contemporary styling
- Editorial poses
- Subtle shadows
- Architectural compositions

Avoid cliché visual treatment.

Do not make every photo look like a wedding catalogue.

This is contemporary premium Indian fashion.

---

# 37. CONTENT QUALITY

Do not fill sections with meaningless placeholder text like:

- Lorem ipsum
- Random "Welcome to our store"
- Generic marketing slogans
- Repetitive AI-generated paragraphs

Write concise fashion-editorial copy.

Every section should have a reason for existing.

Text should feel:

- Human
- Sophisticated
- Confident
- Minimal
- Fashion editorial

---

# 38. NO FAKE UI

This is extremely important.

Do NOT create:

- Buttons that do nothing
- Menu items that do nothing
- Tabs that do nothing
- Modal triggers that do nothing
- Fake forms
- Broken social links
- Dead CTAs

Every visible interactive element must have a working action.

If a feature cannot be implemented properly, remove it instead of leaving a fake control.

---

# 39. INTERACTION STATE SYSTEM

Use vanilla JS state where required.

Manage:

- Active mobile menu
- Active modal
- Active collection
- Active article
- Active lightbox image
- Search query
- Newsletter form state
- Appointment form state
- Toast state

Keep JS organized.

Do not create one enormous `main.js` with tangled logic.

Use clear functions.

Example structure:

```js
const state = {
  menuOpen: false,
  activeModal: null,
  activeCollection: null,
  activeArticle: 0,
  activeLook: 0
};
```

Refine as needed.

---

# 40. ACCESSIBILITY

Must include:

- Semantic HTML
- Proper heading hierarchy
- `aria-label`
- `aria-expanded`
- `aria-controls`
- Keyboard navigation
- Focus management for modals
- Escape key handling
- Visible focus states
- Alt text
- Reduced motion support

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled, simplify animations significantly.

---

# 41. PERFORMANCE

Keep the page lightweight.

Use:

- Minimal JS
- Minimal DOM
- CSS animation over JS animation where possible
- Lazy loaded images
- Event delegation where appropriate
- No animation framework
- No unnecessary watchers/loops

Avoid scroll event handlers doing expensive DOM work.

Use `requestAnimationFrame` only where necessary.

---

# 42. FILE STRUCTURE

Use:

```text
/project
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
└── assets/
    └── images/
```

Keep HTML, CSS and JavaScript separate.

Do not put everything into one file unless there is a strong reason.

---

# 43. HTML QUALITY

Use semantic elements:

- header
- nav
- main
- section
- article
- footer
- button
- dialog where appropriate

Avoid unnecessary div nesting.

Keep the markup readable.

---

# 44. CSS QUALITY

Create reusable design primitives.

Use CSS variables for:

- Colors
- Typography
- Spacing
- Borders
- Transition timing
- Container width

Create reusable classes/components for:

- Buttons
- Section headers
- Editorial image blocks
- Modal
- Overlay
- Navigation
- Cards

Do not repeat huge CSS blocks.

---

# 45. DESIGN SYSTEM DETAILS

Use a controlled spacing system.

Example:

```css
--space-xs
--space-sm
--space-md
--space-lg
--space-xl
--space-2xl
```

Create:

- Consistent max-width
- Consistent gutters
- Consistent section rhythm

Desktop page should breathe.

Mobile should remain spacious without wasting vertical space.

---

# 46. PREMIUM DETAILS THAT MATTER

Pay attention to:

- Image cropping
- Baseline alignment
- Letter spacing
- Thin borders
- Button dimensions
- Section whitespace
- Nav spacing
- Serif/sans contrast
- Modal transitions
- Hover timings
- Text line length
- Image aspect ratios

The difference between "good" and "ultra-premium" is usually these details.

---

# 47. AVOID THESE DESIGN MISTAKES

Do NOT use:

- Huge pill-shaped buttons everywhere
- Over-rounded cards
- Excessive drop shadows
- Random glassmorphism
- Neon gradients
- Floating blobs
- Generic AI illustrations
- Massive icon cards
- SaaS dashboard layouts
- Excessive animations
- Rainbow color palettes
- Cheap gold effects
- Unnecessary 3D objects

Luxury design should be restrained.

---

# 48. VISUAL HIERARCHY

Each viewport should have one clear focal point.

Example:

Hero:
IMAGE + HEADLINE

Next:
BRAND STATEMENT

Next:
COLLECTION STORY

Next:
EDITORIAL

Next:
CRAFT

Next:
ABOUT

Next:
EXPERIENCE

Next:
NEWSLETTER

Do not make every section compete for attention.

---

# 49. DESKTOP EXPERIENCE

At 1440px+, the website should feel like an award-quality fashion editorial.

Use:

- Large photography
- Large typography
- Asymmetric layouts
- Generous whitespace
- Carefully positioned content

Do not stretch text across the whole screen.

Use controlled content widths.

---

# 50. MOBILE EXPERIENCE

Mobile should feel equally premium.

Use:

- Large editorial images
- Strong but readable typography
- Horizontal lookbook where useful
- Reduced animation
- Proper touch targets
- Simplified navigation
- Clean spacing

Do not create tiny buttons.

---

# 51. FINAL QA

Before finishing, manually verify all of the following.

### Technical

- [ ] Only HTML
- [ ] Only CSS
- [ ] Only vanilla JavaScript
- [ ] No Bootstrap
- [ ] No Tailwind
- [ ] No frameworks
- [ ] No libraries
- [ ] No animation libraries

### Visual

- [ ] Cream/ivory premium theme
- [ ] Indian contemporary fashion identity
- [ ] Ultra-premium typography
- [ ] High-quality consistent imagery
- [ ] Hero looks exceptional
- [ ] Editorial composition
- [ ] Strong whitespace
- [ ] No generic ecommerce appearance

### Functionality

- [ ] Navbar works
- [ ] Collection navigation works
- [ ] Journal navigation works
- [ ] About navigation works
- [ ] Search opens
- [ ] Search actually filters results
- [ ] Search result navigation works
- [ ] Mobile menu opens/closes
- [ ] Collection modal works
- [ ] Journal article modal works
- [ ] Previous/next article works
- [ ] Lookbook lightbox works
- [ ] Previous/next image works
- [ ] Keyboard controls work
- [ ] Appointment modal works
- [ ] Appointment validation works
- [ ] Newsletter validation works
- [ ] Social links work
- [ ] Legal modals work
- [ ] Escape closes overlays
- [ ] Back-to-top works
- [ ] Smooth scrolling works

### Responsive

- [ ] 1440px
- [ ] 1280px
- [ ] 1024px
- [ ] 768px
- [ ] 480px
- [ ] 390px
- [ ] 375px
- [ ] No horizontal overflow
- [ ] No clipped text
- [ ] No broken images
- [ ] No overlapping content

### Accessibility

- [ ] Semantic HTML
- [ ] Alt text
- [ ] Keyboard navigation
- [ ] Focus states
- [ ] ARIA states
- [ ] Reduced motion support

---

# 52. FINAL CREATIVE STANDARD

Do not stop when the website is merely functional.

Do not stop when it technically satisfies the requirements.

Push the visual quality much further.

The final website should feel like:

**A premium Indian fashion campaign presented by an elite digital design studio.**

The design should communicate:

**quiet luxury + contemporary Indian identity + editorial fashion + craftsmanship + confidence.**

The cream theme must feel intentional throughout the entire experience.

Every image should feel curated.

Every section should have a purpose.

Every interaction should work.

Every animation should feel refined.

Every navigation item should lead somewhere.

No fake tabs.

No dead buttons.

No placeholder UI.

No unnecessary ecommerce functionality.

No framework dependencies.

No compromises on visual quality.

## FINAL SUCCESS CRITERIA

The finished result should satisfy all five:

**1. ULTRA-PREMIUM**
Looks expensive and professionally art-directed.

**2. ORIGINAL**
Inspired by premium Indian fashion presentation, but not a clone of any existing brand.

**3. EDITORIAL**
Feels like a fashion campaign, not a generic store.

**4. FUNCTIONAL**
Every interaction, navigation item, modal, form and CTA works.

**5. RESPONSIVE**
The experience remains premium from a 1536px desktop down to a 375px mobile screen.

---

# FINAL INSTRUCTION TO THE AGENT

Build it as though a premium Indian clothing brand has hired an elite creative-development studio and this landing page is the first thing their customers will ever see.

Do not optimize for "how much content can fit on the page."

Optimize for:

**IMPACT → STORY → DESIRE → TRUST → ACTION**

And maintain this principle throughout:

> **LESS, BUT BETTER.**
"""
path = Path("/mnt/data/agent.md")
path.write_text(content, encoding="utf-8")
print(path)
