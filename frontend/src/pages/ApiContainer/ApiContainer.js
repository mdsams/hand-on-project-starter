import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { useLocation } from "react-router-dom";
import "./ApiContainer.css";
// import Img from '../../images/selectedImage.png'

// eslint-disable-next-line no-unused-vars
function ApiContainer() {
  const [selectedImage, setSelectedImage] = useState(null);
  const location = useLocation();
  const myData = location.state.detail;
  return (
    <div>
      <Header />
      <div className="myData">
        <div className="myDataOne">
          <h1>{myData.card.name}</h1>
          <p>100% Automatic And Free</p>
          <div className="myDataImgSet">
            <img
              src={myData.card.img}
              alt={myData.card.name}
              className="myDataImg"
            />
          </div>
        </div>
        <div className="enteryData">
          <div className="enteryDataBox">
            {selectedImage && (
              <div>
                <img
                  alt="not fount"
                  width={"150px"}
                  src={URL.createObjectURL(selectedImage)}
                />
                <br />
                <button onClick={() => setSelectedImage(null)}>Remove</button>
              </div>
            )}
            {/* <br />

            <br /> */}
            <input
              type="file"
              name="myImage"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApiContainer;
