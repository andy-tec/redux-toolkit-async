<!-- .github/copilot-instructions.md for mi-app-redux -->
# Copilot instructions — mi-app-redux (React + Vite + Redux Toolkit)

This file gives concise, actionable context for AI coding agents working on this repository.

1. Project summary
- Small React app scaffolded with Vite. Entry: `src/main.jsx` mounts `PrincipalApp` (`src/app.jsx`) inside a Redux `Provider`.
- Routing: `src/components/first.router.jsx` uses `BrowserRouter` with `basename="/proyecto-final-redux-toolkit"`. Note: `vite.config.js` also sets `base` to `/proyecto-final-redux-toolkit/` — keep these in sync when changing deploy path.
- State: Redux Toolkit store at `src/store/store.jsx`. Reducer key: `dataBaseSong` (from `src/store/slices.jsx`). Async fetching uses `createAsyncThunk` defined in `src/hooks/fetchData.jsx`.

2. Build / dev / deploy commands (project-specific)
- Start dev server with: `npm run dev` (runs `vite`).
- Build static site: `npm run build` (runs `vite build`).
- Preview build locally: `npm run preview`.
- Lint project: `npm run lint`.
- Deploy (uses `gh-pages`): `npm run deploy` (builds then publishes `dist`).

3. Key code patterns and places to look (examples)
- Async data flow: `src/hooks/fetchData.jsx` exports `fetchSong` (a `createAsyncThunk`). Example usage: dispatch `fetchSong(url)` and the slice in `src/store/slices.jsx` handles `.pending/.fulfilled/.rejected` to update `state.data`, `state.loading`, `state.error`.
- URL constants: `src/store/urls.jsx` holds the base URL fragment `UrlFirstPartArtist` used to build API requests.
- Store wiring: `src/store/store.jsx` registers `searchSong.reducer` under `dataBaseSong` — read selectors against `state.dataBaseSong`.
- Styling: `styled-components` are centralized in `src/styles.jsx` and exported as `Header`, `Form`, `Input`, `Button` — components import these named exports.
- Router basename + Vite base: `src/components/first.router.jsx` uses `basename="/proyecto-final-redux-toolkit"`; `vite.config.js` sets `base`. When changing deployment subpath, update both.

4. Small, concrete examples (copy/paste-ready)
- Dispatching fetch in `SearchBar` (pattern to follow):

  import { useDispatch } from 'react-redux'
  import { fetchSong } from '../hooks/fetchData'
  import { UrlFirstPartArtist } from '../store/urls'

  // on submit: dispatch(fetchSong(UrlFirstPartArtist + query))

- Reading results in a component (shape):

  const data = useSelector(state => state.dataBaseSong.data)
  const loading = useSelector(state => state.dataBaseSong.loading)

5. Project-specific conventions and gotchas
- React version is 19 & Vite with `@vitejs/plugin-react-swc` — use `createRoot` usage as in `src/main.jsx`.
- `links/links.jsx` and `store/status.jsx` exist but are empty placeholders — expect to find some TODOs there.
- API key/IDs: `src/store/urls.jsx` embeds `123` in the example TheAudioDB URL — verify whether this is a real API key or placeholder before using.
- Keep dependency versions consistent: `package.json` lists `react`, `react-dom` ^19 and `@reduxjs/toolkit` ^2.11.2. If adding new packages, prefer the versions family used here.

6. Recommended first tasks for an AI agent (practical, not aspirational)
- Implement dispatch in `src/components/searchBar.jsx` to trigger `fetchSong` on submit, using `UrlFirstPartArtist`.
- Add a selector usage in a display component (e.g., show `state.dataBaseSong.loading` / `data`).
- If changing router path or deploy base, update both `vite.config.js` and `first.router.jsx`.

7. Files to inspect for deeper understanding
- `src/main.jsx` — app bootstrapping and `Provider` wiring
- `src/app.jsx` — top-level layout and where routers mount
- `src/components/first.router.jsx` — router basename and routes
- `src/hooks/fetchData.jsx` — `createAsyncThunk` and axios calls
- `src/store/slices.jsx`, `src/store/store.jsx`, `src/store/urls.jsx` — state shape and URLs
- `src/styles.jsx` — shared styled-components

If any section is unclear or you want me to preserve/merge specific text from an external agent guideline, tell me which file or snippet to incorporate; I will iterate. 

---
Generated/updated by an AI assistant — please review and tell me what to expand or clarify.
