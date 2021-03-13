import React from "react";
import "./App.css";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import Header from "./components/Header";

export const AuthContext = React.createContext();

const initialState = {
  firstStep: true,
  secondStep: false,
  thirdStep: false,
};

const reducer = (state, action) => {

  let newState = action.upState;

  switch (action.type) {


    case "SECONDSTEP":
      localStorage.setItem("email", JSON.stringify(newState.email));
      localStorage.setItem("password", JSON.stringify(newState.password));
      return {

        ...newState,
        secondStep: true,
        firstStep: false,

        thirdStep: false,


      };

    case "THIRDSTEP":
      localStorage.setItem("father", JSON.stringify(newState.father));
      localStorage.setItem("mother", JSON.stringify(newState.mother));
      localStorage.setItem("fullname", JSON.stringify(newState.fullName));
      localStorage.setItem("mobile", JSON.stringify(newState.mobile));
      return {
        ...newState,
        firstStep: false,
        secondStep: false,
        thirdStep: true,
      };
    default:
      localStorage.clear();
      return state;
  }
};



function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  var UIpart;
  
  if (state.firstStep) {
    UIpart = <FirstStep />
  }
  else if (state.secondStep) {
    UIpart = <SecondStep />
  }
  else {
    UIpart = <ThirdStep />
  }
 
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <Header changeStep={{ state }} />
      <div className="App">{UIpart}</div>
    </AuthContext.Provider>
  );
}

export default App;
