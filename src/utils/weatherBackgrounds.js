export const getWeatherBackground = (condition, isDay = true) => {
    const weatherCondition = condition?.toLowerCase() || '';

    const backgrounds = {
        // Sunny/Clear
        sunny: isDay
            ? 'bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500'
            : 'bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800',

        clear: isDay
            ? 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600'
            : 'bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800',

        // Cloudy
        cloudy: 'bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600',
        overcast: 'bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700',
        'partly cloudy': isDay
            ? 'bg-gradient-to-br from-blue-300 via-white to-gray-300'
            : 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900',

        // Rainy
        rain: 'bg-gradient-to-br from-gray-600 via-blue-700 to-gray-800',
        'light rain': 'bg-gradient-to-br from-gray-500 via-blue-600 to-gray-700',
        'heavy rain': 'bg-gradient-to-br from-gray-700 via-blue-800 to-gray-900',
        drizzle: 'bg-gradient-to-br from-gray-400 via-blue-500 to-gray-600',

        // Snow
        snow: 'bg-gradient-to-br from-gray-100 via-blue-100 to-gray-200',
        'light snow': 'bg-gradient-to-br from-white via-blue-50 to-gray-100',
        blizzard: 'bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500',

        // Thunderstorm
        thunderstorm: 'bg-gradient-to-br from-gray-800 via-purple-900 to-gray-900',
        thunder: 'bg-gradient-to-br from-gray-800 via-purple-900 to-gray-900',

        // Fog/Mist
        fog: 'bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500',
        mist: 'bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400'
    };

    // Find matching background
    for (const [key, background] of Object.entries(backgrounds)) {
        if (weatherCondition.includes(key)) {
            return background;
        }
    }

    // Default background
    return 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600';
};

export const getWeatherAnimation = (condition) => {
    const weatherCondition = condition?.toLowerCase() || '';

    if (weatherCondition.includes('rain') || weatherCondition.includes('drizzle')) {
        return 'animate-pulse';
    }
    if (weatherCondition.includes('snow')) {
        return 'animate-bounce';
    }
    if (weatherCondition.includes('thunder')) {
        return 'animate-pulse';
    }

    return '';
};