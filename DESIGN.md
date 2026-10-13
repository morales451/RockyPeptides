---
name: Evolve Peptides
description: Plain facts about GLP-3 peptides, printed as facts labels on a mint-and-navy package.
colors:
  ink: "#0d2b4e"
  ink-soft: "#3a5575"
  mint: "#2fd3a0"
  mint-deep: "#149470"
  mint-pale: "#c9f3e4"
  paper: "#ffffff"
  fog: "#eef3f1"
  placeholder: "#6c809a"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 9vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 118"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  label-title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 4.2vw, 2.75rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 118"
  lead:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.375
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  row-label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    fontVariation: "'wdth' 88"
  numeral:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 800
    fontFeature: "'tnum' 1"
  field-label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
  button:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 800
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 108"
  footnote:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  none: "0px"
spacing:
  rule-xl: "10px"
  rule-md: "5px"
  rule-hair: "1px"
  label-border: "2px"
  row-y: "0.45rem"
  gutter: "1rem"
  gutter-md: "1.5rem"
  section-y: "4rem"
  section-y-md: "6rem"
  container: "72rem"
components:
  label:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.6rem 0.85rem 0.75rem"
  label-md:
    padding: "0.75rem 1.1rem 0.9rem"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 1.4rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  button-mint:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 1.4rem"
    height: "3rem"
  button-ghost:
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 1.4rem"
    height: "3rem"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.6rem 0.8rem"
    height: "3rem"
  units-tag:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.mint}"
    rounded: "{rounded.none}"
    padding: "0.125rem 0.375rem"
---

# Design System: Evolve Peptides

## Overview

**Creative North Star: "The Facts Label on the Package"**

The page is the package; the labels are printed on it. Every page is a stack of full-bleed colour fields, mint and navy alternating, and on those fields sit white facts labels ruled in the grammar of the Nutrition Facts panel: a 10px bar, a 5px bar, a 1px hairline, name on the left and value on the right. Information is never dressed up. It is set, ruled and footnoted the way a regulated label is, which is what makes it read as honest.

There is one typeface, Archivo, and it speaks in widths rather than in families: black and expanded for titles, semi-condensed for row names, regular for prose, tabular for numbers. Every caveat lives in an asterisk footnote rather than in softened copy. Form is strictly flat and square: no radius, no shadow, no gradient, anywhere. The only motion is the label printing itself in as it arrives.

**Key Characteristics:**
- Full-bleed mint and navy fields alternate section by section; mint owns the first viewport.
- White labels with a 2px navy border carry the facts, ruled 10 / 5 / 1px.
- One family (Archivo variable, `wdth` axis), voiced by width and weight.
- Rows: name left, value right, numbers tabular.
- Caveats as asterisk footnotes, small and in soft ink.
- Square, flat, ungraded: zero radius, zero shadow, zero gradient.

## Colors

Two loud field colours from the logo and a white printing surface; everything else is a tint or a muted ink.

### Primary
- **Label Navy** (ink): the ink of the whole system. Body text, label borders, every rule bar and hairline, primary buttons, the navy fields, focus outlines on mint and white, and the selection background.
- **Package Mint** (mint): the package field. Owns the first viewport and every other section; also the syringe liquid, the lit square in the logo mark, the 10px top rule of the footer, and focus outlines on navy.

### Secondary
- **Pale Mint** (mint-pale): lead text on navy fields and the highlighted cell in comparison tables; the hover tint on white toggle buttons.
- **Deep Mint** (mint-deep): a single-use darker mint for focus on a custom checkbox where plain mint would not hold contrast on white.

### Neutral
- **Paper White** (paper): the label surface, the sticky header, inputs, and text on navy.
- **Soft Ink** (ink-soft): footnotes and secondary detail inside labels.
- **Fog** (fog): placeholder fill for media frames inside a label.
- **Placeholder Slate** (placeholder): input placeholder text only.

### Named Rules
**The Package and the Print Rule.** Colour belongs to the field, never to the label. Labels are always white with navy ink; mint and navy only appear as full-bleed section grounds, as rule ink, or as small solid tags.

**The Alternating Field Rule.** Sections alternate mint and navy, mint first. A navy section adds the `on-ink` context so focus rings switch to mint.

## Typography

**Display Font:** Archivo variable (with ui-sans-serif, system-ui)
**Body Font:** Archivo variable
**Label/Mono Font:** Archivo variable, semi-condensed and tabular

**Character:** A single grotesque that changes voice by width: wide and black when it announces, narrow when it lists, plain when it explains. Loaded via `next/font` with the `wdth` axis so every width is the same file.

### Hierarchy
- **Display** (900, clamp(3rem, 9vw, 6rem), 0.92, width 118%): the hero headline only. Balanced wrap.
- **Headline** (900, roughly clamp(2.25rem, 5vw, 3.75rem) up to clamp(2.5rem, 6vw, 4.5rem), 0.98, width 112%): section headlines set directly on the field.
- **Label Title** (900, clamp(1.9rem, 4.2vw, 2.75rem), 0.95, width 118%): the name printed at the top of every label ("GLP-3 Facts", "How to Order").
- **Lead** (400, 1.25rem to 1.5rem, snug): the one or two empathetic lines under a headline, capped at 62ch.
- **Body** (400, 1rem): prose inside labels, capped at 62ch with pretty wrapping.
- **Row Label** (400 or 800, width 88%): the name side of every label row.
- **Numeral** (800 to 900, tabular): the value side of every row; big counts ("3", "$200") go 900 at width 112 to 118%.
- **Footnote** (400, 0.8125rem, 1.45, soft ink): asterisked caveats.

### Named Rules
**The One Family Rule.** Archivo is the only face. Hierarchy comes from width (118 / 112 / 108 / 88%) and weight (900 / 800 / 700 / 400), never from a second family.

**The Tabular Value Rule.** Every number that sits in a row or in a dose is tabular so columns of values line up like a printed panel.

**The Asterisk Rule.** A caveat is never a hedge in the sentence. The claim carries an asterisk and the caveat lives in a footnote at the foot of the label, or in the footer's "*Medical disclaimer".

## Layout

A centred container (72rem, 1rem gutters, 1.5rem from md) inside full-bleed sections with 4rem vertical padding, 6rem from md. On desktop a section typically splits into a headline column and a label column (around 1fr / 1.1 to 1.25fr); on phones the label stacks under the headline. Pricing labels sit three across from md, top-aligned. The sticky header is a white bar with a 2px navy bottom border; anchors land below it via a 4.5rem scroll padding.

Inside a label the rhythm is the rule grammar itself: title, 10px bar, rows separated by 1px hairlines, 5px bar between groups, 10px bar before the closing footnote or action. Row padding is 0.45rem vertical. Label padding is 0.6 / 0.85 / 0.75rem, opening to 0.75 / 1.1 / 0.9rem from md.

The printable cheat sheet is one label at a 48rem measure on mint, which drops to white for print.

## Elevation & Depth

None. The system is flat by construction: no box-shadow, no gradient, no blur. Depth comes only from figure and ground, a white label with a 2px navy border sitting on a saturated field. Sticky elements (header, contact intro) separate by border, not shadow.

### Named Rules
**The Printed Flat Rule.** If it could not be printed in two inks on a box, it does not belong. No shadow, no gradient, no translucent glass.

## Shapes

Square everywhere (0px radius), including inputs, selects, buttons, checkboxes, tags and the logo mark. Borders are 2px navy on labels, fields, buttons, the header and icon buttons. Inside labels, structure is drawn with solid bars rather than boxes: 10px and 5px navy bars that run the full label width, and 1px hairlines between rows. The footer reuses the grammar at section scale: a 10px mint top rule, a 5px white rule above the disclaimer, a hairline above the copyright.

Icons are drawn line SVGs (plus/minus, check, arrow, menu) with 2.2 to 3px square strokes in currentColor.

### Named Rules
**The 10 / 5 / 1 Rule.** Three rule weights only: 10px opens and closes a label, 5px separates groups, 1px separates rows. Any new divider uses one of the three.

## Components

### Facts Label (signature)
The unit of the whole system: white, 2px navy border, square, padded as above. Opens with a Label Title, then a 10px bar. Rows are flex lines with the condensed name left and the tabular, extra-bold value right, separated by hairlines; the first row after a bar drops its hairline. A big-count row sets a 900 expanded word left and a large tabular numeral right. Closes with a bar and an asterisk footnote or an action.

- **Print-in motion:** labels that start below the fold "print" when they enter: bars draw left to right with `scaleX(0 → 1)` over 900ms, rows rise 6px and fade in over 600ms, staggered 45ms per row after a 120ms delay (capped at 12 steps), on an expo-out curve. Content is visible by default; only labels the script marks pending hold the start state, and labels already on screen at load are left alone. Under `prefers-reduced-motion: reduce` nothing is marked and no transitions are declared.

### Buttons
- **Shape:** square (0px), 2px border, minimum 3rem tall (2.5rem in the header), 1.4rem side padding.
- **Primary:** navy fill, white text, 800 weight at width 108%.
- **Hover / Focus:** primary inverts to white fill with navy text over 160ms; focus is a 3px navy outline offset 3px (mint on navy fields).
- **Mint:** mint fill and border with navy text; hovers to transparent with mint text. For navy fields.
- **Ghost:** transparent with navy text and border; hovers to navy fill.
- **Disabled:** 50% opacity, not-allowed cursor.

### Inputs / Fields
- **Style:** white, 2px navy border, square, 3rem minimum height, 0.6 / 0.8rem padding, 1rem text. Selects carry a drawn navy chevron.
- **Label:** a bold 0.9375rem field label sits above, never placeholder-only.
- **Focus:** a 3px mint outline flush to the border.

### Accordion Rows
Label rows that open in place: the whole row is the button, a drawn plus collapses its vertical stroke to become a minus, and the panel opens by animating grid rows over 300ms.

### Navigation
White sticky bar, 4rem tall, 2px navy bottom border. Logo left; 0.9375rem semibold navy links that underline on hover, plus a compact primary "Talk to us" button. On phones, a square 2px-bordered menu button opens a white panel of hairline-separated rows with a full-width primary button.

### Logo Mark
A navy square holding three squares that step up from lower left to upper right, joined by a diagonal line: two white, the last one mint. The mint-tone variant swaps to a mint square with navy steps and a white lit square for navy grounds. The wordmark sets "Evolve" black at width 120% over a 3px rule and a small tracked "PEPTIDES" at width 90%. The same mark is the favicon.

### Dosing Visuals
Flat two-ink SVG diagrams in Archivo: vials as white bodies with 3px navy strokes and mint liquid; arrows as 3px navy strokes. The syringe fills mint to the dose with a navy stopper and a navy "Draw to N" tag above the target line. From sm up it shows the full 0 to 100 unit barrel (ticks every 5, numbers every 10); on phones a zoomed 0 to 30 unit view (ticks every unit, numbers every 5) at a size you can match to the syringe in your hand. Dose rows pair the mg value with a small navy tag in mint text giving the units.

## Do's and Don'ts

### Do:
- **Do** put every new fact inside a white facts label on a mint or navy field, opened with a 10px bar.
- **Do** separate groups with the 5px bar and rows with the 1px hairline, name left and value right.
- **Do** set every row value and dose in tabular numerals.
- **Do** move every caveat into an asterisk footnote in soft ink at 0.8125rem.
- **Do** alternate mint and navy section fields, mint first, and switch focus rings to mint on navy.
- **Do** keep below-the-fold labels printing in, and keep the reduced-motion exit.
- **Do** keep the zoomed 0 to 30 syringe on phones and the full 0 to 100 syringe from sm up.

### Don't:
- **Don't** round any corner; radius is 0px on every element.
- **Don't** use a box-shadow, gradient, blur or translucent surface.
- **Don't** introduce a second typeface; vary Archivo's width and weight instead.
- **Don't** tint a label; labels are white with navy ink.
- **Don't** add a fourth rule weight; use 10, 5 or 1px.
- **Don't** put small uppercase eyebrow kickers above headlines; the headline speaks first. (The tracked "PEPTIDES" in the wordmark is part of the logo, not a type role.)
