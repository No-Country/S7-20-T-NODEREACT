import styled from 'styled-components'

const BadgeContainer = styled.div`
  background: rgb(127, 127, 127);
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  position: absolute;
  width: fit-content;
  height: 22px;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  top: calc(70px + 45px);
  justify-content: center;
  > p {
    margin:0;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
  }
`

const DateBadge = (): JSX.Element => {
  const date = new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })

  return (
    <BadgeContainer>
      <p>{date}</p>
    </BadgeContainer>
  )
}
export { DateBadge }
