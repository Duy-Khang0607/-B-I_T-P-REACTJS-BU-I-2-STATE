import React, {Component} from "react";
import model from "../assets/img/model.jpg";
import v1 from "../assets/img/v1.png";
import v2 from "../assets/img/v2.png";
import v3 from "../assets/img/v3.png";
import v4 from "../assets/img/v4.png";
import v5 from "../assets/img/v5.png";
import v6 from "../assets/img/v6.png";
import v7 from "../assets/img/v7.png";
import v8 from "../assets/img/v8.png";
import v9 from "../assets/img/v9.png";

import style from "./Home.module.css";

export default class Home extends Component {
  state = {
    glassesImg: null,
  };

  handleChangeGlasses = (img) => {
    this.setState({
      glassesImg: img,
    });
  };

  render() {
    return (
      <div className={style.glasses}>
        <div className={style.overlay}></div>
        <div
          style={{
            backgroundColor: "black",
            opacity: "0.55",
            textAlign: "center",
            padding: "30px",
          }}
        >
          <h3 className="fs-3" style={{color: "#fff", fontWeight: "bold"}}>
            TRY GLASSES APP ONLINE
          </h3>
        </div>
        <div className="row mt-5">
          <div className="col-6">
            <div className="position-relative">
              <img
                alt=""
                src={model}
                className="img-fluid rounded"
                width={300}
              />
              <div
                className="position-absolute mx-auto"
                style={{
                  backgroundColor: "orange",
                  opacity: "0.5",
                  color: "#fff",
                  bottom: "0",
                  left: "323px",
                  textAlign: "left",
                  width: "300px",
                }}
              >
                <h4 className="fs-2 px-2 mt-2" style={{color: "blue"}}>
                  FENDI F8750
                </h4>
                <p
                  className="fs-1.2 px-2"
                  style={{lineHeight: "22px", fontWeight: "bold"}}
                >
                  Light pink square lenses define these sunglasses, ending with
                  amother of pearl effect tip.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <img alt="" src={model} className="img-fluid rounded" width={300} />
          </div>
          <div
            className="col-8 bg-white position-absolute"
            style={{
              borderRadius: "7px",
              bottom: "-50px",
              left: "50%",
              right: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <div className="row py-5 px-3 ">
              <div className="col-2">
                <button
                  onClick={() => {
                    this.handleChangeGlasses(v1);
                  }}
                >
                  <img
                    src={v1}
                    alt=""
                    className="img-fluid rounded py-1"
                    width={150}
                  />
                </button>
              </div>
              <div className="col-2">
                <button
                  onClick={() => {
                    this.handleChangeGlasses(v2);
                  }}
                >
                  <img
                    src={v2}
                    alt=""
                    className="img-fluid rounded py-1"
                    width={150}
                  />
                </button>
              </div>
              <div className="col-2">
                <button
                  onClick={() => {
                    this.handleChangeGlasses(v3);
                  }}
                >
                  <img
                    src={v3}
                    alt=""
                    className="img-fluid rounded py-1"
                    width={150}
                  />
                </button>
              </div>
              <div className="col-2">
                <button
                  onClick={() => {
                    this.handleChangeGlasses(v4);
                  }}
                >
                  <img
                    src={v4}
                    alt=""
                    className="img-fluid rounded py-1"
                    width={150}
                  />
                </button>
              </div>
              <div className="col-2">
                <button
                  onClick={() => {
                    this.handleChangeGlasses(v5);
                  }}
                >
                  <img
                    src={v5}
                    alt=""
                    className="img-fluid rounded py-1"
                    width={150}
                  />
                </button>
              </div>
              <div className="col-2">
                <button
                  onClick={() => {
                    this.handleChangeGlasses(v6);
                  }}
                >
                  <img
                    src={v6}
                    alt=""
                    className="img-fluid rounded py-1"
                    width={150}
                  />
                </button>
              </div>
              <div className="col-2 mt-4">
                <button
                  onClick={() => {
                    this.handleChangeGlasses(v7);
                  }}
                >
                  <img
                    src={v7}
                    alt=""
                    className="img-fluid rounded py-1"
                    width={150}
                  />
                </button>
              </div>
              <div className="col-2 mt-4">
                <button
                  onClick={() => {
                    this.handleChangeGlasses(v8);
                  }}
                >
                  <img
                    src={v8}
                    alt=""
                    className="img-fluid rounded py-1"
                    width={150}
                  />
                </button>
              </div>
              <div className="col-2 mt-4">
                <button
                  onClick={() => {
                    this.handleChangeGlasses(v9);
                  }}
                >
                  <img
                    src={v9}
                    alt=""
                    className="img-fluid rounded py-1"
                    width={150}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="position-absolute"
          style={{
            top: "25%",
            left: "20.5%",
          }}
        >
          <img
            src={v7}
            alt=""
            className="img-fluid rounded "
            width={150}
            style={{backgroundColor: "transparent", opacity: "0.5"}}
          />
        </div>
        <div
          className="position-absolute"
          style={{
            top: "25%",
            right: "20.9%",
            transition: "all 0.5s",
          }}
        >
          <img
            src={this.state.glassesImg}
            alt=""
            className="img-fluid rounded "
            width={150}
            style={{backgroundColor: "transparent", opacity: "0.7"}}
          />
        </div>
      </div>
    );
  }
}
