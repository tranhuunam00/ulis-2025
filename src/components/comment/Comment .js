import React from "react";

// Component Card
const RoomCard = ({ room }) => {
  return (
    <div style={styles.card}>
      {/* Avatar */}

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
      <div style={styles.avatarContainer}>
        <img src={room.avatar} alt="Avatar" style={styles.avatar} />
      </div>

      <h4>Bình Luận:</h4>
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
  avatar: "https://via.placeholder.com/150", // Đường dẫn đến avatar
  comments: [
    "Phòng rất sạch sẽ và tiện nghi.",
    "Chủ nhà thân thiện, giá hợp lý.",
    "Vị trí tuyệt vời, rất gần chợ và bến xe.",
  ],
};

// Styles (có thể dùng CSS Module hoặc Styled Components)
const styles = {
  card: {
    width: "300px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15px",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #ddd",
  },
  title: {
    marginBottom: "10px",
    color: "#333",
  },
  description: {
    marginBottom: "15px",
    color: "#666",
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
