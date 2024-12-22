import { Button, Form, Slider } from "antd";
import PricePanel from "./Price";
import "./filter.css";
import Search from "antd/es/transfer/search";
import { AudioOutlined } from "@ant-design/icons";
import BeautifulInput from "../input/Input";

const priceRanges = [
  { label: "Tất cả mức giá", value: "all" },
  { label: "Dưới 50k", value: "under1m" },
  { label: "Dưới 100k", value: "under1m" },
  { label: "Dưới 200k", value: "under1m" },
  { label: "Dưới 500k", value: "under1m" },
];

const productRanges = [
  { label: "Tất cả sản phẩm", value: "all" },
  { label: "Giáo trình, sách vở học tập", value: "under1m" },
  { label: "Đồ dùng cá nhân", value: "under1m" },
  { label: "Đồ gia dụng, khác", value: "under1m" },
];

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const Filter = () => {
  return (
    <Form>
      <div className="filter">
        <BeautifulInput />
        <PricePanel title="Mức giá" ranges={priceRanges}></PricePanel>
        <PricePanel title="Sản phẩm" ranges={productRanges}></PricePanel>

        <Button className="" type="primary" onSubmit={() => {}}>
          Tìm kiếm
        </Button>
      </div>
    </Form>
  );
};
export default Filter;
