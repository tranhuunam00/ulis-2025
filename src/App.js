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
import RegisterForm from "./components/login/login";
import Introduction from "./components/intro/Introduction";
import IntroductionWeb from "./components/introWeb/IntroductionWeb";
import CommentSection from "./components/commentlist/Cmts";

const { Content, Footer, Sider } = Layout;

const reviews = [
  {
    name: "Lê Minh",
    description:
      "Tôi là sinh viên năm nhất, lần đầu ra Hà Nội học, không có người quen để hỏi phòng trọ. May mắn thay, nhờ web này mà tôi tìm được phòng gần trường, giá hợp lý, chủ nhà lại thân thiện. Quá trình tìm kiếm rất nhanh và dễ dàng, chỉ cần vài cú click là có ngay danh sách phòng phù hợp. Cảm ơn đội ngũ hỗ trợ nhiệt tình!",
    rating: Math.random() < 0.5 ? 4 : 5,
    comments: [
      "Dịch vụ rất nhanh chóng.",
      "Phòng rất sạch sẽ và tiện nghi.",
      "Đội ngũ hỗ trợ rất nhiệt tình.",
    ],
  },
  {
    name: "Marie Dupont",
    description:
      "Tôi là người nước ngoài đến Việt Nam học tập, ban đầu rất bỡ ngỡ trong việc tìm nhà trọ. Nhờ web, tôi không chỉ tìm được nơi ở tốt mà còn nhận được hỗ trợ tận tình từ cộng đồng người dùng, dù tôi chưa thành thạo tiếng Việt.",
    rating: Math.random() < 0.5 ? 4 : 5,
    comments: [
      "Hỗ trợ tận tình, dù tôi không thành thạo tiếng Việt.",
      "Phòng sạch sẽ, đúng như mô tả.",
      "Rất hài lòng với dịch vụ.",
    ],
  },
  {
    name: "Tuấn Anh",
    description:
      "Ban đầu tôi khá lo lắng khi tìm phòng trọ qua mạng vì sợ lừa đảo, nhưng trang web này thật sự đáng tin cậy. Tôi không chỉ tìm được phòng ưng ý mà còn nhận được nhiều kinh nghiệm bổ ích từ cộng đồng người dùng trên đây.",
    rating: Math.random() < 0.5 ? 4 : 5,
    comments: [
      "Trang web rất đáng tin cậy.",
      "Tìm được phòng nhanh chóng, ưng ý.",
      "Nhiều thông tin hữu ích từ cộng đồng.",
    ],
  },
  {
    name: "Hoàng Lan",
    description:
      "Tôi có con nhỏ, nên tiêu chí chọn phòng rất khắt khe: gần trường học, khu vực an toàn, không quá ồn ào. Nhờ web mà tôi tìm được phòng ưng ý, đúng tiêu chí, giá cả lại hợp lý. Đặc biệt, đội ngũ hỗ trợ rất nhiệt tình trong việc tư vấn và kết nối với chủ nhà.",
    rating: Math.random() < 0.5 ? 4 : 5,
    comments: [
      "Phòng đúng tiêu chí, giá hợp lý.",
      "Đội ngũ hỗ trợ tận tình.",
      "Khu vực an toàn, rất phù hợp cho gia đình.",
    ],
  },
  {
    name: "Ngọc Hà",
    description:
      "Là sinh viên ngoại tỉnh, tôi gặp khó khăn khi phải chuyển trọ thường xuyên. Nhờ web mà việc tìm phòng mới trở nên dễ dàng hơn rất nhiều. Thêm nữa, web còn có tính năng lọc theo tiêu chí, giúp tôi tiết kiệm thời gian và công sức.",
    rating: Math.random() < 0.5 ? 4 : 5,
    comments: [
      "Tính năng lọc rất hữu ích.",
      "Tiết kiệm thời gian khi tìm phòng.",
      "Phòng mới phù hợp, chuyển trọ dễ dàng.",
    ],
  },
  {
    name: "Hương Thảo",
    description:
      "Tôi là nhân viên văn phòng, công việc bận rộn nên không có nhiều thời gian tìm phòng. Nhờ web, tôi đã tìm được một căn trọ đầy đủ tiện nghi, gần chỗ làm. Thậm chí, tôi còn có thể xem hình ảnh phòng trước khi đến tận nơi. Điều này giúp tôi tiết kiệm rất nhiều thời gian và công sức.",
    rating: Math.random() < 0.5 ? 4 : 5,
    comments: [
      "Hình ảnh phòng rất trực quan.",
      "Phòng gần chỗ làm, đầy đủ tiện nghi.",
      "Tiết kiệm thời gian tìm kiếm.",
    ],
  },
  {
    name: "Anh Đức",
    description:
      "Tôi sở hữu một nhà trọ cho thuê nhưng gặp khó khăn trong việc tìm kiếm người thuê phù hợp. Sau khi đăng tin lên web, phòng trọ của tôi đã được thuê chỉ trong vòng một tuần. Trang web không chỉ giúp kết nối nhanh chóng mà còn đảm bảo an toàn, vì mọi thông tin đều được kiểm duyệt cẩn thận.",
    rating: Math.random() < 0.5 ? 4 : 5,
    comments: [
      "Phòng trọ được thuê rất nhanh.",
      "Thông tin được kiểm duyệt cẩn thận.",
      "Kết nối nhanh chóng và an toàn.",
    ],
  },
];

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
      <div id="slideshow">
        <Slideshow />
      </div>
      <div id="team-members">
        <TeamMembers />
        <Introduction />
      </div>

      <h1 style={{ textAlign: "center" }}>Tính năng của TrọHUB</h1>
      <IntroductionWeb />
      <div className="visual">
        <div className="card-cont">
          {/* Tính năng: Thông tin ký túc xá */}
          <Card
            image={
              "https://sonca.vn/wp-content/uploads/2023/11/Van-phong-pham-Kon-Tum-Cua-hang-van-phong-pham-Son-Ca-chuyen-ban-online-uy-tin-so-1-tai-Kon-Tum.png"
            }
            price={"Tra cứu thông tin ký túc xá dễ dàng"}
            address={"Tính năng: Thông tin ký túc xá"}
            des={`🌟 **Tính năng nổi bật**:
- Tra cứu danh sách các phòng ký túc xá còn trống, giá thuê, và thông tin chi tiết.
- Giao diện trực quan giúp sinh viên dễ dàng chọn phòng phù hợp.
📚 **Tiện ích**:
- Tìm kiếm theo tiêu chí: số lượng người/phòng, mức giá, hoặc tiện nghi (wifi, điều hòa, bàn học...).
- Hỗ trợ sinh viên đặt phòng trực tuyến nhanh chóng và an toàn.
💡 **Lợi ích**:
- Tiết kiệm thời gian, không cần đến trực tiếp ký túc xá.
- Thông tin cập nhật liên tục để đảm bảo độ chính xác.`}
          />

          {/* Tính năng: Thông tin phòng trọ */}
          <Card
            image={
              "https://codesrevolvewordpress.s3.us-west-2.amazonaws.com/revolveai/2023/07/27103524/ai-based-recommendation-systems.png"
            }
            price={"Hỗ trợ tìm kiếm và gợi ý phòng trọ"}
            address={"Tính năng: Thông tin phòng trọ"}
            des={`🌟 **Tính năng nổi bật**:
- Cung cấp danh sách phòng trọ gần các trường đại học với các tiêu chí chi tiết: giá, diện tích, tiện ích.
- Hệ thống AI đề xuất phòng trọ phù hợp dựa trên nhu cầu và vị trí của người dùng.
📚 **Tiện ích**:
- Lọc phòng theo tiêu chí cá nhân: giá tiền, khoảng cách, hoặc loại hình phòng trọ.
- Hiển thị bản đồ trực tiếp, giúp người dùng dễ dàng xác định vị trí.
💡 **Lợi ích**:
- Giúp người dùng nhanh chóng tìm được phòng trọ ưng ý.
- Tăng tính minh bạch và an toàn trong việc kết nối với chủ trọ.`}
          />

          {/* Tính năng: Đăng ký nhận thông báo */}
          <Card
            image={
              "https://subiz.com.vn/blog/wp-content/uploads/2022/11/subiz-bi-quyet-telesale-e1667384392973.png"
            }
            price={"Nhận thông báo tức thì từ hệ thống"}
            address={"Tính năng: Đăng ký nhận thông báo"}
            des={`🌟 **Tính năng nổi bật**:
- Đăng ký nhận thông báo về:
  - Ký túc xá có phòng trống.
  - Phòng trọ phù hợp mới được đăng.
  - Các sự kiện hoặc chương trình ưu đãi.
📚 **Tiện ích**:
- Chọn loại thông báo mong muốn: qua email, SMS hoặc thông báo trong ứng dụng.
- Thời gian gửi thông báo tức thì khi có thông tin mới.
💡 **Lợi ích**:
- Không bỏ lỡ cơ hội tìm kiếm chỗ ở phù hợp.
- Luôn được cập nhật thông tin mới nhất một cách thuận tiện.`}
          />
        </div>
      </div>

      <RegisterForm />

      <h1 style={{ textAlign: "center" }}>Bộ Lọc</h1>
      <Filter />
      <h1 style={{ textAlign: "center" }}>Thông tin Ký túc xá</h1>

      <div id="info" className="card-cont">
        {/* Ký túc xá Mễ Trì */}
        <Card
          linkMap={
            "https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+H%E1%BB%8Dc+Ngo%E1%BA%A1i+Ng%E1%BB%AF+-+%C4%90HQGHN/@21.0392474,105.7792392,17z/data=!3m1!4b1!4m6!3m5!1s0x313454cacd93cc57:0x465a0246eecc8c72!8m2!3d21.0392424!4d105.7818141!16s%2Fm%2F063zld9?hl=vi&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          }
          subImages={[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
          ]}
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
          linkMap={
            "https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+H%E1%BB%8Dc+Ngo%E1%BA%A1i+Ng%E1%BB%AF+-+%C4%90HQGHN/@21.0392474,105.7792392,17z/data=!3m1!4b1!4m6!3m5!1s0x313454cacd93cc57:0x465a0246eecc8c72!8m2!3d21.0392424!4d105.7818141!16s%2Fm%2F063zld9?hl=vi&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          }
          subImages={[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
          ]}
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
          linkMap={
            "https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+H%E1%BB%8Dc+Ngo%E1%BA%A1i+Ng%E1%BB%AF+-+%C4%90HQGHN/@21.0392474,105.7792392,17z/data=!3m1!4b1!4m6!3m5!1s0x313454cacd93cc57:0x465a0246eecc8c72!8m2!3d21.0392424!4d105.7818141!16s%2Fm%2F063zld9?hl=vi&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          }
          subImages={[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
          ]}
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
          linkMap={
            "https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+H%E1%BB%8Dc+Ngo%E1%BA%A1i+Ng%E1%BB%AF+-+%C4%90HQGHN/@21.0392474,105.7792392,17z/data=!3m1!4b1!4m6!3m5!1s0x313454cacd93cc57:0x465a0246eecc8c72!8m2!3d21.0392424!4d105.7818141!16s%2Fm%2F063zld9?hl=vi&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          }
          subImages={[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
          ]}
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

      <h1 style={{ textAlign: "center" }}>Thông tin nhà trọ</h1>
      <div className="card-cont">
        <Card
          linkMap={
            "https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+H%E1%BB%8Dc+Ngo%E1%BA%A1i+Ng%E1%BB%AF+-+%C4%90HQGHN/@21.0392474,105.7792392,17z/data=!3m1!4b1!4m6!3m5!1s0x313454cacd93cc57:0x465a0246eecc8c72!8m2!3d21.0392424!4d105.7818141!16s%2Fm%2F063zld9?hl=vi&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          }
          subImages={[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
          ]}
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
          linkMap={
            "https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+H%E1%BB%8Dc+Ngo%E1%BA%A1i+Ng%E1%BB%AF+-+%C4%90HQGHN/@21.0392474,105.7792392,17z/data=!3m1!4b1!4m6!3m5!1s0x313454cacd93cc57:0x465a0246eecc8c72!8m2!3d21.0392424!4d105.7818141!16s%2Fm%2F063zld9?hl=vi&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          }
          subImages={[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
          ]}
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
          linkMap={
            "https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+H%E1%BB%8Dc+Ngo%E1%BA%A1i+Ng%E1%BB%AF+-+%C4%90HQGHN/@21.0392474,105.7792392,17z/data=!3m1!4b1!4m6!3m5!1s0x313454cacd93cc57:0x465a0246eecc8c72!8m2!3d21.0392424!4d105.7818141!16s%2Fm%2F063zld9?hl=vi&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          }
          subImages={[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
          ]}
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
          linkMap={
            "https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+H%E1%BB%8Dc+Ngo%E1%BA%A1i+Ng%E1%BB%AF+-+%C4%90HQGHN/@21.0392474,105.7792392,17z/data=!3m1!4b1!4m6!3m5!1s0x313454cacd93cc57:0x465a0246eecc8c72!8m2!3d21.0392424!4d105.7818141!16s%2Fm%2F063zld9?hl=vi&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          }
          subImages={[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
          ]}
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
          linkMap={
            "https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+H%E1%BB%8Dc+Ngo%E1%BA%A1i+Ng%E1%BB%AF+-+%C4%90HQGHN/@21.0392474,105.7792392,17z/data=!3m1!4b1!4m6!3m5!1s0x313454cacd93cc57:0x465a0246eecc8c72!8m2!3d21.0392424!4d105.7818141!16s%2Fm%2F063zld9?hl=vi&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          }
          subImages={[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
          ]}
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
          linkMap={
            "https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+H%E1%BB%8Dc+Ngo%E1%BA%A1i+Ng%E1%BB%AF+-+%C4%90HQGHN/@21.0392474,105.7792392,17z/data=!3m1!4b1!4m6!3m5!1s0x313454cacd93cc57:0x465a0246eecc8c72!8m2!3d21.0392424!4d105.7818141!16s%2Fm%2F063zld9?hl=vi&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          }
          subImages={[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
          ]}
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
      <div id="comment">
        <h1>Bình Luận</h1>

        <CommentSection reviews={reviews} />
      </div>
      <div id="footer">
        <FooterC />
        <Footer style={{ textAlign: "center" }}>
          ULIS 2024 ©{new Date().getFullYear()} Created by ULIS TE
        </Footer>
      </div>
    </Layout>
  );
};

export default App;
