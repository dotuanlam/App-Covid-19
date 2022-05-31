import React, { useState, useEffect } from "react";
import Loading from "../Loading/Index";
import './index.scss'

function Index() {
  const [global, setGlobal] = useState({
    newConfirmedGlobal: null,
    totalConfirmedGlobal: null,
    newDeathsGlobal: null,
    totalDeathsGlobal: null,
    newRecoveredGlobal: null,
    totalRecoveredGlobal: null,
    dateGlobal: null,
  });
  const getDataCovid19 = () => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => {
        res.json().then((res) => {
          const newConfirmedGlobal = res?.Global?.NewConfirmed;
          const toTalConfirmedGlobal = res?.Global?.TotalConfirmed;
          const newDeathsGlobal = res?.Global?.NewDeaths;
          const totalDeathsGlobal = res?.Global?.TotalDeaths;
          const newRecoveredGlobal = res?.Global?.NewRecovered;
          const totalRecoveredGlobal = res?.Global?.TotalRecovered;
          const dateGlobal = res?.Global?.Date;
          setGlobal({
            newConfirmedGlobal: newConfirmedGlobal,
            totalConfirmedGlobal: toTalConfirmedGlobal,
            newDeathsGlobal: newDeathsGlobal,
            totalDeathsGlobal: totalDeathsGlobal,
            newRecoveredGlobal: newRecoveredGlobal,
            totalRecoveredGlobal: totalRecoveredGlobal,
            dateGlobal: dateGlobal,
          });
        });
      })
      .catch((err) => {
        console.log("errors");
      });
  };
  useEffect(() => {
    getDataCovid19();
  }, []);
  useEffect(() => {
    const autoReloadDataCovid = setInterval(() => {
      getDataCovid19();
    }, 5000);
    return () => {
      clearInterval(autoReloadDataCovid);
    };
  }, []);
  return (
    <div className="container-global">
      <h2>Thông Tin Covid 19 Trên Toàn Thế Giới</h2>
      {global?.newConfirmedGlobal === null ? (
        <Loading />
      ) : (
        <ul>
          <li>Số ca nhiễm mới: {global?.newConfirmedGlobal}</li>
          <li>Tổng số ca nhiễm: {global?.totalConfirmedGlobal}</li>
          <li>Số ca tử vong mới: {global?.newDeathsGlobal}</li>
          <li>Tổng số ca tử vong: {global?.totalDeathsGlobal}</li>
          <li>Số ca chữa trị kịp mới: {global?.newRecoveredGlobal}</li>
          <li>Tổng số ca đã chữa chị: {global?.totalRecoveredGlobal}</li>
          <li>Ngày cập nhật: {global?.dateGlobal}</li>
        </ul>
      )}
    </div>
  );
}

export default Index;
