import HeaderStep from "../components/HeadStep";

const Step3 = () => {
  return (
    <div classname="container">
      <HeaderStep />
      <div className="content">
        <div className="user-container">
          <div className="user-timer">
            <input
              type="date"
              style={{
                border: "1px solid #cecece",
                borderRadius: 6,
                padding: "4px 16px",
              }}
            />
          </div>
          <div className="user-avatar">
            <div className="user-avatar_desc">
              <p>PHẠM CÔNG HOÀNG</p>
              <span>Nam - 21 tuổi</span>
            </div>
            <div className="user-avatar_img">
              <img src="./images/user 1.png" alt />
            </div>
            <div className="user-avatar_options">
              <span>
                <i className="fa-solid fa-ellipsis-vertical" />
              </span>
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-title">
            <h2>ĐĂNG KÝ TIÊM CÁ NHÂN</h2>
          </div>
          <div className="form-steps">
            <div className="form-steps_item ">
              <p>Bước 1</p>
              <span>Phiếu đăng ký tiêm</span>
            </div>
            <div className="form-steps_item ">
              <p>Bước 2</p>
              <span>Phiếu đồng ý tiêm</span>
            </div>
            <div className="form-steps_item active">
              <p>Bước 3</p>
              <span>Hoàn thành</span>
            </div>
          </div>
          <div className="form-content">
            <div className="form-finished">
              <h3>
                Đăng ký tiêm chủng Covid-19 thành công. Mã đặt tiêm là{" "}
                <span>4530</span>
              </h3>
              <p>
                Cảm ơn bạn đã đăng ký tiêm chủng Vaccine Covid-19. Hiện tại bộ y
                tế đã thu thập nhu cầu và thông tin để lập danh sáchđối tượng
                đăng ký tiêm Vaccine Covid-19 trên địa bàn Đà Nẵng.
                <br /> Chúng tôi sẽ liên hệ với bạn theo số điện thoại
                0368053223 khi có kế hoạch tiêm trong thời gian sớm nhất.
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>Họ và tên :</td>
                    <td>Ngày sinh:</td>
                    <td>Giới tính</td>
                  </tr>
                  <tr>
                    <td>Phạm Công Hoàng</td>
                    <td>18/12/2000</td>
                    <td>Nam</td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>Số điện thoại</td>
                    <td>CCCD/ Mã định danh công dân</td>
                    <td>Số thẻ BHYT</td>
                  </tr>
                  <tr>
                    <td>091238574</td>
                    <td>12396795</td>
                    <td />
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>Địa chỉ hiện tại</td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>Thành phố</td>
                    <td>Quận</td>
                    <td>Phường</td>
                  </tr>
                  <tr>
                    <td>Đà Nẵng</td>
                    <td>Quận Hải Châu</td>
                    <td>Phường Hòa Thuận Đông</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="form-control">
              <a href="./step-2.html">Hủy bỏ</a>
              <button href onclick="alert('Hoàn thành')">
                Tiếp tục &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
