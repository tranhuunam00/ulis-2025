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
        <div className="filter-slider">
          <h4>Nhập diện tích</h4>
          <Slider
            className="filter-slider-s"
            range={{
              draggableTrack: true,
            }}
            defaultValue={[10, 120]}
          />
        </div>

        <BeautifulInput />
        <PricePanel ranges={priceRanges}></PricePanel>

        <Button className="" type="primary" onSubmit={() => {}}>
          Tìm kiếm
        </Button>
      </div>
    </Form>
  );
};
export default Filter;
