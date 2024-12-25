import React from "react";
import "./TeamMembers.css";

const members = [
  {
    id: 1,
    name: "Nguyễn Hoài Thương",
    image:
      "https://dongphucgiadinh.com/wp-content/uploads/2022/09/dong-phuc-dai-hoc-quoc-gia-ha-noi-3.jpg",
  },
  {
    id: 2,
    name: "Lê Trương Thủy Tiên",
    image:
      "https://dongphucgiadinh.com/wp-content/uploads/2022/09/dong-phuc-dai-hoc-quoc-gia-ha-noi-3.jpg",
  },
  {
    id: 3,
    name: "Hoàng Ngọc Khánh Toàn (Trưởng nhóm)",
    image:
      "https://dongphucgiadinh.com/wp-content/uploads/2022/09/dong-phuc-dai-hoc-quoc-gia-ha-noi-3.jpg",
  },
  {
    id: 4,
    name: "Trương Thế Toàn",
    image:
      "https://dongphucgiadinh.com/wp-content/uploads/2022/09/dong-phuc-dai-hoc-quoc-gia-ha-noi-3.jpg",
  },
  {
    id: 5,
    name: "Lê Thị Thu Trà",
    image:
      "https://dongphucgiadinh.com/wp-content/uploads/2022/09/dong-phuc-dai-hoc-quoc-gia-ha-noi-3.jpg",
  },
  {
    id: 6,
    name: "Vũ Thị Bích Trà",
    image:
      "https://dongphucgiadinh.com/wp-content/uploads/2022/09/dong-phuc-dai-hoc-quoc-gia-ha-noi-3.jpg",
  },
  {
    id: 7,
    name: "Chu Lê Thu Trang",
    image:
      "https://dongphucgiadinh.com/wp-content/uploads/2022/09/dong-phuc-dai-hoc-quoc-gia-ha-noi-3.jpg",
  },
];

function TeamMembers() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        Thành viên của nhóm
      </h1>

      <div className="team-container">
        {members.map((member) => (
          <div key={member.id} className="team-card">
            <img src={member.image} alt={member.name} />
            <div className="team-name">{member.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMembers;
