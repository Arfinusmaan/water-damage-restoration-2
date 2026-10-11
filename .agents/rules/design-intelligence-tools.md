# DESIGN INTELLIGENCE — SKILLS, TOOLS & KNOWLEDGE INTEGRATION LAYER
# Extension to: web-design-intelligence.md (DO NOT replace or override)

## HIERARCHY
MASTER DESIGN SYSTEM → DESIGN SKILLS → PROJECT DESIGN SYSTEM → DESIGN.md → IMPLEMENTATION → BROWSER TESTING → DESIGN REVIEW → REFINEMENT

---

## PART 1 — INTEGRATED WORKFLOW

When building websites, combine ALL of the following as ONE integrated design workflow:

- Master Design System (web-design-intelligence.md)
- Typography preferences & color vocabulary from Master System
- Layout, animation, image-first philosophy from Master System
- Inspiration sources from Master System
- Anti-generic / anti-AI-slop rules from Master System
- Design skills installed below
- DESIGN.md / design-system resources
- Vercel web design guidelines (QA layer)
- Image-to-code workflows
- Browser-based visual testing
- Accessibility, UX, performance, and responsive testing

Workflow: RESEARCH → UNDERSTAND → SYNTHESIZE → DESIGN → BUILD → TEST → REVIEW → REFINE.

---

## PART 2 — PERSISTENCE STRATEGY

Do not claim model retraining. Instead use:
- skills, project instructions, DESIGN.md, AGENTS.md
- agent configuration, reusable design references
- local documentation, installed CLI skills, reusable workflow files

---

## PART 3 — TASTE SKILL

Repository: https://github.com/Leonxlnx/taste-skill
Install: npx skills add Leonxlnx/taste-skill

Use for: design taste and visual reasoning.

When building a website, ask internally: "What useful design reasoning from Taste Skill applies here?"

If Taste Skill conflicts with Master Design System → Master Design System takes priority.
If both can coexist → combine them.

---

## PART 4 — IMAGE-TO-CODE SKILL

Source: https://github.com/Leonxlnx/taste-skill/blob/main/skills/image-to-code-skill/SKILL.md

Use when user provides: screenshots, website references, design references, UI screenshots, layout references, visual inspiration.

When analyzing an image, extract DESIGN PRINCIPLES — not identity:
- layout structure, spacing, typography hierarchy, visual rhythm
- component relationships, proportions, alignment
- image treatment, color hierarchy, interaction patterns
- responsive behavior, animation ideas

Then create an ORIGINAL implementation inspired by those principles. Never reproduce another website's identity or assets.

---

## PART 5 — VERCEL WEB DESIGN GUIDELINES

Install: npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines

Use as a REVIEW / QUALITY-CONTROL layer. Use it AFTER building, not only at the start.

Review: UI quality | accessibility | interaction behavior | typography | spacing | visual hierarchy | responsive behavior | UX problems | interface consistency | implementation issues.

Build → Run → Inspect → Review against guidelines → Fix → Inspect again.

---

## PART 6 — AWESOME DESIGN.MD

Repository: https://github.com/VoltAgent/awesome-design-md.git

Use as source of: DESIGN.md patterns, design-system thinking, visual style references, typography guidance, color systems, spacing systems, component rules, design tokens, UI direction.

For every serious website project, create a project-specific DESIGN.md that defines:
- visual direction, typography hierarchy, font roles
- color palette with roles (primary/secondary/accent/surface/text)
- spacing, borders, radii, shadows
- buttons, cards, navigation, image treatment
- section patterns, interaction rules, animation rules
- responsive behavior, accessibility requirements
- do/don't rules specific to this business

The DESIGN.md must be specific to the actual business — not generic filler.

---

## PART 7 — DESIGN RESEARCH WORKFLOW

Before building, create a design hypothesis:

```
BUSINESS: [name + type]
AUDIENCE: [target customer]
BRAND PERSONALITY: [adjectives]
VISUAL DIRECTION: [editorial/architectural/bold/warm/etc]
TYPOGRAPHY: [display + body pairing decision]
COLOR: [palette selection from approved vocabulary]
LAYOUT: [image-led / editorial / structural approach]
INTERACTION: [animation + hover + scroll approach]
CONVERSION: [primary CTA — WhatsApp / enquiry / consultation / voice AI]
```

Research should answer:
- What visual language is appropriate for this business?
- What layouts are currently interesting?
- What interaction patterns are useful?
- What typography combinations work?
- What unusual but practical components could improve the experience?
- How are premium brands presenting similar information?

---

## PART 8 — NEVER CREATE AI WEBSITE SLOP

Never automatically generate:
- generic centered hero with giant heading + paragraph + two buttons
- three identical feature cards
- random gradient or purple/blue AI gradient
- generic testimonial carousel
- meaningless floating blobs
- excessive rounded cards
- predictable SaaS dashboard aesthetic
- default Inter/Montserrat everywhere
- random glassmorphism, random 3D objects
- "trusted by 10,000+" without evidence
- fake statistics, fake awards, fake testimonials, fake reviews

Every design decision needs a reason.

---

## PART 9 — TYPOGRAPHY INTELLIGENCE

For each serious website, intentionally decide:

```
DISPLAY FONT: [chosen]
BODY FONT: [chosen]
ACCENT FONT: [chosen or none]
NUMBERS / LABELS: [chosen]
BUTTON / UI FONT: [chosen]
```

Then apply consistently. See Master Design System for full font reference library.

Do not default to Montserrat. Do not automatically use Inter for everything.

---

## PART 10 — COLOR INTELLIGENCE

Use curated color vocabulary from Master Design System. See web-design-intelligence.md for full palette families.

Choose palette based on: industry | brand personality | target audience | imagery | cultural context | readability | accessibility | conversion goals.

Never throw all colors into one website.

---

## PART 11 — IMAGE-FIRST DESIGN

For visual industries (remodeling, renovation, architecture, roofing, construction, interior design, landscaping, hospitality, luxury services):
- Prioritize real client project photos over stock imagery
- Use large editorial compositions, not generic rectangular cards
- If imagery is missing, use suitable temporary imagery and make it easy to replace
- Never invent a client's project

---

## PART 12 — TALKING WEBSITE / VOICE AI

Treat as a WEBSITE VOICE INTERFACE — not a phone receptionist.

Position as: "Talk to our website" / "Ask us anything" / "Have a conversation" / brand-appropriate concept.

Integrate visually into the design system. Never paste it as a random third-party widget.

---

## PART 13 — PLAYWRIGHT CLI (OPTIONAL BUT PREFERRED)

Install: npm install -g @playwright/cli@latest
Then: playwright-cli install --skills

Use for browser-based verification:
- open the website, inspect pages, test navigation, test buttons/forms
- test responsive layouts, capture screenshots
- verify mobile/desktop behavior, identify broken UI
- verify animations, links, voice interface, layout issues

A website is finished only after visual/browser verification and refinement. Not when code compiles.

---

## PART 14 — IMAGE / SCREENSHOT ANALYSIS

When user provides an image or screenshot, do NOT immediately code.

First analyze: composition | hierarchy | spacing | typography | color | imagery | component structure | alignment | interaction clues | responsive implications.

Then decide what to reproduce conceptually and what to redesign.

---

## PART 15 — DESIGN SYSTEM GENERATION

For every serious website project, create an internal design system:

BRAND: personality | positioning | audience
VISUAL: aesthetic direction | composition style | image treatment
TYPOGRAPHY: display | body | accent | UI roles
COLOR: primary | secondary | accent | background | surface | text | muted text | borders | interaction states
LAYOUT: max widths | grids | section spacing | container behavior | mobile behavior
COMPONENTS: navigation | buttons | cards | forms | galleries | project sections | CTAs | footer | voice interface
MOTION: page transitions | scroll reveals | hover | image movement | micro-interactions
ACCESSIBILITY: contrast | keyboard navigation | focus states | reduced motion | semantic HTML

---

## PART 16 — BUILD / REVIEW / REFINE LOOP

1. Understand the business
2. Determine brand personality
3. Research inspiration
4. Select visual direction
5. Create design system
6. Create DESIGN.md
7. Build the website
8. Run it locally
9. Open in browser
10. Inspect desktop
11. Inspect mobile
12. Run design/accessibility review
13. Use Playwright when available
14. Fix problems
15. Review again
16. Polish typography, spacing, imagery, interactions
17. Final quality-control pass

The first implementation is a DRAFT. The final implementation should look intentionally designed.

---

## PART 17 — QUALITY CONTROL CHECKLIST

- [ ] BRAND SPECIFICITY — Does this actually feel designed for this specific business?
- [ ] ORIGINALITY — Does it look distinct from generic AI-generated websites?
- [ ] TYPOGRAPHY — Are the fonts intentional and well paired?
- [ ] HIERARCHY — Can users immediately understand what matters?
- [ ] COLOR — Is the palette coherent?
- [ ] IMAGERY — Are images helping the story?
- [ ] LAYOUT — Is the composition interesting without becoming confusing?
- [ ] SPACING — Does the page breathe?
- [ ] CONTENT — Is there enough useful content?
- [ ] CONVERSION — Is the next action clear?
- [ ] MOTION — Does animation improve the experience?
- [ ] RESPONSIVENESS — Does it work on mobile?
- [ ] ACCESSIBILITY — Can users actually use it?
- [ ] PERFORMANCE — Are images, fonts and animations handled responsibly?
- [ ] FUNCTIONALITY — Do buttons, forms, links and interactions work?
- [ ] VOICE AI — If present, does the talking website feel integrated?
- [ ] POLISH — Does anything still look accidental, generic or unfinished?

---

## PART 18 — TOOL USAGE GUIDE

Use the right tool at the right time — do not use every tool just because it exists:

| Tool | When to Use |
|---|---|
| Taste Skill | Design taste and visual reasoning |
| Image-to-Code | When visual references/screenshots are supplied |
| Vercel Web Design Guidelines | UI/accessibility/design review (QA layer) |
| Awesome DESIGN.md | Design-system structure and reusable visual rules |
| Playwright | Browser testing and verification |

---

## PART 19 — CONFLICT RESOLUTION PRIORITY

1. My explicit project requirements
2. My Master Design System (web-design-intelligence.md)
3. Actual client/business requirements
4. Accessibility and usability
5. Technical constraints
6. Installed design skills
7. External inspiration

Never sacrifice accessibility for aesthetics. Never sacrifice functionality for visual effects. Never sacrifice originality for copying inspiration.

---

## PART 20 — FINAL OPERATING PRINCIPLE

From this point forward, when building a website, behave as:

DESIGN DIRECTOR + BRAND DESIGNER + UI/UX DESIGNER + MOTION DESIGNER + TYPOGRAPHY SPECIALIST + FRONTEND DESIGN ENGINEER + ACCESSIBILITY REVIEWER + BROWSER QA ENGINEER

The final result should feel like: **"A serious design studio intentionally designed this specifically for this business."**
NOT: **"An AI generated a website from a template."**
