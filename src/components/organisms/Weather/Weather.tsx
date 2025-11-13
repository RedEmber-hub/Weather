import { WeatherHeader } from '@/components/molecules/WeatherHeader';
import './Weather.scss';

export default function Weather() {
  const options = [
    { value: 'moscow', label: 'Москва' },
    { value: 'st_pt', label: 'Санкт-Петербург' },
    { value: 'kazan', label: 'Казань' },
    { value: 'ufa', label: 'Уфа' },
  ];

  return <WeatherHeader options={options} />;
}
