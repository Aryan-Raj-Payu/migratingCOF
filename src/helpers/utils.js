export const showTimer = (timer) => {
  let timeLeft = Number(timer)
  const TIMER_ID = setInterval(countdown, 1000)
  function countdown() {
    if (timeLeft == -1) {
      clearTimeout(TIMER_ID)
    } else {
      timeLeft = timeLeft - 1
    }
  }
  return timeLeft
}
