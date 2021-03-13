import React from "react";

import { AuthContext } from "../App";

let initialValue={
 
    errorMessage: "",
    
}


function FirstStep () {
    const { state,dispatch } = React.useContext(AuthContext);

   

    const [data, setData] = React.useState({...state,...initialValue});

    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        if (data.email && data.password) {
            setData({
                ...data,
              
                errorMessage: null,
  
            });
           
        }
       
        else {
            setData({
                ...data,
            
                errorMessage: "can't submit"
            });
        }
    };




    return (
        <div className="login-container">
            <div className="card">
                <div className="container">
                    <form onSubmit={handleFormSubmit}>
                        <h1>Login</h1>

                        <label htmlFor="email">
                        E-mail ID  :
              <input
                                type="text"
                                value={data.email}
                                onChange={handleInputChange}
                                name="email"
                                id="email"
                            />
                        </label>

                        <label htmlFor="password">
                            Password  :
              <input
                                type="password"
                                value={data.password}
                                onChange={handleInputChange}
                                name="password"
                                id="password"
                            />
                        </label>

                        {data.errorMessage && (
                            <span className="form-error">{data.errorMessage}</span>
                        )}

                        <button type="button" className="button" disabled={ !((!!data.email) && (!!data.password))} onClick={() =>dispatch({ type: "SECONDSTEP" ,upState:data })}
                      >
                         
                                Login
                           
                            
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FirstStep; 