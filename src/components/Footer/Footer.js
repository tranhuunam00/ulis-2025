import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        {/* Phần thông tin liên lạc */}
        <div className="footer-left">
          <h2>LIÊN LẠC VỚI CHÚNG MÌNH</h2>
          <p>Trung tâm công nghệ thông tin</p>
          <p>Số 1 Phạm Văn Đồng, quận Cầu Giấy, TP Hà Nội</p>
          <p>📞 03969372151</p>
          <p>✉️ theFishersict.since24@gmail.com</p>
          <div className="footer-icons">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="map">
            <h2>Bản đồ</h2>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.869187683282!2d105.78068631533136!3d21.038132792849306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab62c5e3602f%3A0x4b61e7b7f7e6cfb8!2zU-G7kSAxIFBo4bqhbSBW4buNbiDEkOG7i25nLCBD4bunYSBD4butIEdp4bqlYSwgSGFub2kgVGjhu4sgUXXhuq1uLCBIw6AgTuG7mWkgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1679744286337!5m2!1sen!2s"
              width="300"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* <div className="footer-map">
          <h2>Bản đồ</h2>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.869187683282!2d105.78068631533136!3d21.038132792849306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab62c5e3602f%3A0x4b61e7b7f7e6cfb8!2zU-G7kSAxIFBo4bqhbSBW4buNbiDEkOG7i25nLCBD4bunYSBD4butIEdp4bqlYSwgSGFub2kgVGjhu4sgUXXhuq1uLCBIw6AgTuG7mWkgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1679744286337!5m2!1sen!2s"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="thank-you">
            <p>❤️ Cảm ơn bạn đã ghé thăm website của chúng tôi! ❤️</p>
          </div>
        </div> */}

        {/* Phần form và lời cảm ơn */}
        <div className="footer-right">
          <h2>Share your experience with us!</h2>
          <form>
            <div className="form-row">
              <input type="text" name="firstName" placeholder="First Name" />
              <input type="text" name="lastName" placeholder="Last Name" />
            </div>
            <input type="email" name="email" placeholder="Email *" required />
            <textarea name="message" placeholder="Message"></textarea>

            <button type="submit" className="send-button">
              Send
            </button>
          </form>
          <div className="thank-you">
            <div style={{ fontWeight: 800 }}>Bạn thân mến</div>
            <p>
              Xin chân thành cảm ơn bạn đã đồng hành cùng dự án của chúng mình!
              Hy vọng bạn có trải nghiệm hài lòng khi sử dụng dịch vụ! Phản hồi
              và ý kiến đóng góp của các bạn là động lực to lớn để chúng mình
              duy trì và phát triển dự án này
            </p>
            <div style={{ fontWeight: 800, color: "green" }}>TrọHub❤️</div>
          </div>
        </div>
      </div>
      <div className="footer-content-map"></div>
    </div>
  );
};

export default Footer;
