# Alex Morgan — Portfolio

A polished, responsive personal portfolio starter built with React and Vite. It uses a light blue palette and includes an introduction, about and skills, selected projects, and a contact call to action. No API keys or paid services are required.

## Run it locally

1. Install Node.js (18 or newer).
2. In this folder, run `npm install`.
3. Start the development server with `npm run dev` and open the local address Vite prints.
4. Create a production build with `npm run build`; preview it with `npm run preview`.

## Customize your details

Open `src/App.jsx` and edit the `profile` object at the top. Update `name`, `role`, `location`, `email`, `intro`, and `about`; replace entries in `skills` and `projects` with your own. Each project has a title, category, description, and a color theme (`mint`, `peach`, or `lilac`). The header, hero, project cards, and footer all read from this object.

Change colors, spacing, type, and responsive behavior in `src/index.css`. The page uses Google Fonts when online and falls back to system sans-serif fonts if they are unavailable. The project illustrations are CSS-built, so no image assets are required.

## Files

- `index.html` — page metadata and React mount point
- `src/main.jsx` — app entry point
- `src/App.jsx` — page sections and editable portfolio content
- `src/index.css` — visual styling and responsive layouts
- `package.json` — scripts and dependencies
