import { keyframes, style, globalStyle } from '@vanilla-extract/css'

globalStyle('#root', {
  maxWidth: 1280,
  margin: '0 auto',
  padding: '2rem',
  textAlign: 'center',
})

export const logo = style({
  height: '6em',
  padding: '1.5em',
  willChange: 'filter',
})

export const logoVite = style([
  logo,
  {
    ':hover': {
      filter: 'drop-shadow(0 0 2em #646cffaa)',
    },
  },
])

const animationLogoSpin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
})

export const logoReact = style([
  logo,
  {
    ':hover': {
      filter: 'drop-shadow(0 0 2em #61dafbaa)',
    },
    '@media': {
      '(prefers-reduced-motion: no-preference)': {
        animationName: animationLogoSpin,
        animationDuration: '20s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
      },
    },
  },
])

export const card = style({
  padding: '2em',
})

export const readTheDocs = style({
  color: '#888',
})
