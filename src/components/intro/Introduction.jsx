import React from "react";
import "./Introduction.css"; // Import CSS for styling

const Introduction = () => {
  return (
    <div className="introduction-container">
      <div className="video-section">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/_26r-nDC3iw"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-section">
        <p
          style={{
            fontWeight: "500",
            color: "black",
            fontFamily: "Montserrat",
          }}
        >
          Nhóm 50 xin giới thiệu
          <strong style={{ color: "green" }}>Trọ Hub</strong> - nền tảng tìm
          kiếm phòng trọ trực tuyến dành riêng cho sinh viên tại Cầu Giấy. Với
          Trọ Hub, việc tìm một căn phòng phù hợp trở nên đơn giản và nhanh
          chóng hơn bao giờ hết.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
