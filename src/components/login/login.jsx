import React, { useState } from "react";
import "./login.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Họ và tên là bắt buộc";
    if (!formData.email) newErrors.email = "Email là bắt buộc";
    if (!formData.phone) newErrors.phone = "Số điện thoại là bắt buộc";
    if (!formData.password) newErrors.password = "Mật khẩu là bắt buộc";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Mật khẩu nhập lại không khớp";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Đăng ký thành công!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="register-form-container">
      <h2>ĐĂNG KÝ TÀI KHOẢN</h2>
      <p>để nhận thông báo về phòng trọ mới tại khu vực của bạn TrọHub</p>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Họ và tên *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Nhập họ và tên"
            />
            {errors.fullName && (
              <span className="error">{errors.fullName}</span>
            )}
          </div>
          <div className="form-group">
            <label>Địa chỉ Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Nhập địa chỉ Email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Số điện thoại *</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Nhập số điện thoại"
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <label>Phường đang cư trú *</label>
            <input
              type="text"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Nhập phường đang cư trú"
            />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </div>
        </div>

        <div className="form-row">
          <button type="submit" className="submit-button">
            ĐĂNG KÝ
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
