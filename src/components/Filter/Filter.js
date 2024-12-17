import { Button, Form } from "antd";
import PricePanel from "./Price";
import "./filter.css";

const priceRanges = [
  { label: "Tất cả mức giá", value: "all" },
  { label: "Dưới 1 triệu", value: "under1m" },
  { label: "1 - 3 triệu", value: "1to3m" },
  { label: "3 - 5 triệu", value: "3to5m" },
  { label: "5 - 10 triệu", value: "5to10m" },
];
const Filter = () => {
  return (
    <Form>
      <div className="filter">
        <PricePanel ranges={priceRanges}></PricePanel>
        <Button type="primary" block onSubmit={() => {}}>
          Tìm kiếm
        </Button>
      </div>
    </Form>
  );
};
export default Filter;
