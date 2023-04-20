import { attributes } from '@/styled-components/utilities'
import { createGlobalStyle } from 'styled-components'

const StylesProvider = createGlobalStyle`
  :root {
    // COLORS
    --text-one: #000000;
    --text-two: #ffffff;
    --text-three: #4B4B4B;
    --text-four: #F0673C;
    // BACKGROUNDS
    --background-one: #FFFFFF;
    --background-two: #4B4B4B;
    // COMPONENTS
    --i-component-one: #FFFFFF;
    // TYPOGRAPHY
    --family-one: 'Public Sans', sans-serif;
  }
  
  * {
    &::-webkit-scrollbar {
      width: 0.25rem;
      background-color: var(--background-one);
    }
  
    &::-webkit-scrollbar-thumb {
      background-color: var(--text-one);
      border-radius: 3rem;
    }
  
  &,
  &::before,
  &::after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
  }
  
  &::before,
  &::after {
    display: block;
  }
  }
  
  ::-moz-selection {
    background-color: var(--text-one);
    color: var(--background-one);
  }
  
  ::selection {
    background-color: var(--text-one);
    color: var(--background-one);
  }
  
  body {
    background-color: var(--background-one);
    max-width: 220rem;
    margin: 0 auto;
  }
  
  #app {
    min-height: 100vh;
    color: var(--text-one);
    font-size: 100%;
    font-family: var(--family-one);
    background-color: var(--background-one);
    display: grid;
    grid-template: 
      "header" auto
      "main" 1fr
      "footer" auto;
  }
  
  header {
    grid-area: header;
  }
  main {
    grid-area: main;
  }
  footer {
    grid-area: footer;
  }

  img,
  picture,
  video,
  iframe,
  figure {
    max-width: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
  
  a {
    display: block;
    color: inherit;
    font-size: inherit;
    text-decoration: none;
  }
  
  p a {
    display: inline;
  }
  
  li {
    list-style-type: none;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  a,
  strong,
  blockquote,
  i,
  b,
  u,
  em {
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    font-style: inherit;
    text-decoration: none;
  }
  
  form,
  input,
  textarea,
  select,
  button,
  label {
    color: inherit;
    display: block;
    font-size: inherit;
    font-family: inherit;
    background-color: transparent;
  }
  
  svg {
    width: 100%;
    display: block;
  }

  ${attributes}
`

export { StylesProvider }
