import React, { useState } from "react";
import { InputNumber, Button, Select, Divider } from "antd";
import "antd/dist/reset.css";

const { Option } = Select;

const PricePanel = ({ ranges }) => {
  // Automatically update price input based on dropdown selection
  const handleRangeChange = (value) => {};

  const handleApply = () => {};

  return (
    <div
      className="price-filter-container"
      style={{
        padding: "20px",
        width: "300px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>Mức giá</h2>

      {/* Dropdown */}
      <Select
        defaultValue="Tất cả mức giá"
        style={{ width: "100%", marginBottom: "15px" }}
        onChange={handleRangeChange}
      >
        {ranges.map((range) => (
          <Option key={range.value} value={range.value}>
            {range.label}
          </Option>
        ))}
      </Select>

      <Divider style={{ margin: "10px 0" }} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "15px",
        }}
      >
        <InputNumber placeholder="Từ" min={0} style={{ width: "45%" }} />
        <span style={{ alignSelf: "center" }}>➔</span>
        <InputNumber placeholder="Đến" min={0} style={{ width: "45%" }} />
      </div>

      <Button
        type="primary"
        block
        onClick={handleApply}
        style={{ backgroundColor: "#f5222d", borderColor: "#f5222d" }}
      >
        Áp dụng
      </Button>
    </div>
  );
};

export default PricePanel;
