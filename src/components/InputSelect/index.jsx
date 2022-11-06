import { useState } from 'react';
import { useClickOutside } from '@hooks/useClickOutside';
import './InputSelect.css';

const InputSelect = ({ status, setStatus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const domFilterSelect = useClickOutside(() => setIsOpen(false));

  const handleClickStatus = e => {
    setStatus(e.target.value);
    setIsOpen(false);
  };

  return (
    <div ref={domFilterSelect} className="InputSelect">
      <div
        className={`InputSelect__container ${
          isOpen ? 'InputSelect__container--active' : ''
        }`}
      >
        <div className="InputSelect__option">
          <input
            type="radio"
            className="InputSelect__radio"
            id={'1'}
            name={'status'}
            value={'1'}
            onClick={e => handleClickStatus(e)}
          />
          <label htmlFor="1">Activo</label>
        </div>
        <div className="InputSelect__option">
          <input
            type="radio"
            className="InputSelect__radio"
            id={'0'}
            name={'status'}
            value={'0'}
            onClick={e => handleClickStatus(e)}
          />
          <label htmlFor="0">Inactivo</label>
        </div>
      </div>
      <div className="InputSelect__selected" onClick={() => setIsOpen(!isOpen)}>
        {parseInt(status) === 1
          ? 'Activo'
          : parseInt(status) === 0
          ? 'Inactivo'
          : 'Estado'}
      </div>
    </div>
  );
};

export { InputSelect };
