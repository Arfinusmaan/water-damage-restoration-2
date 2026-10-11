# Design — AquaVant Restoration

A locked design system for AquaVant Restoration. Every page redesign reads this file before emitting code. Do not regenerate per page — extend or amend this file when the system needs to grow.

## Genre
modern-minimal & authoritative physical service (craft, reassuring, emergency-ready)

## Macrostructure family
- Marketing & Home: Narrative Workflow & Bento Grid (Immediate emergency dispatch banner -> Clear reassuring hero -> Diagnostic symptom triage -> Physical before/after proof -> 4-step scientific drying workflow -> Direct insurance billing -> Staged client cases).
- About & Company: Split Studio (Authoritative operational philosophy on left, physical fleet/equipment proof on right -> IICRC S500 standard compliance matrix).
- Services & Detail: Structured Specification & Interactive Diagnostic (Clear restoration scope, psychrometric monitoring data, equipment list, timeline expectations).
- Projects & Gallery: Photographic Proof Grid (Clean before/after comparative baseline, moisture extraction logs, damage classification).
- Contact & Emergency Triage: Urgent Dispatch Form & Direct Telephone Line (Calm step-by-step triage without panic or aggressive sales pressure).

## Theme Tokens
- `--color-paper`:      #F8FAFC (clean porcelain surface)
- `--color-paper-2`:    #FFFFFF (pure card surface)
- `--color-paper-3`:    #F1F5F9 (subtle contrast surface / table alternate)
- `--color-ink`:        #0F172A (deep slate black — solid ink, no gradient headlines)
- `--color-ink-2`:      #334155 (supporting body slate)
- `--color-muted`:      #64748B (metadata / captions)
- `--color-rule`:       #E2E8F0 (hairline architectural borders)
- `--color-rule-subtle`:#EDF2F7 (card interior dividers)
- `--color-navy`:       #102C77 (heritage maritime navy — stability, trust, authority)
- `--color-navy-dark`:  #0B1B47 (deep navy header & contrast footer surface)
- `--color-blue`:       #035BFE (calibrated technical blue)
- `--color-accent`:     #DE7014 (emergency amber — urgent action, 24/7 hotline, immediate triage, strictly <= 3% of view)
- `--color-accent-hover`:#C85E0A
- `--color-focus`:      #035BFE (crisp accessible focus rings)

## Typography
- Display: 'Plus Jakarta Sans', weight 700 / 600, style normal (ROMAN ONLY, NO italic emphasis in headlines, NO gradient text-fill)
- Body:    'Plus Jakarta Sans', weight 400 / 500, line-height 1.6
- Technical / Data: 'JetBrains Mono', 'SF Mono', monospace for psychrometric moisture levels, temperature, and standard codes (IICRC S500, RH %, GPP)
- Display tracking: -0.025em for large headings, -0.01em for section titles
- Headings: Sentence case or title case. No aggressive all-caps screaming blocks.

## Spacing
- `--space-3xs`: 0.25rem
- `--space-2xs`: 0.5rem
- `--space-xs`:  0.75rem
- `--space-sm`:  1rem
- `--space-md`:  1.5rem
- `--space-lg`:  2rem
- `--space-xl`:  3rem
- `--space-2xl`: 4.5rem
- `--space-3xl`: 6.5rem

## Motion
- Easings: `cubic-bezier(0.16, 1, 0.3, 1)` named `--ease-out`
- Transitions: 180ms - 250ms smooth micro-interactions
- No wobble, no bouncy spring gymnastics. Clean, professional, tactile responsiveness.

## CTA Voice
- Emergency Action: High-visibility Safety Amber (`#DE7014`), white bold text, telephone or emergency icon, clear phone link (`tel:18005550278`).
- Primary Action: Deep Navy (`#102C77`), white text, subtle hover lift (translateY -1px).
- Secondary Action: Crisp hairline outline (`1px solid #CBD5E1`), dark ink text, clean white or light grey hover.

## What Pages MUST Share
- The wordmark / logotype: "AQUAVANT" in bold navy with technical descriptor "RESTORATION" and calm water droplet mark.
- Emergency Dispatch Header: Instant click-to-call phone number and 24/7 status at the very top.
- Clear, honest, zero-slop copy: No fake AI fluff ("Zero Fear Tactics", futuristic sci-fi buzzwords). Reassuring, technically accurate water restoration terminology.
- Palette consistency: Clean light architectural baseline with authoritative navy anchors and selective emergency amber highlights.
- Component architecture: Single-layer clean cards with crisp 1px borders and subtle shadow. Banned: double-bezel cards, glowing cyan borders, aurora gradients.

## What Pages MAY Differ On
- Section layout tailored to the specific content (interactive diagnostic on Home/Services, narrative case studies on Projects, dispatch form on Contact).
- Image density (high on Projects & Home; typography and structured data on Services & Contact).
