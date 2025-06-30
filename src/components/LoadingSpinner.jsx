import useWeatherStore from "../services/WeatherStore";


const LoadingSpinner = () => {
  const { darkMode } = useWeatherStore();
  
  return (
    <div className="flex items-center justify-center">
      <div className={`rounded-xl shadow-lg p-8 w-full max-w-md mx-auto transition-colors duration-300 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-600'
      }`}>
        <div className="flex flex-col items-center">
          <div className={`animate-spin rounded-full h-12 w-12 border-b-2 mb-4 ${
            darkMode ? 'border-white' : 'border-blue-500'
          }`}></div>
          <p>Loading weather data...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;