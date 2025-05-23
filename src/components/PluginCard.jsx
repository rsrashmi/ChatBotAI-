import {
  WiStrongWind,
  WiHumidity,
  WiBarometer,
  WiSunrise,
  WiSunset,
  WiDaySunny,
} from "react-icons/wi";
import { FaEye } from "react-icons/fa";
export default function PluginCard({ pluginName, data }) {
  switch (pluginName) {
    case "weather":
      return (
        <div className="bg-white p-4 rounded-lg shadow w-full max-w-md">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-xl">
                {data.location}, {data.country}
              </h3>
              <p className="text-gray-500">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${data.icon}@4x.png`}
              alt={data.description}
              className="w-20 h-20"
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-4">
              <span className="text-5xl font-bold">{data.temp}°C</span>
              <div>
                <p className="capitalize">{data.description}</p>
                <p>Feels like {data.feels_like}°C</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <WiStrongWind className="text-xl text-blue-500" />
                <span>{data.wind_speed} m/s</span>
              </div>
              <div className="flex items-center gap-2">
                <WiHumidity className="text-xl text-blue-400" />
                <span>{data.humidity}%</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEye className="text-blue-600" />
                <span>{data.visibility} km</span>
              </div>
              <div className="flex items-center gap-2">
                <WiBarometer className="text-xl text-purple-500" />
                <span>{data.pressure} hPa</span>
              </div>
            </div>

            <div className="flex justify-between mt-4 text-sm">
              <div className="flex items-center gap-2 text-amber-500">
                <WiSunrise className="text-xl text-yellow-800" />
                <span>{data.sunrise}</span>
              </div>
              <div className="flex items-center gap-2 text-amber-700">
                <WiSunset className="text-xl text-blue-900" />
                <span>{data.sunset}</span>
              </div>
            </div>
          </div>
        </div>
      );

    case "calc":
      return (
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Calculator Result</h3>
          <p className="text-xl">
            {data.expression} = <span className="font-bold">{data.result}</span>
          </p>
        </div>
      );

    case "define":
      return (
        <div className="bg-white p-4 rounded-lg shadow w-full max-w-md">
          <h3 className="font-bold text-lg mb-2">
            Definition of "{data.word}"
            {data.phonetic && (
              <span className="text-sm text-gray-500 ml-2">
                /{data.phonetic}/
              </span>
            )}
          </h3>

          {data.definitions.map((def, index) => (
            <div key={index} className="mb-3 pb-3 border-b last:border-b-0">
              <p className="font-semibold text-blue-600">{def.partOfSpeech}</p>
              <p className="mt-1">{def.definition}</p>
              {def.example && (
                <p className="text-sm italic mt-1 text-gray-600">
                  Example: "{def.example}"
                </p>
              )}
            </div>
          ))}
        </div>
      );

    default:
      return <div>Unknown plugin response</div>;
  }
}
