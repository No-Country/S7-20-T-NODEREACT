import styled from 'styled-components'

const SocialMedia = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: clamp(2rem, 2vw, 4rem);
  margin: 0 auto;

  svg {
    width: clamp(2.5rem, 2.5vw, 5rem);
    height: clamp(2.5rem, 2.5vw, 5rem);
    padding: clamp(0.25rem, 0.25vw, 0.5rem);
  }
`

export { SocialMedia }
