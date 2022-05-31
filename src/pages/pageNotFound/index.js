import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
function Index() {
  const navigate = useNavigate();
  const handleHomePageBack = () => {
    navigate("/");
  };
  return (
    <div className="page-not-found">
      <img
        alt="image-page-not-found"
        src="https://i.pinimg.com/564x/08/26/e2/0826e2d704ae93b5548bdf8bf9e0acbf.jpg"
      ></img>
      <h1 onClick={handleHomePageBack}>Quay lại trang chủ tại đây </h1>
    </div>
  );
}

export default Index;
