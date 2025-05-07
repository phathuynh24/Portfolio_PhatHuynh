import React from "react";
import AchievementCard from "./AchievementCard";
import { Container, Row, Col } from "react-bootstrap";

// Import images
import hk1_1 from "../../Assets/Achievement/hk1_1.jpg";
import hk1_2 from "../../Assets/Achievement/hk1_2.jpg";
import hk1_3 from "../../Assets/Achievement/hk1_3.jpg";
import hk1_4 from "../../Assets/Achievement/hk1_4.png";
import hk2_1 from "../../Assets/Achievement/hk2_1.jpg";
import hk2_2 from "../../Assets/Achievement/hk2_2.jpg";
import hk2_3 from "../../Assets/Achievement/hk2_3.png";
import nckh_1 from "../../Assets/Achievement/nckh_1.png";
import nckh_2 from "../../Assets/Achievement/nckh_2.png";
import nckh_3 from "../../Assets/Achievement/nckh_3.png";

function Achievement() {
  const achievements = [
    {
      title: "NCKH Lần 3: Nghiên cứu khoa học sinh viên đợt 2 - 2024",
      image: nckh_3,
      link: "https://khcn.uit.edu.vn/sites/default/files/k01.nckh-sv-xetduyet-oct2024-dot2_-_kq.pdf",
    },
    {
      title: "NCKH Lần 2: Nghiên cứu khoa học sinh viên đợt 1 - 2024",
      image: nckh_2,
      link: "https://khcn.uit.edu.vn/sites/default/files/k01.nckh-sv-xetduyet-jun2024-dot1_-_3.kq_-_jun2024_-_final.pdf",
    },
    {
      title: "NCKH Lần 1: Nghiên cứu khoa học sinh viên đợt 2 - 2023",
      image: nckh_1,
      link: "https://khcn.uit.edu.vn/sites/default/files/k01.nckh-sv-xetduyet-dec2023-dot2_0.pdf",
    },
    {
      title: "Xếp loại Giỏi trong học tập và rèn luyện ở học kỳ 1 - năm 4",
      image: hk1_4,
      description: "Tốt nghiệp sớm 6 tháng trong học kỳ này - Xếp loại Giỏi trong cả học tập và rèn luyện",
      link: "https://www.facebook.com/photo/?fbid=1143610421138294&set=a.1143612427804760",
    },
    {
      title: "Xếp loại Giỏi trong học tập và rèn luyện ở học kỳ 2 - năm 3",
      image: hk2_3,
      link: "https://www.facebook.com/photo/?fbid=994072162758788&set=a.994075026091835",
    },
    {
      title: "Xếp loại Giỏi trong học tập và rèn luyện ở học kỳ 1 - năm 3",
      image: hk1_3,
      link: "https://www.facebook.com/photo/?fbid=871479425018063&set=a.871492948350044",
    },
    {
      title: "Xếp loại Giỏi trong học tập và rèn luyện ở học kỳ 2 - năm 2",
      image: hk2_2,
      link: "https://www.facebook.com/photo/?fbid=751203813712292&set=a.751214540377886",
    },
    {
      title: "Xếp loại Giỏi trong học tập và rèn luyện ở học kỳ 1 - năm 2",
      image: hk1_2,
      link: "https://www.facebook.com/photo/?fbid=661837492648925&set=a.661838365982171",
    },
    {
      title: "Xếp loại Giỏi trong học tập và rèn luyện ở học kỳ 2 - năm 1",
      image: hk2_1,
      link: "https://www.facebook.com/photo/?fbid=529710482528294&set=a.529713832527959",
    },
    {
      title: "Xếp loại Giỏi trong học tập và rèn luyện ở học kỳ 1 - năm 1",
      image: hk1_1,
      link: "https://www.facebook.com/photo/?fbid=5100611693364663&set=a.5100616550030844",
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
                link={achievement.link}
              />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Achievement;
