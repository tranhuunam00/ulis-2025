// Footer Component
const FooterC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Thông tin giới thiệu */}
        <div style={styles.infoSection}>
          <h3>ULIS 2025</h3>
          <p>
            ULISERS ơi, bạn đang băn khoăn vì tìm kiếm những giải pháp giúp tiết
            kiệm tối ưu chi phí mua sắm? Hay đang loay hoay tìm kiếm một
            <strong> nền tảng uy tín </strong> để gửi gắm những món đồ không còn
            sử dụng nhưng vẫn có giá trị?
          </p>
          <p>
            Nếu câu trả lời là có thì <strong> “EcoTrade”</strong> chính là giải
            pháp cho bạn.
          </p>
        </div>

        <div style={styles.infoSection}>
          <h3>Liên Hệ</h3>
          <p>Số điện thoại: 0961 766 816</p>
          <p>Gmail: 0961 766 816</p>
        </div>

        {/* Hình ảnh */}
        <div style={styles.mediaSection}>
          <h4>Hình ảnh về ULIS</h4>
          <div style={styles.imageGallery}>
            <img
              src="https://ulis.vnu.edu.vn/files/uploads/2017/03/2844_1545813_198068233726252_1601468544_n.jpg"
              alt="Hình 1"
              style={styles.image}
            />
            <img
              src="https://ulis.vnu.edu.vn/files/uploads/2022/10/305437749_5579614905458926_2602933421984147310_n-1024x683.jpg"
              alt="Hình 2"
              style={styles.image}
            />
            <img
              src="https://toquoc.mediacdn.vn/280518851207290880/2022/9/29/dai-hoc-ngoai-ngu-2-16644117600561260372599.jpg"
              alt="Hình 3"
              style={styles.image}
            />
          </div>
        </div>

        {/* Video */}
        <div style={styles.videoSection}>
          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/GXeSJqGsdcQ"
            title="Tôi yêu ULIS là bởi..."
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

// Styles
const styles = {
  footer: {
    marginTop: "50px",
    padding: "20px 0px",
    background: "linear-gradient(to top right, #c0f1a3, #9cbdf0, #ffb1a3)",
    color: "#000",
    borderTop: "2px solid #ddd",
  },
  container: {
    margin: "10px 10%",

    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
  },
  infoSection: {
    flex: "1 1 300px",
    textAlign: "left",
  },
  mediaSection: {
    flex: "1 1 300px",
    textAlign: "center",
  },
  videoSection: {
    flex: "1 1 300px",
    textAlign: "center",
  },
  imageGallery: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
    border: "2px solid #fff",
  },
};

export default FooterC;
