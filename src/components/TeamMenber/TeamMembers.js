import React from "react";
import "./TeamMembers.css";
import { ImgApps } from "../../constant/images";

const members = [
  {
    id: 1,
    name: "Nguyễn Hoài Thương",
    image: ImgApps.thuong,
  },
  {
    id: 2,
    name: "Lê Trương Thủy Tiên",
    image: ImgApps.thuytien,
  },
  {
    id: 3,
    name: "Hoàng Ngọc Khánh Toàn (Trưởng nhóm)",
    image: ImgApps.hoangtoan,
  },
  {
    id: 4,
    name: "Trương Thế Toàn",
    image: ImgApps.thetoan,
  },
  {
    id: 5,
    name: "Lê Thị Thu Trà",
    image: ImgApps.thutra,
  },
  {
    id: 6,
    name: "Vũ Thị Bích Trà",
    image: ImgApps.bicktra,
  },
  {
    id: 7,
    name: "Chu Lê Thu Trang",
    image: ImgApps.thuTrang,
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
