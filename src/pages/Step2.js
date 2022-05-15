import HeaderStep from "../components/HeadStep";

const Step2 = () => {
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
            <div className="form-steps_item active">
              <p>Bước 2</p>
              <span>Phiếu đồng ý tiêm</span>
            </div>
            <div className="form-steps_item">
              <p>Bước 3</p>
              <span>Hoàn thành</span>
            </div>
          </div>
          <div className="form-content">
            <div className="form-vaccination-consent ">
              <h3>PHIẾU ĐỒNG Ý THAM GIA TIÊM CHỦNG VẮC XIN COVID - 19</h3>
              <ul>
                <li>
                  1. Tiêm chủng vắc xin là biện pháp phòng bệnh hiệu quả , tuy
                  nhiên vác xin phòng COVID - 19 có thể không phòng được bệnh
                  hoàn toàn . Người được tiêm chung vắc xin phòng COVID - 19 đủ
                  liều có thể phòng được bệnh hoặc giảm mức độ nặng nếu mặc
                  COVID - 19 . Sau khi được tiêm vắc xin phòng COVID- 19 cần
                  thực hiện đầy đủ Thông điệp 5K phòng , chống dịch COVID - 19
                </li>
                <li>
                  {" "}
                  2. Tiêm chủng vác xin phòng COVID - 19 có thể gây ra một số
                  biểu hiện tại chỗ tiêm hoặc toàn thân như sưng , đau chỗ tiêm
                  , nhức đầu , buồn nôn , sốt , đau cơ ... hoặc tại biến nặng
                  sau tiêm chủng
                </li>
                <li>
                  {" "}
                  3. Khi có triệu chứng bất thường về sức khỏe , người được tiêm
                  chủng căn liên hệ với cơ sở y tế gần nhất để được tư văn ,
                  khám và điều trị kịp thời{" "}
                </li>
                <li>
                  {" "}
                  4. Thuộc nhóm đối tượng{" "}
                  <input
                    type="text"
                    placeholder="..............................."
                  />
                </li>
                <li>
                  {" "}
                  Sau khi đã đọc các thông tin nêu tôi đã hiểu về các nguy cơ và{" "}
                </li>
                <li className="flex-between">
                  <p>
                    Đồng ý tiêm chủng <input type="checkbox" />
                  </p>
                  <p>
                    Không đồng ý tiêm chủng <input type="checkbox" />
                  </p>
                </li>
                <li>
                  {" "}
                  Họ tên người được tiêm chủng{" "}
                  <input
                    type="text"
                    placeholder="..........................."
                  />
                </li>
                <li>
                  {" "}
                  Số điện thoai{" "}
                  <input
                    type="text"
                    placeholder="..........................."
                  />
                </li>
                <li>
                  <input type="text" placeholder="............" />{" "}
                  <label>, ngày</label>
                  <input type="text" placeholder="............" />{" "}
                  <label> tháng</label>
                  <input type="text" placeholder="............" />{" "}
                  <label> năm 2022</label>
                </li>
              </ul>
            </div>
            <div className="form-control">
              <a href="./index1.html">Hủy bỏ</a>
              <button href onclick="togglePupup()">
                Tiếp tục &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pupup">
        <img src="./images/Green Leaf Plus Hospital Center Logo 3.png" alt />
        <p className="pupup-line_1">
          Mã xác mình sẽ được gửi đến SĐT mà bạn đăng ký
        </p>
        <div className="pupup-otp">
          <input type="number" />
          <input type="number" />
          <input type="number" />
          <input type="number" />
          <input type="number" />
          <input type="number" />
        </div>
        <p className="pupup-line_2">
          Nếu bạn không nhận được tin nhắn, xin vui lòng thử lại sau:{" "}
        </p>
        <p className="pupup-line_3">00:02:00</p>
        <div className="pupup-control">
          <a onclick="togglePupup()">Hủy bỏ</a>
          <a href="./step-3.html">Xác nhận</a>
        </div>
      </div>
    </div>
  );
};

export default Step2;
