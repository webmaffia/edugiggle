---
name: Aspirational Modern Learning
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf3'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d5e3fc'
  on-surface: '#0d1c2e'
  on-surface-variant: '#44474d'
  inverse-surface: '#233144'
  inverse-on-surface: '#eaf1ff'
  outline: '#75777e'
  outline-variant: '#c5c6cd'
  surface-tint: '#515f78'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0d1c32'
  on-primary-container: '#76849f'
  inverse-primary: '#b9c7e4'
  secondary: '#712ae2'
  on-secondary: '#ffffff'
  secondary-container: '#8a4cfc'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#191c1e'
  on-tertiary-container: '#818486'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#eaddff'
  secondary-fixed-dim: '#d2bbff'
  on-secondary-fixed: '#25005a'
  on-secondary-fixed-variant: '#5a00c6'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f8f9ff'
  on-background: '#0d1c2e'
  surface-variant: '#d5e3fc'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

This design system is engineered for a premium EdTech experience that balances institutional trust with youthful energy. The aesthetic is **Corporate Modern** with a high-end editorial influence, specifically tailored for the ambitious Indian student and professional demographic. 

The visual language focuses on clarity, momentum, and prestige. It avoids the "toy-like" appearance of primary-school apps, instead opting for a sophisticated workspace feel that signals high-value content and career advancement. The interface should evoke a sense of calm focus through generous white space, punctuated by vibrant accents that guide the user toward successful outcomes.

## Colors

The palette is anchored by **Deep Navy**, representing authority, stability, and the traditional "Gurukul" foundations of learning. **Vibrant Purple** serves as the energetic catalyst, used exclusively for primary actions, progress indicators, and "aha!" moments.

- **Primary (Deep Navy):** Use for headers, primary text, and heavy structural elements.
- **Accent (Vibrant Purple):** Reserved for high-conversion CTAs and active states.
- **Background (White/Soft Gray):** A clean #FFFFFF base with #F8FAFC used for subtle sectioning to prevent visual fatigue during long study sessions.
- **Success/Warning/Error:** Use standard semantic colors but desaturated slightly to remain harmonious with the premium navy palette.

## Typography

The typography system pairs the geometric strength of **Montserrat** for headings with the systematic legibility of **Inter** for body copy.

- **Headlines:** Use Montserrat Bold (#0A192F) for all titles to project confidence. Apply tighter letter-spacing on larger display sizes for a more "designed" editorial feel.
- **Body:** Inter is used for all instructional and reading content. Maintain a generous line height (1.6) to ensure high readability for dense educational material.
- **Contrast:** Always maintain a high contrast ratio between Navy text and Light Gray backgrounds to ensure accessibility for all users across various device qualities.

## Layout & Spacing

The design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **Vertical Rhythm:** Spacing should follow an 8px baseline grid. Use 16px/24px for internal component padding and 48px/64px/80px for section margins to create "breathing room."
- **Content Density:** Maintain medium density. While educational tools need to show data, the premium vibe requires avoiding "information overload" by using progressive disclosure and ample white space around core learning modules.
- **Indian Context:** Given the high percentage of mobile-first users in India, all layouts must be designed "Mobile-First," ensuring touch targets are a minimum of 44x44px.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Ambient Shadows**.

- **Level 0 (Base):** The #FFFFFF background.
- **Level 1 (Cards):** Soft, highly diffused shadows (Blur: 20px, Y: 4px, Color: rgba(10, 25, 47, 0.06)). This makes cards appear to float slightly above the surface without feeling heavy.
- **Level 2 (Interactive):** On hover, card elevation should increase slightly (Blur: 30px, Y: 8px) with a subtle 1px border stroke in Light Gray (#E2E8F0) to define edges.
- **Overlays:** Modals and dropdowns use a stronger shadow and a backdrop blur (12px) to maintain focus on the task at hand.

## Shapes

The shape language is defined by **generous, friendly curves**. 

- **Standard Elements:** Buttons and input fields use a 0.5rem (8px) radius to feel modern yet professional.
- **Featured Elements:** Course cards, student testimonials, and promotional banners use "rounded-lg" (16px) or "rounded-xl" (24px) to create a soft, inviting container for content. 
- **Icons:** Use a consistent 2px stroke weight with rounded caps and joins to match the typography and corner radii.

## Components

### Buttons
- **Primary:** Solid Vibrant Purple (#7C3AED) with White text. Use a subtle linear gradient (Purple to a slightly darker indigo) to add depth.
- **Secondary:** Deep Navy (#0A192F) with White text for serious actions.
- **Tertiary:** Ghost style with Navy text and a Soft Gray background on hover.

### Cards
- Always use White (#FFFFFF) backgrounds.
- Apply a 16px-24px corner radius.
- Padding should be 24px for desktop and 16px for mobile.
- Use the ambient shadow defined in the Elevation section.

### Input Fields
- Use a Soft Gray (#F8FAFC) fill with a 1px border (#E2E8F0).
- On focus, the border changes to Vibrant Purple with a subtle glow (2px spread).
- Labels should use the `label-md` typography style in Deep Navy at 70% opacity.

### Chips & Tags
- Used for course categories (e.g., "UPSC", "Coding", "Design").
- Use a pill shape (rounded-full) with a light tint of the accent color (5% opacity Purple) and Deep Navy text.

### Progress Bars
- Essential for EdTech; use a thick 8px track in Soft Gray with a Vibrant Purple fill to visualize completion.