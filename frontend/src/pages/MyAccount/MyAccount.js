import React from "react";
import "./myaccount.css";
import Header from "../../components/Header/Header";
import accountData from "../../data";

function MyAccount() {
  return (
    <>
      <Header />
      <div className="accountflex">
        <div className="accountphoto">
          <div className="accountButton">
            <img src={accountData.photo} alt="cover" className="accountImg" />
            <div className="accountButton2">
              <button>Change Picture</button>
              <button>Edit Profile</button>
            </div>
          </div>
        </div>
        <div className="accountDetail">
          <ul>
            <li>
              <span>Name:</span> {accountData.name}
            </li>
            <li>
              {" "}
              <span>Email:</span> {accountData.email}
            </li>
            <li>
              <span>No. Of APIs:</span> {accountData.API}
            </li>
            <li>
              <span>Address:</span> {accountData.address}
            </li>
            <li>
              <span>InstituteName:</span> {accountData.instituteName}
            </li>
            <li>
              <span>Profession:</span> {accountData.profession}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MyAccount;
