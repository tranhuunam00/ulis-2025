import React, { useState } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Modal, theme } from "antd";
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setModalContent("");
  };
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

      <h1 style={{ textAlign: "center" }}>Tính năng của Trọ HUB</h1>
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

      <h1 style={{ textAlign: "center" }}>Bộ Lọc</h1>
      <Filter />
      <h1 style={{ textAlign: "center" }}>Thông tin Ký túc xá</h1>

      <div id="info" className="card-cont">
        {/* Ký túc xá Mễ Trì */}
        <Card
          linkMap={
            "https://www.google.com/maps/place/K%C3%BD+T%C3%BAc+X%C3%A1+M%E1%BB%85+Tr%C3%AC/@20.9909042,105.7939268,1170m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3135acb902df4ae5:0xd4b1d54284c738ea!2zS8O9IFTDumMgWMOhIE3hu4UgVHLDrA!8m2!3d20.9909042!4d105.7965071!16s%2Fg%2F1hm5_cdby!3m5!1s0x3135acb902df4ae5:0xd4b1d54284c738ea!8m2!3d20.9909042!4d105.7965071!16s%2Fg%2F1hm5_cdby?hl=vi&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          }
          subImages={[
            "https://ussh.vnu.edu.vn/uploads/ussh/news/2020_04/untitled-20200415095242156.png",
            "http://vnkgu.edu.vn/ckfinder/userfiles/images/7002.jpg",
            "https://reviewedu.net/wp-content/uploads/2022/07/ktx.jpg",
          ]}
          image={
            "https://icdn.dantri.com.vn/thumb_w/680/2022/09/12/can-canh-khu-noi-tru-dh-quoc-gia-ha-noi-tai-hoa-lacdocx-1662965357080.jpeg"
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
            "https://www.google.com/maps/dir//K%C3%BD+t%C3%BAc+x%C3%A1+ngo%E1%BA%A1i+ng%E1%BB%AF+(VNU+dormitory),+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+Qu%E1%BB%91c+gia+H%C3%A0+N%E1%BB%99i%2F144+%C4%90.+Xu%C3%A2n+Th%E1%BB%A7y,+D%E1%BB%8Bch+V%E1%BB%8Dng+H%E1%BA%ADu,+C%E1%BA%A7u+Gi%E1%BA%A5y,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0402673,105.779649,1169m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3135ab10d3ea3983:0xed3dc2d1bf4b1619!2m2!1d105.7823496!2d21.0406017?hl=vi&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          }
          subImages={[
            "https://nncn.edu.vn/wp-content/uploads/2021/06/ky-tuc-xa-cao-dang-ngoai-ngu-cong-nghe-ha-noi-.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZavufBF1-mPAVqW_aqscJSEI7yoHQecEuQ&s",
            "https://css.vnu.edu.vn/sites/default/files/styles/large/public/logo/ktx_mt.jpg?itok=TnQO0HuK",
          ]}
          image={
            "https://css.vnu.edu.vn/sites/default/files/pictures/img_1110.jpg"
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
            "https://www.google.com/maps/place/K%C3%BD+t%C3%BAc+x%C3%A1+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+S%C6%B0+ph%E1%BA%A1m+H%C3%A0+N%E1%BB%99i/@21.04072,105.7819073,1169m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3135ab345cc4acf7:0xeb0c296556f22ff!8m2!3d21.04072!4d105.7844876!16s%2Fg%2F1hc1kbvsb?hl=vi&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          }
          subImages={[
            "https://kytucxa.hnue.edu.vn/portals/0/Users/A511.jpg",
            "https://congdankhuyenhoc.qltns.mediacdn.vn/zoom/700_438/449484899827462144/2022/10/7/anh-1-thumb-16651205354131240060312.jpeg",
            "https://staff.hnue.edu.vn/portals/0/Users/ktxsp.jpg",
          ]}
          image={
            "https://img.giaoduc.net.vn/w1000/Uploaded/2024/ohpkvhu/2011_11_24/b1.png"
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
            "https://www.google.com/maps/place/K%C3%BD+T%C3%BAc+X%C3%A1+M%E1%BB%B9+%C4%90%C3%ACnh/@21.0334536,105.7635976,1169m/data=!3m1!1e3!4m10!1m2!2m1!1za-G6vyB0w7pjIHjDoyBt4bu5IMSRw6xuaA!3m6!1s0x3135ab0bf0f1742f:0xe820ab53e8c05841!8m2!3d21.0338719!4d105.7666013!15sChlr4bq_IHTDumMgeMOjIG3hu7kgxJHDrG5oWhsiGWvhur8gdMO6YyB4w6MgbeG7uSDEkcOsbmiSARFzdHVkZW50X2Rvcm1pdG9yeZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VRdGVXTjFXRzFuUlJBQuABAPoBBAgAECo!16s%2Fg%2F11j5s7mnc5?hl=vi&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          }
          subImages={[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROgTyfVFXvHJk9x4LCJL17mGFriio8vhu8Aw&s",
            "https://cdn-i.vtcnews.vn/resize/th/upload/2023/08/10/ba6a8224-22375476.jpeg",
            "https://cdn.tuoitre.vn/thumb_w/480/471584752817336320/2023/11/26/ky-tuc-xa-dh-su-pham--1700976849051400234597.jpeg",
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
            "https://www.google.com/maps/place/3+Ng%C3%B5+T%C3%A2n+%C4%90%C3%B4,+Ngh%C4%A9a+T%C3%A2n,+C%E1%BA%A7u+Gi%E1%BA%A5y,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0458003,105.7888684,1169m/data=!3m2!1e3!4b1!4m5!3m4!1s0x3135ab304e67a753:0xdd8495b3b942fb8d!8m2!3d21.0458003!4d105.7914487?hl=vi&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          }
          subImages={[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZTzBfF1TMOPQz7jTcRRt23qs2HsNjvARkCg&s",
            "https://media.vneconomy.vn/w800/images/upload/2022/07/12/phong-tro-gia-re-tphcm-1-2.jpg",
            "https://ecogreen-saigon.vn/uploads/phong-tro-la-loai-hinh-nha-o-pho-bien-gia-re-tien-loi-cho-sinh-vien-va-nguoi-di-lam.png",
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
            "https://www.google.com/maps/place/Ng.+68+%C4%90.+C%E1%BA%A7u+Gi%E1%BA%A5y,+Quan+Hoa,+C%E1%BA%A7u+Gi%E1%BA%A5y,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0458003,105.7888684,1169m/data=!3m1!1e3!4m6!3m5!1s0x3135ab40e004159b:0x78b0bd69d4796ef7!8m2!3d21.033104!4d105.8021221!16s%2Fg%2F1tftz0cc?hl=vi&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          }
          subImages={[
            "https://vov.vn/sites/default/files/styles/large/public/2024-06/h5_1.jpg",
            "https://media.tinnhanhnhadat.vn/w640/images/upload//2022/10/07/siet-chat-quy-dinh-ve-dien-tich-phong-tro-cho-thue-can-can-cu-vao-dieu-kien-thuc-te-1.jpg",
            "https://thematrixones.com.vn/wp-content/uploads/2023/01/unnamed-1.jpg",
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
            "https://www.google.com/maps/place/Ng%C3%B5+89+%C4%90%C6%B0%E1%BB%9Dng+Ph%E1%BA%A1m+V%C4%83n+%C4%90%E1%BB%93ng,+Mai+D%E1%BB%8Bch,+C%E1%BA%A7u+Gi%E1%BA%A5y,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.043278,105.7776551,1169m/data=!3m2!1e3!4b1!4m6!3m5!1s0x313454cca30c3f95:0x9626e09f681b7ea!8m2!3d21.043278!4d105.7802354!16s%2Fg%2F11pktmb2b1?hl=vi&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          }
          subImages={[
            "https://images2.thanhnien.vn/528068263637045248/2023/5/1/5620435b-1682962127518908546019.jpg",
            "https://thematrixones.com.vn/wp-content/uploads/2023/01/unnamed-1.jpg",
            "https://media.vneconomy.vn/w800/images/upload/2022/09/13/anh-t46-47.png",
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
            "https://www.google.com/maps/place/Ng.+2+Ho%C3%A0ng+Qu%E1%BB%91c+Vi%E1%BB%87t,+Ngh%C4%A9a+%C4%90%C3%B4,+C%E1%BA%A7u+Gi%E1%BA%A5y,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0472832,105.8018625,1169m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3135ab22ba802fcf:0x50a7ac178157f4a9!8m2!3d21.0472832!4d105.8044428!16s%2Fg%2F11c44l9pcl?hl=vi&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          }
          subImages={[
            "https://thematrixones.com.vn/wp-content/uploads/2023/01/unnamed-1.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN3rXiZqmKw3hYNKUyYugUbWcBgj3cZ7ypEQ&s",
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
            "https://www.google.com/maps/place/Ng.+2+Ho%C3%A0ng+Qu%E1%BB%91c+Vi%E1%BB%87t,+Ngh%C4%A9a+%C4%90%C3%B4,+C%E1%BA%A7u+Gi%E1%BA%A5y,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0472832,105.8018625,1169m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3135ab22ba802fcf:0x50a7ac178157f4a9!8m2!3d21.0472832!4d105.8044428!16s%2Fg%2F11c44l9pcl?hl=vi&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          }
          subImages={[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqv11Z1REfhqyCtbNU4xfFZOphLYvkiKxh-g&s",
            "https://feliz-home.com.vn/wp-content/uploads/2023/02/uecuhb.jpg",
            "https://phunuvietnam.mediacdn.vn/179072216278405120/2024/8/8/sinhvien-17231112626962036033230.jpg",
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
            "https://www.google.com/maps/search/Ng%C3%B5+19+%C3%82u+C%C6%A1/@21.0741942,105.8138099,4675m/data=!3m2!1e3!4b1?hl=vi&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          }
          subImages={[
            "https://cdnphoto.dantri.com.vn/I9iA7PASZi0nX_DZ4WRhw0HHqWU=/thumb_w/1020/2024/08/09/4bbd72acc5d9618738c8-1723194566288.jpg",
            "https://yduochn.com.vn/wp-content/uploads/phong-tro.jpg",
            "https://wedo.vn/wp-content/uploads/2018/07/xay-nha-tro-gia-re.jpg",
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
      <RegisterForm />

      <div id="comment">
        <h1>Đánh giá (7)</h1>

        <CommentSection reviews={reviews} />
      </div>
      <div id="footer">
        <FooterC />
        <Footer style={{ textAlign: "center" }}>
          TrọHub ©{new Date().getFullYear()} Created by ULIS TE
        </Footer>
      </div>

      <div className="f2">
        <img
          src={ImgApps.logo}
          style={{
            height: "90px",
            borderRadius: "5px",
            margin: "5px",
            cursor: "pointer",
            objectFit: "contain",
          }}
        />
        <h2 style={{ color: "white" }}>Tìm trọ không khó có Trọ Hub lo</h2>
        <img
          src="https://ulis.vnu.edu.vn/files/uploads/2023/12/ULISLogo2023_Transparent_TextWhite-01.png"
          style={{
            height: "50px",
            borderRadius: "5px",
            margin: "5px",
            cursor: "pointer",
            objectFit: "contain",
          }}
        />
        <img
          src={"https://www.vnu.edu.vn/upload/2015/01/17449/image/Logo-VNU.png"}
          style={{
            height: "50px",
            borderRadius: "5px",
            margin: "5px",
            cursor: "pointer",
            objectFit: "contain",
          }}
        />
      </div>

      <div className="floating-menu">
        <a
          href="#"
          className="menu-item"
          title="24/7 Support"
          onClick={() =>
            openModal(
              <div>
                <h2>Hỗ trợ tư vấn 24/7</h2>
                <img
                  width={300}
                  src="https://cdn.tuoitre.vn/thumb_w/480/471584752817336320/2023/7/28/photo-1690539991405-1690539991465230938310.jpg"
                ></img>
                <p>
                  Chúng tôi cam kết mang đến dịch vụ hỗ trợ tận tâm suốt 24/7,
                  sẵn sàng giải đáp mọi thắc mắc của bạn về tìm kiếm, lựa chọn
                  phòng trọ hoặc các vấn đề liên quan. Đội ngũ tư vấn viên luôn
                  trực tuyến để đảm bảo bạn nhận được sự hỗ trợ kịp thời và
                  chính xác.
                </p>
              </div>
            )
          }
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/7438/7438038.png"
            alt="24/7"
          />
        </a>
        <a
          href="#"
          className="menu-item"
          title="Chat Support"
          onClick={() =>
            openModal(
              <div>
                <h2>Chat bot hỗ trợ</h2>
                <img
                  width={300}
                  src="https://suachualaptop24h.com/upload_images/images/2023/04/10/chatbot-ai-co-the-lam-mat-thong-tin-nguoi-dung-02.jpg"
                ></img>
                <p>
                  Với hệ thống chatbot thông minh, bạn có thể nhanh chóng nhận
                  được câu trả lời cho các câu hỏi phổ biến mà không cần chờ
                  đợi. Chat bot sẽ cung cấp thông tin về phòng trọ, hướng dẫn sử
                  dụng website và hỗ trợ bạn trong việc tìm kiếm các giải pháp
                  phù hợp.
                </p>
              </div>
            )
          }
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/9374/9374926.png"
            alt="Chat"
          />
        </a>
        <a
          href="#"
          className="menu-item"
          title="Customer Service"
          onClick={() =>
            openModal(
              <div>
                <h2>Kết nối với chủ nhà</h2>
                <img
                  width={300}
                  src="https://baodongnai.com.vn/file/e7837c02876411cd0187645a2551379f/dataimages/202003/original/images2276579_t13_1.jpg"
                ></img>
                <p>
                  Chức năng này giúp bạn dễ dàng liên lạc trực tiếp với chủ nhà
                  để trao đổi về thông tin phòng trọ, giá cả, điều kiện thuê và
                  các yêu cầu khác. Chúng tôi đảm bảo việc kết nối nhanh chóng
                  và tiện lợi để bạn tìm được phòng trọ ưng ý.
                </p>
              </div>
            )
          }
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/9670/9670815.png"
            alt="Customer Service"
          />
        </a>
        <a
          href="https://zalo.me/0842864889"
          className="menu-item"
          title="Zalo Support"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1200px-Icon_of_Zalo.svg.png"
            alt="Zalo"
          />
        </a>
      </div>

      {/* Modal */}
      <Modal
        title="Thông tin"
        visible={isModalVisible}
        onCancel={closeModal}
        onOk={closeModal}
        footer={null} // Tùy chọn ẩn nút Footer
      >
        {modalContent}
      </Modal>
    </Layout>
  );
};

export default App;
