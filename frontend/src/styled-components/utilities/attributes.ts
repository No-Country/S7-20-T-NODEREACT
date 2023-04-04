import { css } from 'styled-components'

export const attributes = css`
  [svg-box-shadow] {
    fill: #281828;
    background-color: #fafbfb;
    outline: clamp(0.125rem, 0.125vw, 0.25rem) solid #281828;
    box-shadow: clamp(0.375rem, 0.375vw, 0.75rem) clamp(0.375rem, 0.375vw, 0.75rem) 0 #6d6bc5;
    border-radius: clamp(0.25rem, 0.25vw, 0.5rem);
    transition: fill 300ms, background-color 300ms, outline 300ms, box-shadow 300ms;
    
    :hover {
      fill: #6d6bc5;
      outline: clamp(0.125rem, 0.125vw, 0.25rem) solid #6d6bc5;
    }
    :active {
      fill: #fafbfb;
      background-color: #281828;
      outline: clamp(0.125rem, 0.125vw, 0.25rem) solid #6d6bc5;
      box-shadow: none;
    }
  }
  [data-bx] {
    border-radius: clamp(0.25rem, 0.25vw, 0.5rem);
    box-shadow: clamp(0.375rem, 0.375vw, 0.75rem) clamp(0.375rem, 0.375vw, 0.75rem) 0 #6d6bc5;
    outline: clamp(0.125rem, 0.125vw, 0.25rem) solid #281828;
  }
`
