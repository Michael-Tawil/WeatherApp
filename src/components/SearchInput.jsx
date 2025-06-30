import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import Button from './ui/Button'
import Input from './ui/Input'
import useWeatherStrore from '../services/WeatherStore'

const SearchInput = () => {
    const [city, setCity] = useState('')
    const { loading, error, getCurrentWeather, searchHistory, clearError, darkMode } = useWeatherStrore()

    const handleSearch = (searchCity = city) => {
        if (!searchCity.trim()) return;

        clearError()
        getCurrentWeather(searchCity.trim())
        setCity('')
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <div className="w-full max-w-md mx-auto">
            {/* Search Input */}
            <div className="flex gap-2 mb-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                        placeholder="Enter city name..."
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="pl-10"
                        disabled={loading}
                    />
                </div>
                <Button
                    onClick={() => handleSearch()}
                    disabled={loading || !city.trim()}
                >
                    {loading ? 'Searching...' : 'Search'}
                </Button>
            </div>

            {/* Error Message */}
            {error && (
                <div className={`px-4 py-3 rounded-lg mb-4 ${
    darkMode 
      ? 'bg-red-900/50 border border-red-700 text-red-300' 
      : 'bg-red-50 border border-red-200 text-red-700'
  }`}>
                    <p className="text-sm">{error}</p>
                </div>
            )}

            {/* Search History */}
            {searchHistory.length > 0 && (
                <div>
                    <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Recent searches:</p>
                    <div className="flex flex-wrap gap-2">
                        {searchHistory.map((historyCity, index) => (
                            <button
                                key={index}
                                onClick={() => handleSearch(historyCity)}
                                className={`flex items-center gap-1 px-3 py-1 text-sm rounded-full transition-colors duration-200 ${
  darkMode
    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
}`}
                                disabled={loading}
                            >
                                <MapPin className="w-3 h-3" />
                                {historyCity}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
export default SearchInput