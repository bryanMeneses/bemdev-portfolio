import React from "react";

const Item = ({ title, date, company, description }) => {
  return (
    <div className="mt-10">
      <div className="">
        <h4 className="text-gray-800 font-bold">
          {title} | {company}
        </h4>
        <h6 className="text-my-teal-200">{date}</h6>
      </div>
      {/* <h5 className="text-gray-600 font-normal">{company}</h5> */}
      <div className="text-gray-700 my-4 leading-relaxed max-w-3xl">
        {description}
      </div>
    </div>
  );
};

export default Item;
