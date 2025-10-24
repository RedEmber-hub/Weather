import { useState, useRef, useEffect } from 'react';
import './Select.scss';
import { SelectProps, SelectInterface } from './Select.type';
import classNames from 'classnames';
import { Icon } from '../Icon';

export default function Select({ options = [], placeholder = 'Выберите...' }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  // Выбранный элемент { value: 'moscow', label: 'Москва' }
  const [selected, setSelected] = useState<SelectInterface | null>(null);
  // получение ссылки на элемент
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const className = classNames({
    flex: true,
    select: true,
    'select--open': isOpen,
  });

  const iconClassName = classNames({
    select__icon: isOpen,
    'select__icon--rotated': !isOpen,
  });

  // Закрытие селекта при клике вне
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    // Удаление обработчика события после размонтирования компонента
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Выбор опции и закрытие селекта
  function handleSelect(option: SelectInterface) {
    setSelected(option);
    setIsOpen(false);
  }

  function toggleSelect() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={className} ref={dropdownRef}>
      <div className="select__selection flex" onClick={toggleSelect}>
        <div className="select__label">
          <span className="body body--medium text-color--white cursor-pointer">
            {/* selected = { value: 'moscow', label: 'Москва' } */}
            {selected ? selected.label : placeholder}
          </span>
        </div>

        <div className={iconClassName}>
          <Icon name="arrow" />
        </div>
      </div>

      {isOpen && (
        <ul className="select__list body body--medium text-color--white cursor-pointer">
          {options.map((option) => {
            const selectedOptionClassName = classNames({
              select__item: true,
              'select__item--selected': selected?.value === option.value,
            });

            return (
              <li key={option.value} className={selectedOptionClassName} onClick={() => handleSelect(option)}>
                {option.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
