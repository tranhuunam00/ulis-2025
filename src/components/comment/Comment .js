import React from "react";

// Component Card
const RoomCard = ({ room }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{room.name}</h2>
      <p style={styles.description}>{room.description}</p>
      <div style={styles.rating}>
        <span>Rating: </span>
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            style={{
              color: index < room.rating ? "gold" : "gray",
              fontSize: "1.2em",
            }}
          >
            ★
          </span>
        ))}
      </div>
      <h4>Comments:</h4>
      <ul style={styles.comments}>
        {room.comments.map((comment, index) => (
          <li key={index} style={styles.comment}>
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Dữ liệu mẫu
const roomData = {
  name: "Phòng trọ tiện nghi Quận 1",
  description: "Phòng rộng rãi, đầy đủ nội thất, gần trung tâm.",
  rating: 4,
  comments: [
    "Phòng rất sạch sẽ và tiện nghi.",
    "Chủ nhà thân thiện, giá hợp lý.",
    "Vị trí tuyệt vời, rất gần chợ và bến xe.",
  ],
};

// Styles (có thể dùng CSS Module hoặc Styled Components)
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  card: {
    width: "1200px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  title: {
    marginBottom: "10px",
    color: "#333",
    fontWeight: "bold",
  },
  description: {
    marginBottom: "15px",
    color: "black",
  },
  rating: {
    marginBottom: "15px",
  },
  comments: {
    listStyle: "none",
    padding: 0,
  },
  comment: {
    marginBottom: "10px",
    color: "#555",
  },
};

export default RoomCard;
