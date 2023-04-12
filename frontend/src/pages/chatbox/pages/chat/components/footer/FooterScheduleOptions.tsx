import { Button } from '@/styled-components/components'
import styled from 'styled-components'
import { createDayFromString, generateDays, generateHours, generateMinutes } from '@/utils/Dates'
import { useState } from 'react'

const WrapperDatePicker = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`

const WrapperPickers = styled.div`
  display: flex;
  height: 100%;
  gap:1rem;
`

const Picker = styled.div`
  display: inline-grid;
  height: 40px;
  overflow: hidden;
  position: relative;
  border-top: 2px solid #6D6BC5;
  border-bottom: 2px solid #6D6BC5;
  font-size:12px;
  font-weight: 400;

  ul {
    -ms-overflow-style: none; // IE 10+
  &::-webkit-scrollbar {
  display: none;
  }
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    padding:1rem;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    scroll-snap-align: center;
    height: 2.5rem;
    text-align: center;
}
`
const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  padding-bottom: 1rem;

  p:nth-child(2) {
    color:#6D6BC5;
}
`

const Container = styled.div<{ show: boolean }>`
  position: relative;
  top: ${props => props.show ? '-208px' : '0'};
  transition: top 0.4s;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #160D16;
  height: 208px;
  padding: 1rem;
  color:white
`

const WrapperActionButtons = styled.div`
  width: 100%;
  display: flex;
  margin-top: auto;
  justify-content: center;
  gap:1.5rem;
`

const StyledButton = styled(Button)`
  cursor: pointer;
  width:152px;
`

interface Props {
  show: boolean
  onClick: () => void
}

const FooterScheduleOptions = ({ show, onClick }: Props): JSX.Element => {
  const today = new Date().toLocaleString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' })
  const days = generateDays(30)
  const hours = generateHours()
  const minutes = generateMinutes()

  const [selectedScheduleDate, setSelectedScheduleDate] = useState<Date>(createDayFromString(days[0]))

  const handleDayScroll = (event: React.UIEvent<HTMLUListElement, UIEvent> | undefined): void => {
    if (event === undefined) return
    const target = event.target as HTMLUListElement
    const scrollTop = target.scrollTop
    const itemHeight = 40 // adjust to match your li height
    const selectedIndex = Math.floor(scrollTop / itemHeight)
    const selectedDateString = days[selectedIndex]
    const createdDay = createDayFromString(selectedDateString)
    const updatedDate = new Date(selectedScheduleDate)
    updatedDate.setFullYear(createdDay.getFullYear())
    updatedDate.setMonth(createdDay.getMonth())
    updatedDate.setDate(createdDay.getDate())
    setSelectedScheduleDate(updatedDate)
  }

  const handleHourScroll = (event: React.UIEvent<HTMLUListElement, UIEvent> | undefined): void => {
    if (event === undefined) return
    const target = event.target as HTMLUListElement
    const scrollTop = target.scrollTop
    const itemHeight = 40 // adjust to match your li height
    const selectedIndex = Math.floor(scrollTop / itemHeight)
    const selectedHour = hours[selectedIndex]
    const updatedDate = new Date(selectedScheduleDate)
    updatedDate.setHours(selectedHour)
    setSelectedScheduleDate(updatedDate)
  }

  const handleMinutesScroll = (event: React.UIEvent<HTMLUListElement, UIEvent> | undefined): void => {
    if (event === undefined) return
    const target = event.target as HTMLUListElement
    const scrollTop = target.scrollTop
    const itemHeight = 40 // adjust to match your li height
    const selectedIndex = Math.floor(scrollTop / itemHeight)
    const selectedMinutes = minutes[selectedIndex]
    const updatedDate = new Date(selectedScheduleDate)
    updatedDate.setMinutes(selectedMinutes)
    setSelectedScheduleDate(updatedDate)
  }

  return (
    <Container show={show}>
      <WrapperDatePicker>
        <WrapperText>
          <p> Fijar mensaje programado</p>
          <p>{today}</p>
        </WrapperText>
        <WrapperPickers>
          <Picker>
            <ul onScroll={handleDayScroll}>
              {days.map(day =>
                <li key={day}>{day.slice(0, -14)}</li>)}
            </ul>
          </Picker>
          <Picker>
            <ul onScroll={handleHourScroll}>
              {hours.map(hour =>
                <li key={hour}>{String(hour).padStart(2, '0')}</li>)}
            </ul>
          </Picker>
          <Picker>
            <ul onScroll={handleMinutesScroll}>
              {minutes.map(minute =>
                <li key={minute}>{String(minute).padStart(2, '0')}</li>)}
            </ul>
          </Picker>
        </WrapperPickers>
      </WrapperDatePicker>
      <WrapperActionButtons>
        <StyledButton secondary onClick={onClick}>Cancelar</StyledButton>
        <StyledButton onClick={() => alert(`Mensaje programado para: ${selectedScheduleDate.toLocaleString()}`)}>Programar</StyledButton>
      </WrapperActionButtons>
    </Container>
  )
}
export { FooterScheduleOptions }
