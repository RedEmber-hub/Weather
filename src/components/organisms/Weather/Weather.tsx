import { WeatherHeader } from '@/components/molecules/WeatherHeader';
import './Weather.scss';
import { useState } from 'react';

export default function Weather() {
  const options = [
    { value: 'moscow', label: 'Москва' },
    { value: 'st_pt', label: 'Санкт-Петербург' },
    { value: 'kazan', label: 'Казань' },
    { value: 'ufa', label: 'Уфа' },
  ];

  const [selectedCity, setSelectedCity] = useState(options[0]);

  return <WeatherHeader options={options} selectedCity={selectedCity} onCityChange={setSelectedCity} />;
}
