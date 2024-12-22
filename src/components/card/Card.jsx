import React, { useState } from "react";
import { Modal, Button } from "antd";
import "./Card.css";

const Card = ({ image, address, des, price, category, color }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="card">
      <div className="card-image" onClick={handleOpenModal}>
        <img
          src={image || "https://via.placeholder.com/300x200"} // Placeholder nếu không có ảnh
          alt="Building View"
          style={{
            width: "300px",
            height: "200px",
            borderRadius: "10px",
            cursor: "pointer", // Thêm dấu hiệu nhấp chuột
          }}
        />
      </div>
      <div className="card-content">
        <h3>{address}</h3>
        <p>{price}</p>
      </div>

      {/* Ant Design Modal */}
      <Modal
        title="Thông tin chi tiết"
        visible={isModalVisible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="close" onClick={handleCloseModal}>
            Đóng
          </Button>,
        ]}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src={image || "https://via.placeholder.com/300x200"}
            alt="Building View"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              marginBottom: "15px",
            }}
          />
          <h3>{address}</h3>
          <p>
            <strong>Thông tin:</strong> {price}
          </p>
          <p>
            <strong>Mô tả:</strong> {des}
          </p>
        </div>
      </Modal>
      {category && <div className={`card-ticket ${color}`}>{category}</div>}
    </div>
  );
};

export default Card;
