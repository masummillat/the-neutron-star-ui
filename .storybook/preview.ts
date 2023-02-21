import 'tailwindcss/tailwind.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: 'light',
    // Override the default dark theme
    dark: {  appBg: 'black' },
    // Override the default light theme
    light: {  appBg: 'white' },
    stylePreview: true,
  }
}


export const globalTypes = {
  darkMode: true,
};