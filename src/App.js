import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import HeaderC from "./components/header/Header";
import Slideshow from "./components/Slideshow/Slideshow";
import TeamMembers from "./components/TeamMenber/TeamMembers";
import Filter from "./components/Filter/Filter";
import Card from "./components/card/Card";
import "./App.css";
import { ImgApps } from "./constant/images";
import RoomCard from "./components/comment/Comment ";
import FooterC from "./components/Footer/Footer";

const { Content, Footer, Sider } = Layout;

const roomData = {
  name: "Phòng trọ tiện nghi Quận 1",
  description: "Phòng rộng rãi, đầy đủ nội thất, gần trung tâm.",
  rating: 4,
  comments: [
    "Phòng rất sạch sẽ và tiện nghi.",
    "Chủ nhà thân thiện, giá hợp lý.",
    "Vị trí tuyệt vời, rất gần chợ và bến xe.",
  ],
};

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <HeaderC />
      <Slideshow />
      <TeamMembers />
      <h1 style={{ textAlign: "center" }}>Thông tin Ký túc xá</h1>

      <div className="card-cont">
        {/* Ký túc xá Mễ Trì */}
        <Card
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s"
          }
          price={"1tr5 - 2tr"}
          address={"Ký túc xá Mễ Trì, Thanh Xuân"}
          des={`🏠 Địa chỉ: Đường Nguyễn Cảnh Dị, quận Thanh Xuân, Hà Nội.
🌱 Môi trường sạch sẽ, không gian yên tĩnh, phù hợp với sinh viên.
👍 Gần các trường ĐH Khoa học Tự nhiên, ĐH Xã hội & Nhân văn, ĐH Hà Nội.
🌈 Cơ sở vật chất: Nhà ở được trang bị giường tầng, bàn học chung, wifi miễn phí.
💥 Giá thuê: 1tr5 - 2tr/tháng (bao gồm điện, nước).`}
        />

        {/* Ký túc xá Ngoại ngữ */}
        <Card
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZavufBF1-mPAVqW_aqscJSEI7yoHQecEuQ&s"
          }
          price={"2tr - 2tr5"}
          address={"Ký túc xá Ngoại ngữ, Cầu Giấy"}
          des={`🏠 Địa chỉ: Đường Phạm Văn Đồng, quận Cầu Giấy, Hà Nội.
🌱 Nằm trong khuôn viên Trường Đại học Ngoại ngữ, an ninh đảm bảo.
👍 Tiện ích: Gần thư viện, nhà ăn tập thể, sân thể thao, trạm xe buýt.
🌈 Nội thất: Phòng ở có giường tầng, quạt, bàn học. Điều hòa và bình nóng lạnh trong một số phòng.
💥 Giá thuê: 2tr - 2tr5/tháng, phù hợp cho nhóm sinh viên.`}
        />

        {/* Ký túc xá Sư phạm */}
        <Card
          image={
            "https://cdyhn.vn/wp-content/uploads/2020/03/ki-tuc-xa-my-dinh9.jpg"
          }
          price={"1tr - 1tr5"}
          address={"Ký túc xá Sư phạm, Cầu Giấy"}
          des={`🏠 Địa chỉ: Đường Xuân Thủy, quận Cầu Giấy, Hà Nội.
🌱 Gần các trường ĐH Sư phạm, ĐH Quốc gia, ĐH Thương mại.
👍 Môi trường thân thiện, có các dịch vụ ăn uống và giặt là.
🌈 Cơ sở vật chất: Phòng rộng rãi, có giường tầng, khu vệ sinh chung sạch sẽ.
💥 Giá thuê: 1tr - 1tr5/tháng, tiết kiệm chi phí cho sinh viên.`}
        />

        {/* Ký túc xá khác */}
        <Card
          image={
            "https://css.vnu.edu.vn/sites/default/files/styles/large/public/logo/1_264175.jpg?itok=v9kCj-Ah"
          }
          price={"1tr - 2tr"}
          address={"Khu vực lân cận các trường đại học"}
          des={`🏠 Địa chỉ: Nhiều lựa chọn quanh khu vực các trường đại học tại Hà Nội.
🌱 Đáp ứng nhu cầu tìm kiếm phòng trọ gần trường.
👍 Nhiều mức giá, đa dạng về tiện nghi và diện tích.
💥 Giá thuê: 1tr - 2tr/tháng, phù hợp với mọi nhu cầu của sinh viên.`}
        />
      </div>

      <h1 style={{ textAlign: "center" }}>Bộ Lọc</h1>

      <Filter />
      <h1 style={{ textAlign: "center" }}>Thông tin nhà trọ</h1>
      <div className="card-cont">
        <Card
          image={ImgApps.image11}
          price={"2tr9"}
          address={"Khu vực Nghĩa Tân"}
          des={`🏠Địa chỉ : Ngõ 3  Nghĩa tân - Cầu giấy
🌱Phòng tầng 5 - 2tr9- thang bộ
👍 Sát chợ nghĩa tân, sát trường cđ sư phạm, gần đh điện lực, báo chí, đh sư phạm, công viên nghĩa đô…
🌈 Vs chung, giờ giấc tự do.
💥 Nội thất :Full đồ, Thiết bị đều, đh, giường tủ,, nóng lạnh, bàn trang điểm…
`}
        />
        <Card
          image={ImgApps.image9}
          price={"5tr"}
          address={"Ngõ 68 Cầu Giấy"}
          des={`🏠Nội thất:
- Giường, Tủ, Điều Hoà, Nóng Lạnh, máy giặt
- Có chỗ để xe rộng rãi, Có gác xép
- 💔☝️🐉Có bàn bếp nấu ăn ngay trong phòng
- Chỉ cần mang quần áo và đồ dùng cá nhân về là ở được luôn
- Trước cửa nhà là chợ nên thuận tiện cho việc sinh hoạt
- Gần các trường Đại Học lớn như: Giao Thông, Ngoại Thương,
 Quốc Gia, ĐH Hà Nội….
- Nhà nằm ngay mặt ngõ 68 Cầu Giấy, thuận tiện đi lại và 
vận chuyển đồ đạc
📞Liên hệ: 0768333356 chính chủ ( A. TÙNG )

`}
        />

        <Card
          image={ImgApps.image3}
          price={"3tr5"}
          address={"Ngõ 89 Phạm Văn Đồng, Mai Dịch"}
          des={`Cầu Giấy
- Nhà 7 tầng thang máy 
Nội thất: Điều hoà, nóng lạnh, tủ lạnh, máy giặt, gác xép, tủ bếp trên dưới, bếp từ, hút mùi, tủ quần áo 3 cánh, bàn ghế trang điểm, bàn ghế. 

👉 Chú ý: 
-💥 Tối đa 3 người, 2 xe/ phòng
-💥 Nuôi pet: nếu ở sạch sẽ
-💥 Lối thoát hiểm riêng biệt, hệ thống PCCC, cửa chống cháy từng tầng, từng phòng.
`}
        />
        <Card
          image={ImgApps.image1}
          price={"1tr5"}
          address={"Ngõ 2 Hoàng Quốc Việt"}
          des={`Loại phòng: phòng trọ studio.
Đầy đủ tiện nghi: điều hòa, nóng lạnh, tủ quần áo, giường, vệ sinh khép kín, kệ bếp, máy giặt chung.
💓🐽🐸Camera giám sát 24/7.
Có chỗ để xe.
💓🐽🐸Không chung chủ, giờ giấc tự do.
Cửa khóa vân tay.
An ninh tốt, PCCC đảm bảo.
💓🐽🐸5 tầng thang bộ.
Được nuôi pet.
Liên hệ: 0961197823.
`}
        />

        <Card
          image={
            "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/3/27/1172466/Phong-Tro.jpeg"
          }
          price={"4tr"}
          address={"Ngõ 2 Hoàng Quốc Việt"}
          des={`Loại phòng: phòng trọ studio.
Đầy đủ tiện nghi: điều hòa, nóng lạnh, tủ quần áo, giường, vệ sinh khép kín, kệ bếp, máy giặt chung.
💔☝️🐉Camera giám sát 24/7.
Có chỗ để xe.
💔☝️🐉Không chung chủ, giờ giấc tự do.
Cửa khóa vân tay.
An ninh tốt, PCCC đảm bảo.
💔☝️🐉5 tầng thang bộ.
Được nuôi pet.
Liên hệ: 0961197823.
`}
        />

        <Card
          image={
            "https://xaydungthuanphuoc.com/wp-content/uploads/2022/09/mau-phong-tro-co-gac-lung-dep2022-5.jpg"
          }
          price={"2tr"}
          address={"Ngõ 19 Âu Cơ"}
          des={`Địa chỉ: 14 ngõ 79 Dương Quảng Hàm, Quan Hoa, Cầu Giấy, Hà Nội.
🌽🍅Loại phòng: phòng trọ khép kín.
Giá phòng: 3.5 triệu/tháng
🌽🍅Đặc điểm:
Đầy đủ tiện nghi: điều hòa, nóng lạnh, tủ quần áo, kệ giường, bàn bếp, vệ sinh khép kín, ban công, máy giặt chung.
Hợp đồng thời hạn 12 tháng.
🌽🍅Camera giám sát 24/7.
Có thang máy.
Chỉ được dùng bếp điện.
Có chỗ để xe, không 

`}
        />
      </div>
      <h1>Bình Luận</h1>
      <div className="comment-cont">
        <RoomCard room={roomData} />
        <RoomCard room={roomData} />
        <RoomCard room={roomData} />
        <RoomCard room={roomData} />
      </div>
      <FooterC />
      <Footer style={{ textAlign: "center" }}>
        ULIS 2024 ©{new Date().getFullYear()} Created by ULIS TE
      </Footer>
    </Layout>
  );
};

export default App;
