import React from "react";

import "./growl.css";

export const Growl = ({ active, message, onDismissed, displayTime }) => (
  <div className={`growl${active ? " active" : ""}`}>
    {message} for {displayTime} secs
    <div onClick={onDismissed} className="growl-close" />
  </div>
);

export function useGrowl(displayTime) {
  // state of the growl
  const [growlActive, setGrowlActive] = React.useState(false);

  return [
    // the first arg is the state
    growlActive,

    // the second arg is a fn that allows you to safely set its state
    (active, growlTime) => {
      setGrowlActive(active);
      setTimeout(() => {
        setGrowlActive(false);
      }, 3000);
    },
  ];
}
