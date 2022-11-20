import "./current-weather.css";

const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].main}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <div className="parameter-label">Feels Like</div>
            <div className="parameter-value">{Math.round(data.main.feels_like)}°C</div>
          </div>
          <div className="parameter-row">
            <div className="parameter-label">Wind</div>
            <div className="parameter-value">{data.wind.speed} m/s</div>
          </div>
          <div className="parameter-row">
            <div className="parameter-label">Humidity</div>
            <div className="parameter-value">{data.main.humidity} hPa</div>
          </div>
          <div className="parameter-row">
            <div className="parameter-label">Pressure</div>
            <div className="parameter-value">{data.main.pressure} hPa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
