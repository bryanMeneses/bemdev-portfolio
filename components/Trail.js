import React from 'react'
import { useTrail, a } from 'react-spring'


const Trail = ({children, ...props}) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1250, friction: 200 },
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: -20 },
  })
  return (
    <div className="trails-main" {...props}>
      <div>
        {trail.map(({ y, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: y.interpolate((y) => `translate3d(0,${y}px,0)`) }}
          >
            {items[index]}
          </a.div>
        ))}
      </div>
    </div>
  )
}

export default Trail
