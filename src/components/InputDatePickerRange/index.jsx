import { useState } from 'react';
import { useClickOutside } from '@hooks/useClickOutside';
import { InputCalendar } from '@components/InputCalendar';
import './InputDatePickerRange.css';

const InputDatePickerRange = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toogleCalendar, setToogleCalendar] = useState('');

  const domDatePickerRange = useClickOutside(() => {
    setIsOpen(false);
    setToogleCalendar('');
  });

  const openBox = side => {
    !isOpen && setIsOpen(true);
    setToogleCalendar(!iniDate ? 'left' : side);
  };

  return (
    <div ref={domDatePickerRange} className="InputDatePickerRange">
      <span>De</span>
      <div
        className={`InputDatePickerRange__button ${
          toogleCalendar === 'left' && 'InputDatePickerRange__button--select'
        }`}
        onClick={() => openBox('left')}
      >
        <ion-icon name="calendar-clear-outline"></ion-icon>
        <span className="InputDatePickerRange__date">Fecha inicio</span>
      </div>
      <span>al</span>
      <div
        className={`InputDatePickerRange__button ${
          toogleCalendar === 'right' && 'InputDatePickerRange__button--select'
        }`}
        onClick={() => openBox('right')}
      >
        <ion-icon name="calendar-clear-outline"></ion-icon>
        <span className="InputDatePickerRange__date">Fecha final</span>
      </div>
      <div
        className={`InputDatePickerRange__picker ${
          isOpen && 'InputDatePickerRange__picker--active'
        }`}
      >
        <InputCalendar />
        <InputCalendar />
      </div>
    </div>
  );
};

export { InputDatePickerRange };
