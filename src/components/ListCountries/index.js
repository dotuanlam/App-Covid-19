import React, { useState, useEffect } from "react";
import Loading from "../Loading/Index";
import { Link } from "react-router-dom";
import "./index.scss";

const Index = () => {
  const [listCountriesName, setListCountriesName] = useState([]);
  console.log(
    "🚀 ~ file: index.js ~ line 7 ~ Index ~ listCountriesName",
    listCountriesName
  );
  const getDataCovid19 = () => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => {
        res.json().then((res) => {
          const arrName = [];
          for (let i = 0; i < res.Countries.length; i++) {
            arrName.push(res.Countries[i].Country);
          }
          setListCountriesName(arrName);
        });
      })
      .catch((err) => {
        console.log("errors");
      });
  };
  useEffect(() => {
    getDataCovid19();
  }, []);

  return (
    <div className="container-list-countries">
      {listCountriesName.length === 0 ? (
        <Loading />
      ) : (
        listCountriesName.map((name, index) => (
          <div className="container-list-countries__country" key={index}>
            <Link to={name}>
              <button>{name}</button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Index;
