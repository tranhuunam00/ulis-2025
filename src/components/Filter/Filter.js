import { Button, Form, Slider } from "antd";
import PricePanel from "./Price";
import "./filter.css";
import Search from "antd/es/transfer/search";
import { AudioOutlined } from "@ant-design/icons";
import BeautifulInput from "../input/Input";

const priceRanges = [
  { label: "Tất cả mức giá", value: "all" },
  { label: "Dưới 1 triệu", value: "under1m" },
  { label: "1 - 3 triệu", value: "1to3m" },
  { label: "3 - 5 triệu", value: "3to5m" },
  { label: "5 - 10 triệu", value: "5to10m" },
];
const areaRanges = [
  { label: "Tất cả diện tích", value: "all" },
  { label: "Dưới 20m²", value: "under20" },
  { label: "20 - 30m²", value: "20to30" },
  { label: "30 - 50m²", value: "30to50" },
  { label: "50 - 100m²", value: "50to100" },
  { label: "Trên 100m²", value: "above100" },
];

const wardsInCauGiay = [
  { label: "Tất cả phường", value: "all" },
  { label: "Dịch Vọng", value: "dichvong" },
  { label: "Dịch Vọng Hậu", value: "dichvonghau" },
  { label: "Quan Hoa", value: "quanhoa" },
  { label: "Nghĩa Đô", value: "nghiado" },
  { label: "Nghĩa Tân", value: "nghiatan" },
  { label: "Mai Dịch", value: "maidich" },
  { label: "Trung Hòa", value: "trunghoa" },
  { label: "Yên Hòa", value: "yenhoa" },
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
        <PricePanel ranges={priceRanges} title={"Mức giá"}></PricePanel>

        <PricePanel ranges={areaRanges} title={"Diện tích"}></PricePanel>
        <PricePanel ranges={wardsInCauGiay} title={"Khu vực"}></PricePanel>

        <Button className="" type="primary" onSubmit={() => {}}>
          Tìm kiếm
        </Button>
      </div>
    </Form>
  );
};
export default Filter;
