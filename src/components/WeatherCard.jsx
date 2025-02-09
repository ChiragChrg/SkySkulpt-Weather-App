import { getWeatherIcon } from "../helpers/getWeatherIcon";

// eslint-disable-next-line react/prop-types
function WeatherCard({ date, min, max, code, onSelectWeather, isSelected }) {
  return (
    <button
      onClick={onSelectWeather}
      className={`bg-black/10 text-lg text-white rounded-lg shadow-xl py-3 px-6 transition-all hover:scale-105 hover:shadow-2xl animate-fade-in
      ${isSelected && "scale-105 shadow-2xl bg-cyan-500"}
      `}
    >
      <div className="py-2">{getWeatherIcon(code)}</div>
      <p>{date}</p>
      <p>
        {min}&deg; &mdash; <strong>{max}</strong>
        &deg;
      </p>
    </button>
  );
}

export default WeatherCard;
