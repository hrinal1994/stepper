import React from "react";
import { AuthContext } from "../App";
function ThirdStep(){
    const { state } = React.useContext(AuthContext);


    return(
    
        <div className="login-container">
        <div className="card">
            <div className="container">
            <h1>Summary</h1>
            <div className="sum">
        <p><span className="spn">Email Id: </span>{state.email}</p>
        <p><span className="spn">Password  :</span>{state.password}</p>
        <p><span className="spn">Full Name : </span>{state.fullName}</p>
        <p> <span className="spn">Father Name : </span>{state.father}</p>
        <p><span className="spn">Mother Name : </span>{state.mother}</p>
        <p><span className="spn">Mobile Number : </span>{state.mobile}</p>
    </div>
    <button type="button" onClick={()=> window.location.reload()} className="button"> Finish
                        </button>
            </div>
        </div>
    </div>
   
    )
}

export default ThirdStep;