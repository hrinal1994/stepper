import React from 'react';


function Header(props){

   
    if(props.changeStep.state.secondStep){
     document.getElementById("second").className="active";
    }
    if(props.changeStep.state.thirdStep){
        document.getElementById("third").className="active";
       }
return(

    <div className="row">
  <div className="col-xs-12 col-md-8 offset-md-2 block border">
    <div className="wrapper-progressBar">
      <ul className="progressBar">
        <li className="active">Step 1</li>
        <li id="second" className="">Step 2</li>
        <li id="third" className="">Step 3</li>
      </ul>
    </div>
  </div>
</div>
)

}

export default Header;