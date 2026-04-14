# Project Hero Landing Page

## What I Built
- Sticky navigation bar
- Hero section with title, text, and buttons
- Dashboard preview with 2 floating cards (absolute positioning)
- Fixed chat widget (bottom-right corner)
- Mobile hamburger menu

## My 3 Breakpoints

| Screen Size | What Changes |
|-------------|--------------|
| **600px** | Hamburger menu changes to horizontal nav |
| **834px** | Switches from stacked to two-column layout |
| **1024px** | Larger text, more spacing, bigger cards |

I used mobile-first design. Base styles are for phones, then I add styles for larger screens.

## Positioning I Used

| Position | Where I Used It | Why |
|----------|----------------|-----|
| **sticky** | Navigation bar | Stays at top when scrolling |
| **relative** | Dashboard container | Lets absolute cards position inside it |
| **absolute** | Floating cards | Places them outside the main dashboard |
| **fixed** | Chat widget | Always stays in bottom-right corner |

## Problems I Faced

1. **Absolute cards went to top of page**
   - Forgot `position: relative` on parent container
   - Fixed by adding it to `.hero-visual`

2. **Mobile menu didn't work**
   - Typo in JavaScript ID name
   - Fixed by matching the ID in HTML

3. **Cards covered dashboard on small screens**
   - Cards were too big
   - Fixed by making them smaller and adjusting position values

## What I Learned

- `absolute` needs a `relative` parent or it floats to the page top
- Mobile-first means starting simple and adding complexity
- Media queries let me adjust position values for different screen sizes
- CSS is very literal - check for typos first when something breaks

## Final Thoughts

I wrote every line myself. I made mistakes and fixed them. Now I understand how positioning and responsive design actually work.