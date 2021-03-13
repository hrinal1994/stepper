import React from "react";

import { AuthContext } from "../App";


function SecondStep () {
    const { state,dispatch } = React.useContext(AuthContext);


    const [data, setData] = React.useState(state);

    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        
    };



    return (
        <div className="login-container">
            <div className="card">
                <div className="container">
                    <form onSubmit={handleFormSubmit}>
                        <h1>Your's Details</h1>
                        <label htmlFor="fullName">
                        Your Name     :
              <input
                                type="text"
                                value={data.fullName}
                                onChange={handleInputChange}
                                name="fullName"
                                id="fullName"
                            />
                        </label>
                        <label htmlFor="father">
                        Father's Name  :
              <input
                                type="text"
                                value={data.father}
                                onChange={handleInputChange}
                                name="father"
                                id="father"
                            />
                        </label>

                        <label htmlFor="mother">
                            Mother's Name  :
              <input
                                type="text"
                                value={data.mother}
                                onChange={handleInputChange}
                                name="mother"
                                id="mother"
                            />
                        </label>

                        <label htmlFor="mobile">
                            Mobile Number :
              <input
                                type="text"
                                value={data.mobile}
                                onChange={handleInputChange}
                                name="mobile"
                                id="mobile"
                            />
                        </label>
                       

                        {data.errorMessage && (
                            <span className="form-error">{data.errorMessage}</span>
                        )}

                        <button className="button" onClick={() =>dispatch({ type: "THIRDSTEP" ,upState:data})}
                      disabled={ !((!!data.father) && (!!data.mother)&&(!!data.mobile)&&(!!data.fullName))}>
                           Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SecondStep; 