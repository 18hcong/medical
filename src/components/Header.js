import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <section className="header__content">
        <a href>
          <img src="./images/Medical Notebook.png" alt />
        </a>
        <ul>
          <a href="#">
            <span>TRANG CHỦ</span>
          </a>
          <a href="#">
            <span>THÔNG TIN CÁ NHÂN</span>
          </a>
          <a href="#">
            <span>HỒ SƠ SỨC KHOẺ</span>
          </a>
          <a href="./step1">
            <span>KHAI BÁO Y TẾ</span>
          </a>
          <a href="#">
            <span>ĐĂNG NHẬP</span>
          </a>
        </ul>
        <button className="btn-grad">ĐĂNG KÝ</button>
      </section>
      <iframe
        src="https://covid19.vnanet.vn/home/indexwigetsummary"
        frameBorder={0}
        width="100%"
        style={{
          minHeight: 250,
          paddingTop: 50,
          paddingRight: 250,
          paddingLeft: 250,
          overflow: "hidden",
        }}
        scrolling="no"
      >
        {" "}
      </iframe>
      <iframe
        src="https://covid19.vnanet.vn/home/indexwiget"
        frameBorder={0}
        width="100%"
        style={{ minHeight: 500, paddingRight: 100, paddingLeft: 100 }}
      >
        {" "}
      </iframe>
    </header>
  );
};

export default Header;
