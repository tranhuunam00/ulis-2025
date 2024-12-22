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
const datas = [
  // Sách vở
  {
    image:
      "https://tailieuvnu.com/wp-content/uploads/2021/05/08/Giao-trinh-Triet-hoc.png",
    price: "20.000 VNĐ",
    address: "Triết học Mac -Lenin",
    des: `📚 **Danh mục**: Sách giáo trình, sách tham khảo dành cho sinh viên.
🏠 **Vị trí**: Gần Đại học Quốc gia, Xuân Thủy, Cầu Giấy, thuận tiện cho việc nhận sách.
🌟 **Tình trạng**:
- Sách đã qua sử dụng nhưng còn khá mới (80%).
- Nội dung không bị rách hay mất trang.
💥 **Điểm nổi bật**: Giá cực rẻ, phù hợp với sinh viên cần tài liệu học tập.`,
    category: "sách vở",
    color: "green",
  },
  {
    image:
      "https://tailieuvnu.com/wp-content/uploads/2020/11/14/Giao-trinh-Kinh-te-vi-mo-PGS.TS-Phi-Manh-Hong-UEB.png",
    price: "25.000 VNĐ",
    address: "Kinh tế vi mô",
    des: `📚 **Danh mục**: Sách kinh tế vi mô dành cho sinh viên ngành kinh tế.
🏠 **Vị trí**: Cầu Giấy, Hà Nội, gần các trường đại học lớn.
🌟 **Tình trạng**:
- Sách cũ, chất lượng nội dung còn nguyên vẹn.
- Không có vết bẩn hoặc trang bị rách.
💥 **Điểm nổi bật**: Giá hợp lý, rất cần thiết cho các môn học cơ bản.`,
    category: "sách vở",
    color: "green",
  },
  {
    image: "https://ulis.vnu.edu.vn/files/uploads/2019/03/IMG_3518-Copy.jpg",
    price: "30.000 VNĐ",
    address: "Sách ngữ pháp tiếng Anh",
    des: `📚 **Danh mục**: Sách học ngữ pháp tiếng Anh.
🏠 **Vị trí**: Gần Đại học Sư phạm, Hà Nội.
🌟 **Tình trạng**:
- Sách cũ nhưng giữ gìn cẩn thận, không rách hoặc mất trang.
- Có ghi chú và gợi ý học tập từ người sử dụng trước.
💥 **Điểm nổi bật**: Phù hợp với sinh viên luyện thi TOEIC, IELTS.`,
    category: "sách vở",
    color: "green",
  },
  // Đồ dùng cá nhân
  {
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134201-22110-f7u40fqxe1jvf8",
    price: "15.000 VNĐ",
    address: "Kéo cắt cây",
    des: `🛠️ **Danh mục**: Dụng cụ cá nhân, kéo cắt cây phù hợp cho gia đình hoặc người yêu làm vườn.
🏠 **Vị trí**: Khu vực Dịch Vọng, gần công viên Cầu Giấy.
🌟 **Tình trạng**:
- Sản phẩm đã qua sử dụng, vẫn sắc bén và hoạt động tốt.
- Thích hợp cho các công việc cắt tỉa cây cảnh, làm vườn nhỏ.
💥 **Điểm nổi bật**: Giá rẻ hơn so với mua mới, đảm bảo tiết kiệm chi phí.`,
    category: "đồ dùng cá nhân",
    color: "blue",
  },
  {
    image: "https://happybag.vn/uploads/2024/06/balo-du-lich-b.png.webp",
    price: "50.000 VNĐ",
    address: "Balo du lịch mini",
    des: `🛠️ **Danh mục**: Balo du lịch mini cho người thích khám phá.
🏠 **Vị trí**: Ngõ 12, Xuân Thủy, Cầu Giấy, Hà Nội.
🌟 **Tình trạng**:
- Balo đã qua sử dụng nhưng còn nguyên vẹn, dây kéo hoạt động tốt.
- Thiết kế gọn nhẹ, phù hợp cho chuyến đi ngắn.
💥 **Điểm nổi bật**: Giá ưu đãi, tiết kiệm hơn so với hàng mới.`,
    category: "đồ dùng cá nhân",
    color: "blue",
  },
  {
    image:
      "https://bizweb.dktcdn.net/100/236/309/files/1-171ceae1-e3b9-45bf-a2c7-f1dbc1dfaa91.jpg?v=1681792176858",
    price: "25.000 VNĐ",
    address: "Bình nước giữ nhiệt",
    des: `🛠️ **Danh mục**: Bình nước giữ nhiệt cho dân văn phòng, sinh viên.
🏠 **Vị trí**: Dịch Vọng, gần công viên Cầu Giấy.
🌟 **Tình trạng**:
- Đã qua sử dụng nhưng vẫn giữ nhiệt tốt, không rò rỉ nước.
- Dung tích 500ml, phù hợp cho nhu cầu cá nhân.
💥 **Điểm nổi bật**: Giá rẻ hơn nhiều so với sản phẩm mới.`,
    category: "đồ dùng cá nhân",
    color: "blue",
  },
  // Đồ gia dụng
  {
    image:
      "https://gomsubattrang.vn/uploads/data/20/files/products/Bo-bat-dia-bat-trang/mua-bat-dia-bat-trang-gia-re-ve-hoa-mai/mua-bat-dia-bat-trang-o-dau-re-dep-ve-cu-qua-1.jpg",
    price: "200.000 VNĐ",
    address: "Bộ bát Bát Tràng",
    des: `🍴 **Danh mục**: Đồ gia dụng - Bộ bát gốm sứ cao cấp từ làng nghề Bát Tràng.
🏠 **Vị trí**: Ngõ 3, Nghĩa Tân, Cầu Giấy, dễ dàng vận chuyển.
🌟 **Tình trạng**:
- Đã qua sử dụng nhưng vẫn giữ được độ sáng bóng và không có vết nứt.
- Thiết kế họa tiết truyền thống, đẹp mắt.
💥 **Điểm nổi bật**: Phù hợp cho các gia đình, giá ưu đãi và hỗ trợ giao hàng trong nội thành.`,
    category: "đồ gia dụng",
    color: "yellow",
  },
  {
    image: "https://pos.nvncdn.com/14f951-12134/art/20240406_uX451Vy2.jpeg",
    price: "300.000 VNĐ",
    address: "Nồi chiên không dầu",
    des: `🍴 **Danh mục**: Nồi chiên không dầu cho gia đình hiện đại.
🏠 **Vị trí**: Nghĩa Tân, Cầu Giấy, Hà Nội.
🌟 **Tình trạng**:
- Đã qua sử dụng, hoạt động tốt, không trầy xước bên ngoài.
- Dung tích 3.5L, phù hợp cho bữa ăn gia đình.
💥 **Điểm nổi bật**: Giá cả phải chăng, tiết kiệm hơn 50% so với mua mới.`,
    category: "đồ gia dụng",
    color: "yellow",
  },
  {
    image:
      "https://thumuadocuthanhnam.com/wp-content/uploads/2024/11/z6043916925277_a64dff3a165518ab2bf4ab14191aaaf7.jpg",
    price: "150.000 VNĐ",
    address: "Ấm đun siêu tốc",
    des: `🍴 **Danh mục**: Ấm đun siêu tốc, công cụ cần thiết cho mọi gia đình.
🏠 **Vị trí**: Gần công viên Nghĩa Đô, Cầu Giấy.
🌟 **Tình trạng**:
- Đã qua sử dụng, tốc độ đun nước vẫn nhanh và hiệu quả.
- Thiết kế nhỏ gọn, không chiếm diện tích.
💥 **Điểm nổi bật**: Giá siêu rẻ, bảo hành 1 tháng từ người bán.`,
    category: "đồ gia dụng",
    color: "yellow",
  },
];

const roomData = {
  name: "Quỳnh Anh",
  description: "",
  rating: 45,
  comments: [
    "Mình thấy trang web đã giúp các bạn sinh viên có lối sống xanh sạch đẹp khi có thể trao đổi và mua bán các đồ dùng tuy cũ những vẫn còn giá trị.",
    " Mình đã chia sẻ trang web này với các bạn của mình và họ rất thích thú",
  ],
  avatar:
    " https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-con-gai-24.jpg",
};

const roomData2 = {
  name: "Nhật Linh",
  description: "",
  rating: 4,
  comments: [
    "Trao đổi giáo trình ở đây thật tiện lợi và nhanh gọn.",
    " Mình không phải mất công đăng bài trên nhiều nền tảng mạng xã hội nữa",
  ],
  avatar:
    "https://wellavn.com/wp-content/uploads/2024/11/anh-gai-xinh-2k5-7.jpg",
};

const roomData3 = {
  name: "Khánh Chi",
  description: "",
  rating: 5,
  comments: [
    "Mong trang web có sức lan tỏa mạnh mẽ hơn nữa.",
    " Mình đã tìm được người bạn thân mới có cùng sở thích là sắm đồ 2Hand sau vài lần trao đổi mua bán",
  ],
  avatar:
    "https://danviet.mediacdn.vn/upload/3-2016/images/2016-08-29/147245963321437-anh-1.jpg",
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
    <div className="full">
      <Layout>
        <HeaderC />
        <Slideshow />
        <div className="visual">
          <h1 style={{ textAlign: "center" }}>Tính năng nổi bật</h1>
          <div className="card-cont">
            <Card
              image={
                "https://sonca.vn/wp-content/uploads/2023/11/Van-phong-pham-Kon-Tum-Cua-hang-van-phong-pham-Son-Ca-chuyen-ban-online-uy-tin-so-1-tai-Kon-Tum.png"
              }
              price={"ULISERS dễ dàng trao đổi và mua bán đồ cũ"}
              address={"Đăng kí đồ"}
              des={`🛍️ **Địa điểm**: Đường Nguyễn Cảnh Dị, quận Thanh Xuân, Hà Nội.
🌟 **Đặc điểm**:
- Không gian giao lưu mua bán đồ cũ dành riêng cho sinh viên ULIS.
- Các mặt hàng phổ biến: sách, đồ dùng học tập, quần áo, đồ gia dụng.
📚 **Ưu điểm**:
- Giá cả hợp lý, hỗ trợ sinh viên tiết kiệm chi phí.
- Cơ hội tái sử dụng đồ cũ, bảo vệ môi trường.
🤝 **Hoạt động**:
- Đăng ký đồ cần bán/mua qua ứng dụng hoặc tại điểm giao dịch.
- Đổi đồ hoặc thanh toán trực tiếp nhanh chóng, tiện lợi.`}
            />

            {/* Ký túc xá Ngoại ngữ */}
            <Card
              image={
                "https://codesrevolvewordpress.s3.us-west-2.amazonaws.com/revolveai/2023/07/27103524/ai-based-recommendation-systems.png"
              }
              price={
                "Mua sắm, trao đổi những món đồ với giá cả hợp lý, tiết kiệm"
              }
              address={"AI đề xuất theo nhu cầu"}
              des={`🤖 **Hệ thống AI hỗ trợ**: Đưa ra gợi ý các món đồ phù hợp với nhu cầu cá nhân.
🏠 **Địa điểm**: Khu vực Trường Đại học Ngoại ngữ, Phạm Văn Đồng, quận Cầu Giấy, Hà Nội.
🛍️ **Đồ trao đổi/mua bán**:
- Sách giáo trình, tài liệu học tập.
- Đồ dùng cá nhân, đồ gia dụng cũ.
- Quần áo, phụ kiện.
🌟 **Ưu điểm**:
- Giá cả hợp lý, tiết kiệm cho sinh viên.
- Tính năng đề xuất thông minh, giúp tìm kiếm nhanh chóng.
- Giao dịch dễ dàng, an toàn trong khuôn viên trường.`}
            />

            <Card
              image={
                "https://subiz.com.vn/blog/wp-content/uploads/2022/11/subiz-bi-quyet-telesale-e1667384392973.png"
              }
              price={
                "Đội ngũ nhiệt tình, trách nhiệm, mang lại cho các bạn sự tin tưởng"
              }
              address={"Đánh giá, phản hồi 24-7"}
              des={`📞 **Hỗ trợ 24/7**: Đội ngũ luôn sẵn sàng lắng nghe và giải quyết mọi thắc mắc.
🏠 **Địa chỉ**: Đường Xuân Thủy, quận Cầu Giấy, Hà Nội.
🌟 **Gần các tiện ích**: 
- Các trường đại học lớn (ĐH Sư phạm, ĐH Quốc gia, ĐH Thương mại).
- Hệ thống quán ăn, dịch vụ giặt là trong khu vực.
👍 **Đánh giá từ người dùng**:
- "Dịch vụ nhanh chóng, hỗ trợ tận tình."
- "Môi trường thân thiện, cảm giác rất an toàn."
🤝 **Cam kết**:
- Đáp ứng yêu cầu nhanh chóng, nâng cao trải nghiệm người dùng.`}
            />
          </div>
        </div>

        <h1 style={{ textAlign: "center" }}>Bộ Lọc</h1>
        <div className="product">
          <Filter />
          <div
            style={{
              marginTop: "30px",
            }}
            className="card-cont"
          >
            {datas.map((data) => (
              <Card {...data} />
            ))}
          </div>
        </div>

        <div className="comment">
          <h1>Bình Luận</h1>

          <div className="comment-cont">
            <RoomCard room={roomData} />
            <RoomCard room={roomData2} />
            <RoomCard room={roomData3} />
          </div>
        </div>

        <TeamMembers />

        <FooterC />
        <Footer style={{ textAlign: "center" }}>
          ULIS 2024 ©{new Date().getFullYear()} Created by ULIS TE
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
