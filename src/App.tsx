import { Icon } from './components/atoms/Icon';
import { NavLink } from './components/atoms/NavLink';
import { Select } from './components/atoms/Select';

function App() {
  const options = [
    { value: 'moscow', label: 'Москва' },
    { value: 'st_pt', label: 'Санкт-Петербург' },
  ];

  return (
    <>
      <Icon name="claudy" />

      <div className="nav-link-container flex">
        <NavLink to="/">Главная</NavLink>

        <NavLink to="/weekly">Погода за неделю</NavLink>
      </div>
      <Select options={options} placeholder="Выберите город" />
    </>
  );
}

export default App;
