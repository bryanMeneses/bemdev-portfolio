export const fadeIn = (delay = 0, duration = 550) => ({
  opacity: 1, 
  delay, 
  from: {
    opacity: 0
  },
  config: {
    duration,
  },
})