import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import "./header.css";
import { ImgApps } from "../../constant/images";

const items1 = [
  {
    key: "Trang chủ",
    label: "Trang chủ",
  },
  {
    key: "Giới thiệu",
    label: "Giới thiệu",
  },
  {
    key: " Dịch vụ",
    label: " Dịch vụ",
  },
  {
    key: " Đánh giá",
    label: "Đánh giá",
  },
  {
    key: "Liên hệ",
    label: "Liên hệ",
  },
];

const HeaderC = () => {
  return (
    <Header
      className="header"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      {/* Logo */}
      <div className="logo" style={{ marginRight: "20px" }}>
        <img
          src={ImgApps.logo0}
          alt="Logo"
          style={{ height: "50px", objectFit: "contain" }}
        />
      </div>

      {/* Menu */}
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
        style={{ flex: 1 }}
      />
    </Header>
  );
};

export default HeaderC;
