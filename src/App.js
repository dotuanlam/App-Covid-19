import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.scss";

function App() {
  const onLogin = () => {
    localStorage.setItem("Token", false);
  };
  return (
    <div className="App">
      <div className="App__container">
        <nav>
          <div className="App__container--btn-Global">
            <Link to="/global">
              <button>Toàn Thế Giới</button>
            </Link>
          </div>
          <div className="App__container--btn-Coutries">
            <Link to="/list-countries">
              <button> Chọn Quốc Gia </button>
            </Link>
          </div>
          <div className="App__container--btn-log-out">
            <Link to="/signin">
              <button onClick={onLogin}> Đăng xuất </button>
            </Link>
          </div>
          <div className="App__container--infor-covid19">
            <p>
              Bệnh Coronavirus 2019 (COVID-19) là một bệnh truyền nhiễm do vi
              rút gây ra, hội chứng hô hấp cấp tính nghiêm trọng coronavirus 2
              (SARS-CoV-2). Trường hợp đầu tiên được biết đến được xác định ở Vũ
              Hán, Trung Quốc, vào tháng 12 năm 2019. Bệnh lây lan trên toàn thế
              giới, dẫn đến đại dịch COVID-19. Nguồn:{" "}
              <a>https://en.wikipedia.org/wiki/COVID-19</a>
            </p>
            <p>
              Các Loại Vaccines đã chế tạo thành công: Abdala vaccine,BioNTech,
              Pfizer vaccine,Covaxin vaccine,Johnson & Johnson
              vaccinates,Moderna vaccine,Oxford, AstraZeneca vaccine,Sinopharm
              BBIBP vaccine,Sputnik V vaccinates.
            </p>
          </div>
          <Outlet />
        </nav>
      </div>
    </div>
  );
}

export default App;
