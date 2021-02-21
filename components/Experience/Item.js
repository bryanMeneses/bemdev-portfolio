import React from 'react'

const Item = ({title, date, company, description}) => {
  return (
    <div className="mt-8">
      <div className="flex justify-between">
        <h4 className="text-gray-800 font-bold">{title}</h4>
        <h6 className="text-my-teal-200">{date}</h6>
      </div>
      <h5 className="text-gray-600 font-normal">{company}</h5>
      <p className="text-gray-600 my-4 leading-relaxed max-w-3xl">{description}</p>
    </div>
  )
}

export default Item
