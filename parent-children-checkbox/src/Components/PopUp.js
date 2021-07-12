import React, { useState } from 'react';

export default function PopUp() {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = (event) => {
    showPopup ? setShowPopup(false) : setShowPopup(true);
  };

  return (
    <div className="example">
      <h2 className="popup-title">
        Pop Up
      </h2>
      <p>버튼을 클릭하세요.</p>
      <button className="open" onClick={togglePopup}>
        open
      </button>
      {showPopup ? (
        <div className="popup">
          <div className="popup-inner">
            <h3 className="popup-message">Good job!</h3>
            <button className="closebutton" onClick={togglePopup}>close</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}