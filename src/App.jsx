import { useState } from "react";
import CustomPop from "./components/CustomPop";
import CustomTabs from "./components/CustomTabs";
import Accordian from "./components/Accordian";

const tabs = [
  {
    tab: "General",
    content: (
      <>
        <details>
          <summary>Epcot Center</summary>
          <p>
            Epcot is a theme park at Walt Disney World Resort featuring exciting
            attractions, international pavilions, award-winning fireworks and
            seasonal special events.
          </p>
        </details>
      </>
    ),
  },
  { tab: "Delivery", content: <h1>Delivery</h1> },
  { tab: "Charge", content: <h1>Charge</h1> },
  { tab: "Account", content: <h1>Account</h1> },
];
const datas = [
  {
    title: "Can you accept all credit cards",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa? Nam nobis repudiandae ullam,Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa? Nam nobis repudiandae ullam,Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa? Nam nobis repudiandae ullam,Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa? Nam nobis repudiandae ullam,",
  },
  {
    title: "Can you accept all credit cards",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa? Nam nobis repudiandae ullam,Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa? Nam nobis repudiandae ullam,Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa? Nam nobis repudiandae ullam,Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa? Nam nobis repudiandae ullam,",
  },
  {
    title: "Can you accept all credit cards",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa? Nam nobis repudiandae ullam,Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa? Nam nobis repudiandae ullam,Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa? Nam nobis repudiandae ullam,Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa? Nam nobis repudiandae ullam,",
  },
];
function App() {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <div>
        <CustomPop popup={popup} setPopup={setPopup}>
          Are you sure you want to cancel it?
        </CustomPop>
        <button onClick={() => setPopup(true)}>Click here</button>
        <CustomTabs tabs={tabs} />
        <Accordian datas={datas} />
      </div>
    </>
  );
}

export default App;
