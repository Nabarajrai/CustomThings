/* eslint-disable react/prop-types */
const CustomPop = ({ children, popup, setPopup }) => {
  return (
    <div className={`custom-popup ${popup ? "active" : ""} `}>
      <div className="custom-popup__bg" onClick={() => setPopup(false)}></div>
      <div className="custom-popup__container">
        <div
          className="custom-popup__container--close"
          onClick={() => setPopup(false)}>
          &#128473;
        </div>
        <div className="custom-popup__inner-content">{children}</div>
      </div>
    </div>
  );
};

export default CustomPop;
