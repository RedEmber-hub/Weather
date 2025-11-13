import './WeatherHeader.scss';
import { Select } from '@/components/atoms/Select';
import { WeatherHeaderProps } from './WeatherHeader.type';
import { NavLink } from '@/components/atoms/NavLink';

export default function WeatherHeader({ options }: WeatherHeaderProps) {
  return (
    <div className="weather__header flex">
      <div className="weather__navlink-container flex">
        <NavLink to="/">Главная</NavLink>

        <NavLink to="/weekly">Погода за неделю</NavLink>
      </div>

      <div className="weather__select">
        <Select options={options} placeholder="Выберите город" />
      </div>
    </div>
  );
}
