import SearchInput from "./components/SearchInput";
import WeatherCard from "./components/WeatherCard";
import useWeatherStore from "./services/WeatherStore";
import LoadingSpinner from './components/LoadingSpinner';
import { getWeatherBackground, getWeatherAnimation } from './utils/weatherBackgrounds';
import { Moon, Sun } from 'lucide-react';

function App() {
  const { loading, currentWeather, darkMode, toggleDarkMode } = useWeatherStore()
  const getAppBackground = () => {
    if (darkMode && !currentWeather) {
      return 'bg-gray-900';
    } else if (currentWeather) {
      const weatherCondition = currentWeather?.current?.condition?.text || '';
      const isDay = currentWeather?.current?.is_day === 1;
      return getWeatherBackground(weatherCondition, isDay);
    } else {
      return 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600';
    }
  };
  const weatherCondition = currentWeather?.current?.condition?.text || '';
  const animationClass = getWeatherAnimation(weatherCondition);
  const backgroundClass = getAppBackground();

  return (
    <div className={`min-h-screen transition-all duration-1000 ${backgroundClass} ${animationClass}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8 relative">
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="absolute top-0 right-0 p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-200"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-white" />
            ) : (
              <Moon className="w-5 h-5 text-white" />
            )}
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            RWeather App
          </h1>
          <p className="text-blue-100 text-lg">
            Get current weather for any city worldwide
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-8">
          {/* Search Section */}
          <section>
            <SearchInput />
          </section>

          {/* Weather Display Section */}
          <section className="flex justify-center">
            {loading ? (
              <LoadingSpinner />
            ) : (
              <WeatherCard />
            )}
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center mt-12">
          <p className="text-blue-100 text-sm">
            By Michael Tawil
          </p>
        </footer>
      </div>
    </div>
  )
}
export default App