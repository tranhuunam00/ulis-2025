import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import "./header.css";
import { ImgApps } from "../../constant/images";
const addHighlightEffect = (id) => {
  const target = document.getElementById(id);
  if (target) {
    target.classList.add("highlight");
    setTimeout(() => {
      target.classList.remove("highlight");
    }, 1000); // Thời gian khớp với animation 1s
  }
};
const items1 = [
  {
    key: "Trang chủ",
    label: "Trang chủ",
    onClick: () => {
      const targetId = "slideshow";
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
      addHighlightEffect(targetId);
    },
  },
  {
    key: "Giới thiệu",
    label: "Giới thiệu",
    onClick: () => {
      const targetId = "team-members";
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
      addHighlightEffect(targetId);
    },
  },
  {
    key: "Dịch vụ",
    label: "Dịch vụ",
    onClick: () => {
      const targetId = "info";
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
      addHighlightEffect(targetId);
    },
  },
  {
    key: "Đánh giá",
    label: "Đánh giá",
    onClick: () => {
      const targetId = "comment";
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
      addHighlightEffect(targetId);
    },
  },
  {
    key: "Liên hệ",
    label: "Liên hệ",

    onClick: () => {
      const targetId = "footer";
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
      addHighlightEffect(targetId);
    },
  },
];

const HeaderC = () => {
  return (
    <div>
      <div className="header1">
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
      </div>
      <Header
        className="header"
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        {/* Logo */}
        <div className="logo" style={{ marginRight: "20px" }}></div>

        {/* Menu */}
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{ flex: 1 }}
        />
      </Header>
    </div>
  );
};

export default HeaderC;
