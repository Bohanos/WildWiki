# WildWiki — a mini animal-kingdom encyclopedia

A 3-page HTML/CSS/JS project built for teaching CSS to students who already understand basic HTML.

## Files

```
wildwiki/
├── index.html      Home page — hero, carousel, sidebar + 6 topic sections
├── about.html       About WildWiki
├── funfacts.html   "Field Notes" — flip-card trivia
├── css/style.css   All styling (one file, heavily commented)
├── js/script.js    Theme toggle, sidebar routing, carousel, flip cards
└── assets/videos/  Put your downloaded/Cloudinary video files here
```

## Running it

No build tools needed:
- git clone https://github.com/Bohanos/WildWiki

## Swapping in real media

- **Images**: every `<img>` are currently empty and should be replaced by real
images in their path (e.g. `assets/images/lion.jpg`).
- **Video**: the same as the images, all three videos currently do not 
exist in their paths (e.g. `black-rhino-clip.mp4`).

## Suggested teaching order (how the CSS was layered on)

1. **Variables & reset** — `:root` custom properties, box-sizing, base typography.
2. **Navbar** — flexbox `justify-content: space-between`.
3. **Hero** — flexbox two-column layout, `clamp()` for responsive headline size.
4. **The 15% / 80% layout** — `.layout { display: flex; gap: 5% }` with `flex: 0 0 15%` /
   `flex: 0 0 80%` on the two children. Great moment to explain `flex-basis` vs `flex-grow`.
5. **Specimen cards** — CSS Grid `repeat(auto-fit, minmax(...))`, `position: relative` +
   absolutely-positioned badge for the catalog number.
6. **Dark mode** — a second `[data-theme="dark"]` variable block; nothing else changes.
7. **JavaScript** — theme toggling.
8. **Responsive** — media queries collapse the hero, sidebar and footer for mobile.

Every section in `style.css` is separated with a numbered comment block, so can be taught section by section and have students predict what each rule does before running it.