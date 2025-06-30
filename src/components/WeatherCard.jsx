import { Thermometer, Droplets, Wind, Eye } from 'lucide-react';
import useWeatherStore from '../services/WeatherStore'
import Button from './ui/Button';

const WeatherCard = () => {
    const { currentWeather, unit, toggleUnit, darkMode } = useWeatherStore()

    if (!currentWeather) return null

    const { location, current } = currentWeather
    const temperature = unit === 'celsius' ? current.temp_c : current.temp_f;
    const feelsLike = unit === 'celsius' ? current.feelslike_c : current.feelslike_f;
    const unitSymbol = unit === 'celsius' ? '°C' : '°F';
    const cardClasses = darkMode
        ? 'bg-gray-800 text-white border border-gray-700'
        : 'bg-white text-gray-800';

    const textClasses = darkMode
        ? 'text-gray-300'
        : 'text-gray-600';

    return (
        <div className={`rounded-xl shadow-lg p-6 w-full max-w-md mx-auto transition-colors duration-300 ${cardClasses}`}>
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h2 className={`text-2xl ${textClasses}`}>
                        {location.name}
                    </h2>
                    <p className={`text-sm ${textClasses}`}>
                        {location.region}, {location.country}
                    </p>
                </div>
                <Button
                    onClick={toggleUnit}
                    className={`text-xs px-3 py-1 ${darkMode
                            ? 'bg-gray-700 hover:bg-gray-600 text-white border-gray-600'
                            : 'bg-blue-500 hover:bg-blue-600 text-white-700 border-gray-300'
                        }`}
                >
                    °C / °F
                </Button>
            </div>

            {/* Main Weather */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <div className={`text-4xl ${textClasses}`}>
                        {Math.round(temperature)}{unitSymbol}
                    </div>
                    <p className={`capitalize ${textClasses}`}>
                        {current.condition.text}
                    </p>
                </div>
                <img
                    src={current.condition.icon}
                    alt={current.condition.text}
                    className="w-16 h-16"
                />
            </div>

            {/* Weather Details */}
            <div className="grid grid-cols-2 gap-4">
                <div className={`flex items-center gap-2 ${textClasses}`}>
                    <Thermometer className="w-4 h-4" />
                    <div>
                        <p className="text-xs text-gray-500">Feels like</p>
                        <p className="font-medium">{Math.round(feelsLike)}{unitSymbol}</p>
                    </div>
                </div>

                <div className={`flex items-center gap-2 ${textClasses}`}>
                    <Droplets className="w-4 h-4" />
                    <div>
                        <p className="text-xs text-gray-500">Humidity</p>
                        <p className="font-medium">{current.humidity}%</p>
                    </div>
                </div>

                <div className={`flex items-center gap-2 ${textClasses}`}>
                    <Wind className="w-4 h-4" />
                    <div>
                        <p className="text-xs text-gray-500">Wind</p>
                        <p className="font-medium">{current.wind_kph} km/h</p>
                    </div>
                </div>

                <div className={`flex items-center gap-2 ${textClasses}`}>
                    <Eye className="w-4 h-4" />
                    <div>
                        <p className="text-xs text-gray-500">Visibility</p>
                        <p className="font-medium">{current.vis_km} km</p>
                    </div>
                </div>
            </div>

            {/* Last Updated */}
            <div className={`mt-4 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <p className={`text-xs text-center opacity-75 ${textClasses}`}>
                    Last updated: {new Date(current.last_updated).toLocaleTimeString()}
                </p>
            </div>
        </div>
    )
}
export default WeatherCard