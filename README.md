# OmniFood Landing Page - Task 21

## What I Built
A complete food delivery landing page for OmniFood with 6 sections:
1. **Header + Hero** - Sticky navigation, headline, CTA buttons, floating badge
2. **How It Works** - 4-step process showing how the service works
3. **Cities** - Grid of 4 cities with customer counts
4. **Testimonials** - 4 customer reviews
5. **Pricing** - 3 pricing plans (Starter, Complete, Family)
6. **Footer** - Links, contact info, copyright

I used **mobile-first** design. Base styles work on phones (≤390px), then I add styles for larger screens.

## Positioning I Used
| Position | Where | Why |
|----------|-------|-----|
| **sticky** | Navigation bar | Stays at top when scrolling down |
| **relative** | .hero-image container | Parent for absolute positioning |
| **absolute** | Floating badge | Stays inside hero-image but positioned outside |
| **fixed** | Chat widget | Always visible in bottom-right corner |

## Problems I Faced
1. **Absolute badge went to top of page**
   - Forgot `position: relative` on parent container
   - Fixed by adding it to `.hero-image`

2. **Mobile menu didn't work at first**
   - Had a typo in JavaScript ID
   - Fixed by matching IDs in HTML and JS

3. **Grid looked bad on tablets**
   - Used too many columns on medium screens
   - Fixed by adding 2-column grid at 600px, 4-column at 834px

## What I Learned
- `absolute` positioning needs a `relative` parent or it floats to the page top
- Mobile-first means starting simple and adding complexity with media queries
- Flexbox is great for navigation, Grid is better for card layouts
- Fixed elements stay in the same spot even when scrolling

## How to View
1. Open `index.html` in a browser
2. Or deploy to GitHub Pages:
   - Settings → Pages → Branch: main → Save

## Files
- `index.html` - Structure (6 sections)
- `style.css` - Styling (mobile-first, responsive)
- `script.js` - Mobile menu + chat alert
- `README.md` - This documentation

## Reflection
I built this from scratch. The hardest part was getting the floating badge to stay inside the hero section. I learned that `position: absolute` looks for the nearest parent with `position: relative`. Once I understood that, it worked perfectly.

I also learned that responsive design isn't about hiding things on mobile - it's about starting simple and adding more features as the screen gets bigger.

