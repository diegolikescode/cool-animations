# React + TypeScript + Vite

## COLOR PALLET

🔧 Mapping to Your UI Needs

|              UI Element             | Suggested Color |                Use Case / Comments                |
|:-----------------------------------:|:---------------:|:-------------------------------------------------:|
| Background (main)                   | #282a36         | Your page backdrop                                |
| Panel / Card surfaces               | #44475a         | Slight contrast surfaces for containers           |
| Primary text (foreground)           | #f8f8f2         | Titles, paragraphs, labels                        |
| Secondary / muted text / hints      | #6272a4         | For placeholder text, captions                    |
| Cancel / destructive / error button | #ff5555         | Red color for cancel, delete, danger              |
| Next / confirm / success button     | #50fa7b         | Bright green for positive actions                 |
| Warning / alert                     | #f1fa8c         | Use yellow for warning or caution states          |
| Accent / interactive elements       | #8be9fd         | Links, hover highlights, selection outlines       |
| Highlight / emphasize               | #ff79c6         | For active tags or emphasis (pink)                |
| Secondary accent                    | #bd93f9         | For decorative elements or subtle differentiators |
| Warm accent (optional)              | #ffb86c         | Maybe for mid-state or progress accent            |

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
