import { useState, useEffect } from 'react'
import LoaderCircle from 'components/elements/loaders/LoaderCircle'

const TimerLoader = ({ seconds, onClearTimer }) => {
  const [timeLeft, setTimeLeft] = useState(seconds)

  useEffect(() => {
    if (!timeLeft) return onClearTimer()

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft])
  return (
    <LoaderCircle size="Medium">
      <span>{timeLeft}</span>
    </LoaderCircle>
  )
}

export default TimerLoader
