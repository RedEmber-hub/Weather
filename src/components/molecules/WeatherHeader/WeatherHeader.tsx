import './WeatherHeader.scss';
import { Select } from '@/components/atoms/Select';
import { WeatherHeaderProps } from './WeatherHeader.type';
import { NavLink } from '@/components/atoms/NavLink';

export default function WeatherHeader({ options, selectedCity, onCityChange }: WeatherHeaderProps) {
  function getTodayDate() {
    const today = new Date();

    return today.toLocaleDateString('ru-RU', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });
  }

  return (
    <>
      <div className="weather__header flex">
        <div className="weather__navlink-container flex">
          <NavLink to="/">Главная</NavLink>

          <NavLink to="/weekly">Погода за неделю</NavLink>
        </div>

        <div className="weather__select">
          <Select options={options} value={selectedCity} onChange={onCityChange} placeholder="Выберите город" />
        </div>
      </div>

      <div className="weather__info flex flex_column gap-12">
        <div className="weather__title">
          <h1 className="heading heading--semibold text-color--white">Погода в городе {selectedCity.label}</h1>
        </div>

        <div className="weather__subtitle">
          <span className="heading-sm heading-sm--medium text-color--secondary">{getTodayDate()}</span>
        </div>
      </div>
    </>
  );
}
