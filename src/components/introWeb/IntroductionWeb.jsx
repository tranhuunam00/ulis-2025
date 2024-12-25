import React from "react";
import "./IntroductionWeb.css"; // Import CSS for styling
import { ImgApps } from "../../constant/images";

const IntroductionWeb = () => {
  return (
    <div className="introductionWeb-container">
      <div className="text-section">
        <p
          style={{
            fontWeight: "500",
            color: "black",
            fontFamily: "Montserrat",
          }}
        >
          <strong style={{ color: "green" }}>
            Trọ Hub - nền tảng tìm Website cung cấp nhiều tính năng tiện ích hỗ
            trợ sinh viên trong việc tìm kiếm phòng trọ một cách hiệu quả và
            tiện lợi.
          </strong>{" "}
          Giao diện tìm kiếm thân thiện với người dùng, tích hợp các bộ lọc giúp
          sinh viên dễ dàng tìm phòng trọ theo tiêu chí như giá cả (1.500.000
          VNĐ - 3.000.000 VNĐ), diện tích (15m² - 50m²), và vị trí (gần trường
          học). Hệ thống quản lý nội dung (CMS) cho phép chủ nhà tự đăng tải,
          chỉnh sửa, hoặc xóa thông tin về phòng trọ, đồng thời nhận thông báo
          khi có tin nhắn hoặc đánh giá mới từ người dùng. Chức năng chat trực
          tuyến giúp sinh viên trò chuyện trực tiếp với chủ nhà để hỏi thêm
          thông tin, bên cạnh sự hỗ trợ từ chatbot trả lời các câu hỏi thường
          gặp. Bản đồ tương tác tích hợp Google Maps hiển thị vị trí phòng trọ
          và các tiện ích xung quanh như cửa hàng tạp hóa, quán ăn, hay điểm
          giao thông công cộng. Hệ thống đánh giá cho phép sinh viên nhận xét và
          đánh giá phòng trọ cũng như chủ nhà, giúp người dùng khác tham khảo.
          Ngoài ra, chương trình khuyến mãi cung cấp thông báo về các ưu đãi và
          mã giảm giá dành riêng cho sinh viên mới đăng ký tài khoản, kèm thông
          tin chi tiết và điều kiện áp dụng.
        </p>
      </div>
      <div className="video-section">
        <img src={ImgApps.home1} alt="" />
      </div>
    </div>
  );
};

export default IntroductionWeb;
