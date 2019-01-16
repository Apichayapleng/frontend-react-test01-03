import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import testone from "./components/testone";

class App extends Component {
  state = {
    max: 0
  };

  constructor(props) {
    super(props);
  }

  // findMax(...theArgs) {
  // let max = null;
  // for (let i = 0; i < arguments.length; i++) {
  //   console.log("connect findMax 1 (loop)");
  //   if (arguments[i] > max) {
  //     console.log("connect findMax 2 (if-else)");
  //     max = arguments[i];
  // this.setState({ max: (this.state.max = arguments[i]) });
  // console.log("arguments[i]");
  // }
  // }
  // return max;
  // }

  findMax = e => {
    // console.log("findMax function");

    // return theArgs.reduce((a, b) => {
    // console.log("findMax 1");
    // return a < b ? (this.state.max = b) : (this.state.max = a);

    // return this.state.max === 0 ? "Zero" : this.state.max;

    // var getEvent = e.target.id.toString;
    // console.log("show e", getEvent, this);

    this.setState({ max: this.state.max + 1 });

    // if (a < b) {
    //   var max = 0;
    //   max = b;
    // }
    // console.log("type", this);
    // this.state.max = max;
    // this.setState({ max: (this.state.max = max) });
    // return max;
    // });
  };

  // console.log(findMax(1, 8, 3))

  deleteMax() {
    this.setState({ max: this.state.max - 1 });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>
            [รีวิว] Fuji Coconut Jelly วุ้นมะพร้าวบ้านแพ้วแท้ ๆ หอม หวาน ชื่นใจ!{" "}
          </h1>
          ถ้าใครชอบกินมะพร้าวน้ำหอม ต้องห้ามพลาดความฟินจาก Fuji Coconut Jelly
          วุ้นมะพร้าวบ้านแพ้วแท้ ๆ สด ใหม่ เหมือนได้ดื่มน้ำมะพร้าวสด ๆ จากลูก!
          <h6 className="Text-gray">5 ธ.ค. 2018 · โดย มะขิ่น</h6>
          <div className="Padding">
            <h2 className="Text-left">#วงในบอกมา</h2>
            <ul className="Text-left">
              <li>
                วุ้นมะพร้าวที่ใช้น้ำมะพร้าวบ้านแพ้วแท้ ๆ
                ที่มีความเป็นเอกลักษณ์ด้วยรสชาติที่หวาน
                และความหอมที่ไม่เหมือนใคร
              </li>
              <li>
                <b className="App-link">"Fuji Coconut Jelly" </b>
                เลือกใช้แต่เนื้อมะพร้าวอ่อนเท่านั้นเพื่อนำมาใส่ในวุ้นมะพร้าว
                ให้ได้สัมผัสความนุ่มน่ากินจนต้องสั่งเพิ่ม!{" "}
              </li>
              <li>
                ถ้าอยากสั่งไปลงขายที่ร้านอาหาร ก็มีบริการจัดลงของให้ถึงที่
                พร้อมตู้แช่เย็น สำหรับลูกค้าที่อยากสั่ง{" "}
                <b className="App-link">"Fuji Coconut Jelly" </b>
                ไปเสิร์ฟในงานต่าง ๆ ก็มีบริการส่งให้ทั่วกรุงเทพและปริมณฑล
              </li>
            </ul>
            <img
              src="https://img.wongnai.com/p/1920x0/2018/11/30/994fc4afe22d4ac09ef675ec8386a18b.jpg"
              width="100%"
            />
            <p>
              วุ้นมะพร้าวน้ำหอม <i className="App-link">"Fuji Coconut Jelly"</i>
            </p>
            <div className="container">
              <img
                className="img-rounded"
                src="https://img.wongnai.com/p/1920x0/2017/06/14/c6522b0648674fa68f72d32d39829f4c.jpg"
              />
              <div className="text-on-img">
                <p>
                  แจกสูตรฟรี!! "หมูมะนาว" แซ่บซี้ดชวนสร่าง ตาสว่างในคำเดียว!
                </p>
              </div>
            </div>
            <form>
              <label>
                Type maximum 5 number:
                <input
                  type="text"
                  // value={this.state.value}
                  onChange={this.findMax}
                  // value={this.state.max}
                />
                <span>{this.state.max}</span>
                <button onChange={this.deleteMax}>delete</button>
              </label>
              {/* <button onClick={this.findMax}>button</button> */}
            </form>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
