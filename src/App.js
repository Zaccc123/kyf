import { Row, Col } from "antd";
import SideBar from "./containers/SideBar";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Row>
      <Col span={18} push={6}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </Col>
      <Col span={6} pull={18}>
        <SideBar />
      </Col>
    </Row>
  );
}

export default App;
