import { useState, useEffect } from 'react'

const useCountdown = (targetDate) => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date()
      const target = new Date(targetDate)
      const difference = target - currentDate

      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)))
      setHours(Math.floor((difference / (1000 * 60 * 60)) % 24))
      setMinutes(Math.floor((difference / 1000 / 60) % 60))
      setSeconds(Math.floor((difference / 1000) % 60))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [targetDate])

  return { days, hours, minutes, seconds }
}

export default useCountdown
