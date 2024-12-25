import React, { useState } from "react";
import { Modal, Button } from "antd";
import "./Card.css";

const Card = ({ image, address, des, price, subImages, linkMap }) => {
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
            cursor: "pointer",
          }}
        />
      </div>

      <div className="card-content">
        <h2>{address}</h2>
        <p style={{ fontStyle: "italic" }}>{price}</p>
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
          {/* 3 ảnh nhỏ bên dưới */}
          {subImages && (
            <div className="sub-images">
              {subImages?.map((subImage, index) => (
                <img
                  key={index}
                  src={subImage}
                  alt={`Sub Image ${index + 1}`}
                  style={{
                    width: "80px",
                    height: "60px",
                    borderRadius: "5px",
                    margin: "5px",
                    cursor: "pointer",
                    border: "1px solid #ddd",
                  }}
                  onClick={handleOpenModal} // Nhấn vào ảnh nhỏ cũng mở modal
                />
              ))}
            </div>
          )}
          <h3>{address}</h3>
          <p>
            <strong>Giá:</strong> {price}
          </p>
          <p>
            <strong>Mô tả:</strong> {des}
          </p>
          {/* Liên kết Google Map */}
          {linkMap && (
            <div style={{ marginTop: "20px" }}>
              <a
                href={
                  linkMap ||
                  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    address
                  )}`
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  color: "#007bff",
                  textDecoration: "none",
                  fontWeight: "bold",
                  marginTop: "15px",
                }}
              >
                Xem trên Google Map
              </a>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Card;
