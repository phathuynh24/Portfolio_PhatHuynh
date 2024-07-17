import React from "react";
import AchievementCard from "./AchievementCard";
import { Container, Row, Col } from "react-bootstrap";

// Import images
import hk1_1 from "../../Assets/Achievement/hk1_1.jpg";
import hk1_2 from "../../Assets/Achievement/hk1_2.jpg";
import hk1_3 from "../../Assets/Achievement/hk1_3.jpg";
import hk2_1 from "../../Assets/Achievement/hk2_1.jpg";
import hk2_2 from "../../Assets/Achievement/hk2_2.jpg";
import nckh_1 from "../../Assets/Achievement/nckh_1.png";

function Achievement() {
  const achievements = [
    {
      title: "Nghiên cứu khoa học sinh viên 2023",
      image: nckh_1,
    },
    {
      title: "Xếp loại Giỏi trong học tập và rèn luyện ở học kỳ 1 - năm 3",
      image: hk1_3,
    },
    {
      title: "Xếp loại Giỏi trong học tập và rèn luyện ở học kỳ 2 - năm 2",
      image: hk2_2,
    },
    {
      title: "Xếp loại Giỏi trong học tập và rèn luyện ở học kỳ 1 - năm 2",
      image: hk1_2,
    },
    {
      title: "Xếp loại Giỏi trong học tập và rèn luyện ở học kỳ 2 - năm 1",
      image: hk2_1,
    },
    {
      title: "Xếp loại Giỏi trong học tập và rèn luyện ở học kỳ 1 - năm 1",
      image: hk1_1,
    },
    // Thêm các thành tích khác nếu cần
  ];

  return (
    <Container fluid className="achievement-section">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="achievements">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                title={achievement.title}
                description={achievement.description}
                image={achievement.image}
              />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Achievement;
