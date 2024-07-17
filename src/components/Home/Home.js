import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import myImg from "../../Assets/avt.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Phat Huynh </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div
                style={{
                  width: "450px", // Điều chỉnh kích thước hình ảnh nếu cần
                  height: "450px", // Điều chỉnh kích thước hình ảnh nếu cần
                  borderRadius: "50%", // Làm cho hình ảnh trở thành hình tròn
                  overflow: "hidden", // Ẩn phần dư thừa nếu có
                  border: "4px solid #fff", // Thêm đường viền trắng xung quanh hình ảnh
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Thêm hiệu ứng bóng đổ
                }}
              >
                <img
                  src={myImg}
                  alt="home picture"
                  className="img-fluid"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} // Đảm bảo hình ảnh bao phủ hoàn toàn vùng chứa
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
