/* eslint-disable react/prop-types */

import { useState } from "react";

// eslint-disable-next-line no-unused-vars
const Accordian = ({ datas }) => {
  const [tabIndex, setTabIndex] = useState(null);
  const handle = (i) => {
    setTabIndex(i === tabIndex ? null : i);
  };
  return (
    <div className="accordian-container">
      {datas.map((data, i) => (
        <div key={i} className="accordian" onClick={() => handle(i)}>
          <div className="accordian__header">
            <h3>{data.title}</h3>
            <div>&#xf067;</div>
          </div>
          <p
            className={`accordian__content ${tabIndex === i ? "active" : ""} `}>
            {data.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
