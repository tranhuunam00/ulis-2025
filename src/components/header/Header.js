import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import "./header.css";
import { ImgApps } from "../../constant/images";

const items1 = [
  {
    key: "Trang chủ",
    label: "Trang chủ",
    onClick: () =>
      document
        .getElementById("slideshow")
        .scrollIntoView({ behavior: "smooth" }),
  },
  {
    key: "Giới thiệu",
    label: "Giới thiệu",
    onClick: () =>
      document
        .getElementById("team-members")
        .scrollIntoView({ behavior: "smooth" }),
  },
  {
    key: "Dịch vụ",
    label: "Dịch vụ",
    onClick: () =>
      document.getElementById("info").scrollIntoView({ behavior: "smooth" }),
  },
  {
    key: "Đánh giá",
    label: "Đánh giá",
    onClick: () =>
      document.getElementById("comment").scrollIntoView({ behavior: "smooth" }),
  },
  {
    key: "Liên hệ",
    label: "Liên hệ",
    onClick: () =>
      document.getElementById("footer").scrollIntoView({ behavior: "smooth" }),
  },
];

const HeaderC = () => {
  return (
    <Header
      className="header"
      style={{ display: "flex", alignItems: "center" }}
    >
      <div className="logo" style={{ marginRight: "20px" }}>
        <img
          src={ImgApps.logo}
          alt="Logo"
          style={{ height: "40px", objectFit: "contain" }}
        />
      </div>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
  );
};
export default HeaderC;
