import HeaderStep from "../components/HeadStep";
const Step1 = () => {
  return (
    <div className="container">
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
            <div className="form-steps_item active">
              <p>Bước 1</p>
              <span>Phiếu đăng ký tiêm</span>
            </div>
            <div className="form-steps_item">
              <p>Bước 2</p>
              <span>Phiếu đồng ý tiêm</span>
            </div>
            <div className="form-steps_item">
              <p>Bước 3</p>
              <span>Hoàn thành</span>
            </div>
          </div>
          <div className="form-content">
            <div className="form-content_firstline">
              <ul>
                <li>Đăng ký cho người thân</li>
              </ul>
            </div>
            <div className="form-content_middle">
              <div className="flex-between  form-helper_desc">
                <div className="form-group">
                  <label htmlFor>Họ và tên người đăng ký giúp: </label>
                  <input
                    type="text"
                    placeholder="................................"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor>Số điện thoại: </label>
                  <input
                    type="text"
                    placeholder="................................"
                  />
                </div>
              </div>
              <div className="flex-between  form-branch">
                <div className="form-group">
                  <p>CƠ SỞ TIÊM CHỦNG </p>
                  <input type="text" placeholder="...................." />
                  <br />
                </div>
                <div className="form-group">
                  <br />
                  <p>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                  <span> Độc lập - Tự do - Hạnh phúc </span>
                </div>
              </div>
              <div className="flex-between  form-title">
                <h3>
                  {" "}
                  PHIẾU SÀNG LỌC TRƯỚC TIÊM CHỦNG VẮC XIN PHÒNG COVID-19{" "}
                </h3>
              </div>
              <div className="flex-between form-name">
                <div className="form-group">
                  <label htmlFor> Họ và tên:</label>
                  <input
                    type="text"
                    placeholder="............................"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor>Ngày sinh:</label>
                  <input
                    type="text"
                    placeholder="............................"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor> Nam</label>
                  <input type="checkbox" />
                  <label htmlFor> Nữ</label>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="flex-between form-ID">
                <div className="form-group">
                  <label htmlFor> Số CCCD: </label>
                  <input
                    type="text"
                    placeholder="............................"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor> Số điện thoại: </label>
                  <input
                    type="text"
                    placeholder="............................"
                  />
                </div>
              </div>
              <div className="flex-between form-work">
                <div className="form-group">
                  <label htmlFor> Địa chỉ liên hệ: </label>
                  <input
                    type="text"
                    placeholder="............................"
                  />
                </div>
              </div>
              <div className="flex-between form-address">
                <div className="form-group">
                  <label htmlFor> Đơn vị công tác: </label>
                  <input
                    type="text"
                    placeholder="............................"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor> Phường: </label>
                  <input
                    type="text"
                    placeholder="............................"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor> Quận: </label>
                  <input
                    type="text"
                    placeholder="............................"
                  />
                </div>
              </div>
              <div className=" form-check-vaccine">
                <p>Đã tiêm mũi 1 vắc xin phòng COVID-19:</p>
                <input type="checkbox" />
                <label htmlFor>Chưa tiêm</label>
                <br />
                <input type="checkbox" />
                <label htmlFor>Đã tiêm, loại vaccine</label>
                <input type="text" placeholder=".........................." />
              </div>
              <div className="form-table">
                <table border="1px">
                  <tbody>
                    <tr>
                      <td>
                        1. Tiền sử rõ ràng phản vệ với vắc xin phòng COVID-19
                        lần trước hoặc các thành phần của Vaccine phòng COVID-19
                      </td>
                      <td>
                        Không <input type="checkbox" />
                      </td>
                      <td>
                        Có <input type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>2. Tiền sử bệnh COVID-19 trong vòng 6 tháng</td>
                      <td>
                        Không <input type="checkbox" />
                      </td>
                      <td>
                        Có <input type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>3. Đang mắc bệnh cấp tính </td>
                      <td>
                        Không <input type="checkbox" />
                      </td>
                      <td>
                        Có <input type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>4. Phụ nữ mang thai *</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: 100 }}>
                        4a. Phụ nữ mang thai dưới 13 tuần
                      </td>
                      <td>
                        Không <input type="checkbox" />
                      </td>
                      <td>
                        Có <input type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: 100 }}>
                        4b. Phụ nữ mang thai trên 13 tuần{" "}
                      </td>
                      <td>
                        Không <input type="checkbox" />
                      </td>
                      <td>
                        Có <input type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        5. Phản vệ độ 3 trở lên với bất kỳ dị nguyên nào (Nếu
                        có, loại tác nhân dị ứng){" "}
                        <input
                          type="text"
                          placeholder="............................."
                        />{" "}
                      </td>
                      <td>
                        Không <input type="checkbox" />
                      </td>
                      <td>
                        Có <input type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        6. Đang bị suy giảm miễn dịch nặng, ung thư giai đoạn
                        cuối đang điều trị hóa trị, xạ trị
                      </td>
                      <td>
                        Không <input type="checkbox" />
                      </td>
                      <td>
                        Có <input type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>7. Tiền sử dị ứng với bất kỳ dị nguyên nào</td>
                      <td>
                        Không <input type="checkbox" />
                      </td>
                      <td>
                        Có <input type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>8. Tiền sử rối loạn đông máu/cầm máu</td>
                      <td>
                        Không <input type="checkbox" />
                      </td>
                      <td>
                        Có <input type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>9. Rối loạn tri giác, rối loạn hành vi </td>
                      <td>
                        Không <input type="checkbox" />
                      </td>
                      <td>
                        Có <input type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        10. Bất thường dấu hiệu sống (Nếu có, ghi rõ){" "}
                        <input
                          type="text"
                          placeholder="............................"
                        />
                        <br />
                        <ul>
                          <li>
                            Nhiệt độ:{" "}
                            <input
                              type="text"
                              placeholder="............................"
                            />{" "}
                            (Độ C)
                          </li>
                          <li>
                            Mạch:{" "}
                            <input
                              type="text"
                              placeholder="............................"
                            />
                            (Lần/phút)
                          </li>
                          <li>
                            Huyết áp:{" "}
                            <input
                              type="text"
                              placeholder="............................"
                            />{" "}
                            (mmHg)
                          </li>
                          <li>
                            Nhịp thở:{" "}
                            <input
                              type="text"
                              placeholder="............................"
                            />{" "}
                            (Lần/phút)
                          </li>
                        </ul>
                      </td>
                      <td>
                        Không <input type="checkbox" />
                      </td>
                      <td>
                        Có <input type="checkbox" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="form-conclude">
                <p>II. Kết luận: </p>
                <ul>
                  <li>
                    - Đủ điều kiện tiêm chủng ngay: Tất cả đều KHÔNG có điểm bất
                    thường □
                  </li>
                  <li>
                    - Chống chỉ định tiêm chủng vắc xin cùng loại: Khi CÓ bất
                    thường tại mục 1 □
                  </li>
                  <li>
                    - Trì hoãn tiêm chủng: Khi CÓ bất kỳ một điểm bất thường tại
                    các mục 2, 3, 4a □
                  </li>
                  <li>
                    - Chỉ định tiêm tại các cơ sở y tế có đủ điều kiện cấp cứu
                    phản vệ: Khi CÓ bất thường tại mục 5 □
                  </li>
                  <li>
                    - Nhóm thận trọng khi tiêm chủng: Khi CÓ bất kỳ một điểm bất
                    thường tại các mục 4b#, 6, 7, 8, 9,10. □
                  </li>
                  <li>
                    * Phụ nữ đang mang thai và cho con bú: Chống chỉ định với
                    vắc xin Sputnik V.
                  </li>
                  <li>
                    # Với phụ nữ mang thai ≥ 13 tuần: Giải thích lợi ích/nguy cơ
                    và ký cam kết nếu đồng ý tiêm và chuyển đến cơ sở có cấp cứu
                    sản khoa để tiêm.
                  </li>
                </ul>
                <div className="times">
                  <label htmlFor>Thời gian: </label>
                  <input type="text" placeholder="............" />
                  <label htmlFor>giờ </label>
                  <input type="text" placeholder="............" />
                  <label htmlFor>phút, ngày </label>
                  <input type="text" placeholder="............" />
                  <label htmlFor>tháng </label>
                  <input type="text" placeholder="............" />
                  <label htmlFor>năm 2022</label>
                  {/* <input type="text" placeholder="............"> */}
                </div>
              </div>
            </div>
            <div className="form-content_footer">
              <p>Lưu ý:</p>
              <ul>
                <li>
                  Việc đăng ký thông tin hoàn toàn bảo mật và phục vụ cho chiến
                  dịch tiêm chủng Vắc xin COVID - 19
                </li>
                <li>
                  Xin vui lòng kiểm tra kỹ các thông tin bắt buộc(VD: Họ và tên,
                  Ngày tháng năm sinh, Số điện thoại, CCCD/Mã định danh công
                  dân/HC ...)
                </li>
                <li>
                  Bằng việc nhấn nút "Xác nhận", bạn hoàn toàn hiểu và đồng ý
                  chịu trách nhiệm với các thông tin đã cung cấp.
                </li>
              </ul>
            </div>
            <div className="form-control">
              <a href>Hủy bỏ</a>
              <a href="./step-2.html">Tiếp tục &gt;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
