import React, { useState, useEffect } from "react";
import "./Cmts.css"; // CSS tùy chỉnh
import RoomCard from "../comment/Comment ";

const CommentSection = ({ reviews }) => {
  const [visibleIndex, setVisibleIndex] = useState(0); // Chỉ mục bắt đầu hiển thị

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) =>
        prevIndex + 2 >= reviews.length ? 0 : prevIndex + 2
      );
    }, 7000);
    return () => clearInterval(interval); // Xóa interval khi component bị unmount
  }, [reviews.length]);

  return (
    <div id="comment2">
      <div className="comment-cont">
        {reviews.map((r, index) => (
          <div
            className={`room-card-container ${
              index >= visibleIndex && index < visibleIndex + 2
                ? "active"
                : "inactive"
            }`}
            key={index}
          >
            <RoomCard room={r} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
