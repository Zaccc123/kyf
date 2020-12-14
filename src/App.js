import { Row, Col } from "antd";
import SideBar from "./containers/SideBar";
import MainChart from "./containers/MainChart";
import "./App.css";

function App() {
  return (
    <Row>
      <Col span={18} push={6}>
        <MainChart />
      </Col>
      <Col span={6} pull={18}>
        <SideBar />
      </Col>
    </Row>
  );
}

export default App;
