export const generateDays = (numDays: number): string[] => {
  const today = new Date()
  const days = []
  for (let i = 0; i < numDays; i++) {
    const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000)
    date.setHours(0, 0, 0, 0)
    const dateString = date.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' })
    days.push(dateString)
  }
  return days
}

export const generateHours = (): number[] => {
  const hours = Array.from({ length: 24 }, (_, i) => i)
  return hours
}

export const generateMinutes = (): number[] => {
  const minutes = Array.from({ length: 60 }, (_, i) => i)
  return minutes
}

interface MonthMap {
  [key: string]: number
}
export const getMonthNumber = (monthName: string): number => {
  const month = monthName.toLowerCase()
  const months: MonthMap = {
    enero: 1,
    febrero: 2,
    marzo: 3,
    abril: 4,
    mayo: 5,
    junio: 6,
    julio: 7,
    agosto: 8,
    septiembre: 9,
    octubre: 10,
    noviembre: 11,
    diciembre: 12
  }
  return months[month]
}

export const createDayFromString = (selectedDateString: string): Date => {
  const dateParts = selectedDateString.split(', ')
  const dayMonthYear = dateParts[1].split(' de ')
  const day = dayMonthYear[0]
  const month = getMonthNumber(dayMonthYear[1])
  const year = dayMonthYear[2].split(', ')[0]
  const time = dateParts[2].split(', ')[0]

  return new Date(`${month} ${day}, ${year} ${time}`)
}
