import React, { Component } from "react";

const Main = ({ data }) => {
  if (data.name) {
    return (
      <article>
        <section id="main">
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
            alt=""
          />
          <h1>{data.main.temp}ºC</h1>
          <h2>
            {data.name}, {data.sys.country}
          </h2>
          <h4>{data.weather[0].description}</h4>
        </section>
        <section id="temperature">
          <h3>Temperature</h3>
          <div className="temperature-info">
            <div>
              <h4>Min</h4>
              <p>{data.main.temp_min}</p>
            </div>
            <div>
              <h4>Max</h4>
              <p>{data.main.temp_max}</p>
            </div>

            <div>
              <h4>Feels like</h4>
              <p>{data.main.feels_like}</p>
            </div>
          </div>
        </section>
      </article>
    );
  } else
    return (
      <article>
        <p>Please enter a valid city</p>
      </article>
    );
};

export default Main;
