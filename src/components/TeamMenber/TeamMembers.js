import React from "react";
import "./TeamMembers.css";
import { ImgApps } from "../../constant/images";

const members = [
  {
    id: 1,
    name: "Bùi Thị Mai Anh - Khoa SPTA - 23E19",
    image: ImgApps.buimaianh,
  },
  {
    id: 2,
    name: "Cao Vân Anh - Khoa NN&VH Hàn Quốc",
    image: ImgApps.caovananh,
  },
  {
    id: 3,
    name: "Hoàng Khánh An - Khoa NN&VH Pháp",
    image: ImgApps.hoangankhanh,
  },
  {
    id: 4,
    name: "Lê Hoài An - SPTA - 23E16",
    image: ImgApps.lehoaian,
  },
  {
    id: 5,
    name: "Nguyễn Diệu An - SPTA - 23E3",
    image: ImgApps.nguyendieuan,
  },
  {
    id: 6,
    name: "Nguyễn Thanh Hà An - NN&VH Nhật Bản",
    image: ImgApps.thanhan,
  },
];

function TeamMembers() {
  return (
    <div className="TeamMembers">
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        Đội ngũ thực hiện
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
