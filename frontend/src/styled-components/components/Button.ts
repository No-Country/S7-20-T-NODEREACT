import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const Button = styled('button')<{ secondary?: boolean }>`
--color-text: #fafbfb;
--color-out: #6361B3;
--color-bx: #6d6bc5;
--color-bg: #281828;
--hover-out: #281828;
--hover-bx: #281828;
--hover-bg: #6361B3;
--active-out: #6361B3;
--active-bg: #1C111C;

  color: var(--color-text);
  font-size: clamp(0.875rem, 0.875vw, 1.75rem);
  font-weight: 900;
  text-align: center;
  outline: clamp(0.125rem, 0.125vw, 0.25rem) solid var(--color-out);
  box-shadow: clamp(0.375rem, 0.375vw, 0.75rem) clamp(0.375rem, 0.375vw, 0.75rem) 0 var(--color-bx);
  border-radius: clamp(0.25rem, 0.25vw, 0.5rem);
  background-color: var(--color-bg);
  padding: clamp(1rem, 1vw, 2rem) clamp(0.5rem, 0.5vw, 1rem);
  transition: background-color 300ms, outline 300ms, box-shadow 300ms;

  :hover {
    outline: clamp(0.125rem, 0.125vw, 0.25rem) solid var(--hover-out);
    box-shadow: clamp(0.375rem, 0.375vw, 0.75rem) clamp(0.375rem, 0.375vw, 0.75rem) 0 var(--hover-bx);
    background-color: var(--hover-bg);
  }

  :active {
    outline: clamp(0.125rem, 0.125vw, 0.25rem) solid var(--active-out);
    box-shadow: none;
    background-color: var(--active-bg);
  }

  ${({ secondary }) => secondary === true && css`
  --color-text: #281828;
  --color-out: #281828;
  --color-bx: #281828;
  --color-bg: #FAFBFB;
  --hover-out: #281828;
  --hover-bx: #281828;
  --hover-bg: #D2D1ED;
  --active-out: #281828;
  --active-bg: #8A89D1;
`}
`
const ButtonLink = styled(Link)<{ secondary?: 'true' }>`
--color-text: #fafbfb;
--color-out: #6361B3;
--color-bx: #6d6bc5;
--color-bg: #281828;
--hover-out: #281828;
--hover-bx: #281828;
--hover-bg: #6361B3;
--active-out: #6361B3;
--active-bg: #1C111C;

  color: var(--color-text);
  font-size: clamp(0.875rem, 0.875vw, 1.75rem);
  font-weight: 900;
  text-align: center;
  outline: clamp(0.125rem, 0.125vw, 0.25rem) solid var(--color-out);
  box-shadow: clamp(0.375rem, 0.375vw, 0.75rem) clamp(0.375rem, 0.375vw, 0.75rem) 0 var(--color-bx);
  border-radius: clamp(0.25rem, 0.25vw, 0.5rem);
  background-color: var(--color-bg);
  padding: clamp(1rem, 1vw, 2rem) clamp(0.5rem, 0.5vw, 1rem);
  transition: background-color 300ms, outline 300ms, box-shadow 300ms;

  :hover {
    outline: clamp(0.125rem, 0.125vw, 0.25rem) solid var(--hover-out);
    box-shadow: clamp(0.375rem, 0.375vw, 0.75rem) clamp(0.375rem, 0.375vw, 0.75rem) 0 var(--hover-bx);
    background-color: var(--hover-bg);
  }

  :active {
    outline: clamp(0.125rem, 0.125vw, 0.25rem) solid var(--active-out);
    box-shadow: none;
    background-color: var(--active-bg);
  }

  ${({ secondary }) => secondary === 'true' && css`
  --color-text: #281828;
  --color-out: #281828;
  --color-bx: #281828;
  --color-bg: #FAFBFB;
  --hover-out: #281828;
  --hover-bx: #281828;
  --hover-bg: #D2D1ED;
  --active-out: #281828;
  --active-bg: #8A89D1;
`}
`

export { Button, ButtonLink }
