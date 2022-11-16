import {
  createGlobalThemeContract,
  createGlobalTheme,
  globalStyle,
  style,
} from '@vanilla-extract/css'

export const vars = createGlobalThemeContract({
  font: {
    size: 'font-size',
    weight: 'font-weight',
    synthesis: 'font-synthesis',
    family: 'font-family',
  },
  color: {
    scheme: 'color-scheme',
  },
  line: {
    height: 'line-height',
  },
  background: {
    color: 'background-color',
  },
  text: {
    rendering: 'text-rendering',
  },
  webkit: {
    fontSmoothing: '-webkit-font-smoothing',
    textSizeAdjust: '-webkit-text-size-adjust',
  },
  moz: {
    osxFontSmoothing: '-moz-osx-font-smoothing',
  },
})

createGlobalTheme(':root', vars, {
  font: {
    size: '16px',
    weight: '400',
    synthesis: 'none',
    family: 'Inter, Avenir, Helvetica, Arial, sans-serif',
  },
  color: {
    scheme: 'light dark',
  },
  background: {
    color: '#242424',
  },
  line: {
    height: '24px',
  },
  text: {
    rendering: 'optimizeLegibility',
  },
  webkit: {
    fontSmoothing: 'antialiased',
    textSizeAdjust: '100%',
  },
  moz: {
    osxFontSmoothing: 'grayscale',
  },
})

globalStyle(':root', {
  color: 'rgba(255, 255, 255, 0.87)',
  '@media': {
    '(prefers-color-scheme: light)': {
      color: '#213547',
      backgroundColor: '#ffffff',
    },
  },
})

globalStyle('a', {
  fontWeight: 500,
  color: '#646cff',
  textDecoration: 'inherit',
})

globalStyle('a:hover', {
  color: '#535bf2',
  '@media': {
    '(prefers-color-scheme: light)': {
      color: '#747bff',
    },
  },
})

globalStyle('body', {
  margin: 0,
  display: 'flex',
  placeItems: 'center',
  minWidth: '320px',
  minHeight: '100vh',
})

globalStyle('h1', {
  fontSize: '3.2em',
  lineHeight: 1.1,
})

globalStyle('button', {
  borderRadius: '8px',
  border: '1px solid transparent',
  padding: '0.6em 1.2em',
  fontWeight: 500,
  fontFamily: 'inherit',
  backgroundColor: '#1a1a1a',
  cursor: 'pointer',
  transition: 'border-color 0.25s',
  '@media': {
    '(prefers-color-scheme: light)': {
      backgroundColor: '#f9f9f9',
    },
  },
})

globalStyle('button:hover', {
  borderColor: '#646cff',
})

globalStyle('button:focus, button:focus-visible', {
  outline: '4px auto -webkit-focus-ring-color',
})
