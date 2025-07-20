import React from 'react';
import '../CSS/footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <>
    <hr className="line" />
    <section className="footer">
      <h1 className="credit">
        Designed with <i className="fa fa-heart pulse"></i> by
        <a href="https://www.linkedin.com/in/udayrajsharma"> Uday Raj</a>
      </h1>
      <div className="share">
            <a href="https://www.linkedin.com/in/udayrajsharma" className="fab fa-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"></a>
            <a href="https://www.facebook.com/sharmarajuday" className="fab fa-facebook" target="_blank" rel="noopener noreferrer" aria-label="Twitter"></a>
            <a href="https://github.com/UdayRaj04" className="fab fa-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub"></a>
            <a href="mailto:sharmarajuday@gmail.com" className="fas fa-envelope" target="_blank" rel="noopener noreferrer" aria-label="Mail"></a>
            <a href="https://www.instagram.com/udayrajsharma4/" className="fab fa-instagram" target="_blank" rel="noopener noreferrer" aria-label="Telegram"></a>
          </div>
    </section>
    </>
  );
};

export default Footer;
