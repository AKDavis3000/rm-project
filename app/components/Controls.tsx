import React from 'react';

export default function Controls() {
  return (
    <>
      <div className="controls">
        <button className="reset_button">Reset</button>
        <p className="counter">
          <span>0/5</span>
        </p>
        <p className="timer">
          <span> 1:00</span>
        </p>
      </div>
    </>
  );
}
