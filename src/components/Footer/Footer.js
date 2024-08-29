import React from 'react';
import '../../assets/CSS/footer.css';  // 푸터 스타일을 위한 CSS 파일

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">Contact us: <a href="mailto:team@example.com">team@example.com</a></p>
        <p className="footer-text">© 2024 Your Team Name</p>
      </div>
    </footer>
  );
};

export default Footer;
