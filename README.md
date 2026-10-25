# Entropy Design System

A reusable design system foundation for the Entropy collaborative product UI.

## Overview

Entropy is a collaborative diagram editor and document library. The design system reflects that product intent: modern, collaborative, neutral, with one distinctive product accent color and clean, readable information density.

## Design direction

- Product-first and collaborative
- Minimal but trustworthy
- Clean neutral backgrounds with a bright green primary accent
- Support for shared editing, presence, and real-time activity states
- Designed for diagramming, documentation, and communication surfaces

## Brand values

- Clarity over decoration
- Trust over noise
- Consistent collaboration patterns across UI surfaces
- Fast recognition for user actions and status states

## Color palette

### Primary palette

- Primary: `#00e676`
- Primary dark: `#00b853`
- Primary light: `#66f9a0`

### Neutral palette

- Background: `#f5f7fa`
- Surface: `#ffffff`
- Surface alt: `#eef3f8`
- Border: `#e5e7eb`
- Text: `#111827`
- Text secondary: `#6b7280`
- Text muted: `#9ca3af`
- Dark base: `#111827`
- Dark alt: `#1f2937`

### Feedback palette

- Success: `#22c55e`
- Warning: `#fbbf24`
- Danger: `#ef4444`
- Info: `#3b82f6`

## Typography

Font stack:

- Inter
- Segoe UI
- Roboto
- Helvetica Neue
- Arial
- sans-serif

Type scale:

- h1: 700, -0.04em tracking
- h2: 700, -0.04em tracking
- h3: 700, -0.04em tracking
- h4: 600, -0.03em tracking
- h5: 600, -0.02em tracking
- h6: 600, -0.02em tracking
- body1: 1rem / 1.6
- body2: 0.875rem / 1.5

## Spacing scale

The spacing scale is based on an 8px rhythm:

- 0
- 4
- 8
- 12
- 16
- 24
- 32
- 40
- 48
- 64

## Radius

- Small: 8px
- Medium: 12px
- Large: 16px

## Shadows

Use subtle shadows for surfaces and light elevation rather than strong dramatic depth.

## Components

### EntropyButton

Use for primary or secondary user actions.

```jsx
import EntropyButton from './design-system/components/EntropyButton';

<EntropyButton variant="contained">Primary action</EntropyButton>
<EntropyButton variant="outlined">Secondary</EntropyButton>
```

### EntropyAvatarStack

Use for collaboration presence or shared editing states.

```jsx
import EntropyAvatarStack from './design-system/components/EntropyAvatarStack';

const users = [
  { name: 'Jeremy', color: '#00e676' },
  { name: 'Nathan', color: '#1f2937' },
  { name: 'Ava', color: '#3b82f6' },
];

<EntropyAvatarStack users={users} max={3} />
```

### EntropyToolbar

Use for diagram editor actions.

```jsx
import EntropyToolbar from './design-system/components/EntropyToolbar';

<EntropyToolbar onAction={(action) => console.log(action)} />
```

### EntropyChatInput

Use for chat and message entry surfaces.

```jsx
import EntropyChatInput from './design-system/components/EntropyChatInput';

<EntropyChatInput onSubmit={(value) => console.log(value)} />
```

### EntropyDrawer

Use for persistent side panels and workspace drawers.

```jsx
import EntropyDrawer from './design-system/components/EntropyDrawer';

<EntropyDrawer open title="Team chat" width={320}>
  <div>Contents...</div>
</EntropyDrawer>
```

### EntropyPanel

Use for grouped content cards and content blocks.

```jsx
import EntropyPanel from './design-system/components/EntropyPanel';

<EntropyPanel>
  <h3>Section title</h3>
  <p>Content area.</p>
</EntropyPanel>
```

## Usage guidance

### Recommended patterns

- Use the primary accent for calls to action and confirmation states.
- Keep surfaces mostly white or near-white to preserve clarity.
- Use green sparingly to highlight only important, active, or successful states.
- Maintain consistent spacing between form fields, toolbars, and cards.

### Avoid

- Overusing the accent color on every control
- Creating multiple competing accent colors in the same screen
- Using shadows too aggressively for low-level UI controls
- Mixing inconsistent border styles and radii across the same surface

## Quick start

```bash
npm install
npm start
```

## Project structure

```text
src/
  App.js
  index.js
  design-system/
    theme.js
    index.js
    components/
      EntropyButton.js
      EntropyAvatarStack.js
      EntropyToolbar.js
      EntropyChatInput.js
      EntropyDrawer.js
      EntropyPanel.js
```

## Roadmap

1. Add a full component gallery/demo
2. Add input, label, and form patterns
3. Add documentation for drawer, panel, and avatar usage
4. Integrate the design system into the main app shell and editor surfaces

## License

MIT
