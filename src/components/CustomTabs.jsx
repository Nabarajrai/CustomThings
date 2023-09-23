import { useState } from "react";

/* eslint-disable react/prop-types */
const CustomTabs = ({ tabs }) => {
  const [tabIndex, setTabIndex] = useState(0);
  console.log("tab setion", tabs[0].content);
  return (
    <div className="tabs-container">
      <div className="tab-header">
        {tabs.map((tab, i) => (
          <div
            className={`tab-header__tab ${tabIndex === i ? "active" : ""}`}
            key={i}
            onClick={() => setTabIndex(i)}>
            {tab.tab}
          </div>
        ))}
      </div>
      <div className="tabs-content">
        <div>{tabs[tabIndex].content}</div>
      </div>
    </div>
  );
};

export default CustomTabs;
