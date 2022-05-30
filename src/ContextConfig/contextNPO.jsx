import React from "react";
import ContextNPO from "./contextConfig";

const NPO = (props) => {
  const state = {
    name: "Login",
    imgUrl: ""
    
  };
  return (
    <ContextNPO.Provider value={state}>{props.children}</ContextNPO.Provider>
  );
};

export { NPO };
