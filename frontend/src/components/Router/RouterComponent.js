import React, { Component } from "react";
// import MyAccount from "../../pages/MyAccount/MyAccount";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import cuvette from "../../images/cuvette.svg";
import "./RouterComponent.css";
class RouterComponent extends Component {
  render() {
    // const MyAccountPage = () => {
    //   return <MyAccount />;
    // };
    return (
      <React.Fragment>
        <div className="nav">
          <button>btn1</button>
          <button>btn2</button>
          <button>btn3</button>

          {/* <img src={cuvette} alt="cuvette" id="cuvette" /> */}
          {/* <BrowserRouter>
            <Routes>
              <Route path="/MyAccount" Component={MyAccountPage} />
            </Routes>
          </BrowserRouter> */}
        </div>
      </React.Fragment>
    );
  }
}

export default RouterComponent;
