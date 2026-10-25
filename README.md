# Entropy Design System

A reusable design system foundation for the Entropy collaborative product UI.

## Overview

Entropy is a collaborative diagram editor and document library. The design system reflects the product’s intent: modern, collaborative, clean, and trust-oriented, with a strong green accent for meaning and active states.

## Goals

- Standardize product UI across workspace surfaces
- Support collaboration, status, and shared-action flows
- Create a reusable front-end foundation for the editor and landing pages
- Keep the system easy to apply to Material UI v4 while making upgrades manageable later

## Design direction

- Modern collaborative product aesthetics
- Clean neutral surfaces
- Bright green product accent
- Soft, approachable shadows and rounded panels
- Strong clarity for workspace actions and user states

## Color palette

### Primary

- Primary: `#00e676`
- Primary dark: `#00b853`
- Primary light: `#66f9a0`

### Neutral

- Background: `#f5f7fa`
- Surface: `#ffffff`
- Surface alt: `#eef3f8`
- Border: `#e5e7eb`
- Text: `#111827`
- Text secondary: `#6b7280`
- Text muted: `#9ca3af`

### Feedback

- Success: `#22c55e`
- Warning: `#fbbf24`
- Danger: `#ef4444`
- Info: `#3b82f6`

## Typography

- Font stack: Inter, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif
- Heading weight: 600–700
- Body weight: 400–500
- Large heading tracking tuned tight for diagram/editor contexts

## Components

### Included

- `EntropyButton`
- `EntropyAvatarStack`
- `EntropyToolbar`
- `EntropyChatInput`
- `EntropyDrawer`
- `EntropyPanel`
- `EntropyInput`
- `EntropyBadge`
- `EntropyModal`
- `EntropyAppBar`

## Example usage

```jsx
import EntropyButton from './design-system/components/EntropyButton';
import EntropyInput from './design-system/components/EntropyInput';
import EntropyBadge from './design-system/components/EntropyBadge';

<EntropyButton variant="contained">Launch demo</EntropyButton>
<EntropyInput label="Search workspace" />
<EntropyBadge label="Synced" tone="success" />
```

## Demo app

The project includes a lightweight React demo page that showcases the system in a realistic layout: marketing hero, foundation cards, component gallery, toolbar, drawer, and modal flows.

## Integration plan for the main app

1. Replace ad-hoc styling in the landing page with Entropy tokens
2. Migrate editor shell surfaces to EntropyAppBar and EntropyDrawer
3. Standardize all form controls with EntropyInput and EntropyButton
4. Replace custom status styling with EntropyBadge
5. Pull collaboration UX patterns into a shared avatar stack and presence system
6. Upgrade Material UI in a focused pass after design-system adoption is stable

## Quick start

```bash
npm install
npm start
```
