import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Index";
import "./index.scss";

const Index = () => {
  const params = useParams();
  const [countries, setCountries] = useState();

  const getDataCovid19 = () => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => {
        res.json().then((res) => {
          const countries = [];
          for (let i = 0; i < res?.Countries.length; i++) {
            if (res?.Countries[i].Country === params.name) {
              countries.push(res?.Countries[i]);
            }
          }
          setCountries(countries);
        });
      })
      .catch((err) => {
        console.log("errors");
      },[]);
  };
  useEffect(() => {
    getDataCovid19();
  }, []);
  useEffect(() => {
    const autoReloadDataCovidCountries = setInterval(() => {
      getDataCovid19();
    }, 5000);
    return () => {
      clearInterval(autoReloadDataCovidCountries);
    };
  }, []);

  return (
    <div className="container-countriesCovid">
      <h2>Thông Tin Covid 19 Tại: {params.name}</h2>
      {countries === undefined ? (
        <Loading />
      ) : (
        <ul>
          <li>
            Số ca nhiễm mới:{" "}
            {countries !== undefined ? countries[0]?.NewConfirmed : false}
          </li>
          <li>
            Tổng số ca nhiễm:{" "}
            {countries !== undefined ? countries[0]?.TotalConfirmed : false}
          </li>
          <li>
            Số ca tử vong mới:{" "}
            {countries !== undefined ? countries[0]?.NewDeaths : false}
          </li>
          <li>
            Tổng số ca tử vong:{" "}
            {countries !== undefined ? countries[0]?.TotalDeaths : false}
          </li>
          <li>
            Số ca chữa trị kịp mới:{" "}
            {countries !== undefined ? countries[0]?.NewRecovered : false}
          </li>
          <li>
            Tổng số ca đã chữa chị:{" "}
            {countries !== undefined ? countries[0]?.TotalRecovered : false}
          </li>
          <li>
            Ngày cập nhật:{" "}
            {countries !== undefined ? countries[0]?.Date : false}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Index;
