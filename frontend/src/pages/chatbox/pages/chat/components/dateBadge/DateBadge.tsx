import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0  0 clamp(1rem, 1vw, 2rem) 0;
`

const Badge = styled.div`
  background: #8A89D1;
  border: 2px solid #4D4C8C;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  min-width: fit-content;
  height: 26px;
  margin: 0 0.5rem;

  > p {
    margin:0;
    font-size: 12px;
    font-size: clamp(12px, 2vw, 14px);
    line-height: 14px;
    color: #FFFFFF;
  }
`

export const Line = styled.div`
  border-top: 1px dashed #8A89D1;
  width:100%;
`

const DateBadge = (): JSX.Element => {
  const date = new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })

  return (
    <Container>
      <Line />
      <Badge>
        <p>{date}</p>
      </Badge>
      <Line />
    </Container>
  )
}
export { DateBadge }
