export const fadeIn = delay => ({
  opacity: 1, 
  delay, 
  from: {
    opacity: 0
  },
  config: {
    duration: 550,
  },
})