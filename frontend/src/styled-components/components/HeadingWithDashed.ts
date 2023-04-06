import styled, { css } from 'styled-components'

const HeadingWithDashed = styled('h2')<{ isItalic?: boolean }>`
  color: #281828;
  font-size: clamp(1.25rem, 1.25vw, 2.5rem);
  font-weight: 700;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: clamp(1rem, 1vw, 2rem);

  ${({ isItalic }) => isItalic === true && css`
    font-size: clamp(1rem, 1vw, 2rem);
    font-weight: 400;
    font-style: italic;
  `}
`
const HrWithDashed = styled('hr')`
  border-top: 0.0625rem dashed #281828;
  flex: 1;
`
export { HeadingWithDashed, HrWithDashed }
