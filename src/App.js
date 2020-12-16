import { Row, Col } from "antd";
import SideBar from "./containers/SideBar";
import MainChart from "./containers/MainChart";
import Result from "./containers/Result";
import "./App.css";

function App() {
  return (
    <Row>
      <Col span={6}>
        <div className="SideBar">
          <SideBar />
        </div>
      </Col>
      <Col span={18}>
        <div className="MainResult">
          <Result />
          <MainChart />
        </div>
      </Col>
    </Row>
  );
}

export default App;
