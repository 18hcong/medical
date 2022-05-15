const HeaderStep = () => {
  return (
    <div className="header__content">
      <a href>
        <img src="./images/Medical Notebook.png" alt />
      </a>
      <ul>
        <a href="./index.html">
          <span>TRANG CHỦ</span>
        </a>
        <a href="#">
          <span>THÔNG TIN CÁ NHÂN</span>
        </a>
        <a href="#">
          <span>QUẢN LÝ BIỂU MẪU</span>
        </a>
        <a href="#">
          <span>QUẢN LÝ TÀI KHOẢN</span>
        </a>
      </ul>
      <button className="btn-grad">ĐĂNG XUẤT</button>
    </div>
  );
};

export default HeaderStep;
