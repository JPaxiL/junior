import { InputSearch } from '@components/InputSearch';
import { InputSelect } from '@components/InputSelect';
import { InputDatePickerRange } from '@components/InputDatePickerRange';
import './Filter.css';

const Filter = () => {
  return (
    <div className="Filter">
      <InputSearch placeholder="Buscar..." />
      <InputSelect />
      <div className="Filter__preset">
        <button className="Filter__option Filter__option__active">Hoy</button>
        <button className="Filter__option">Ayer</button>
        <button className="Filter__option">Últimos 7 días</button>
        <button className="Filter__option">Últimos 30 días</button>
      </div>
      <InputDatePickerRange />
      <div className="Filter__button Filter__button--filter">
        <ion-icon name="filter-outline"></ion-icon>
      </div>
      <div className="Filter__button Filter__button--download">
        <ion-icon name="download-outline"></ion-icon>
      </div>
    </div>
  );
};

export { Filter };
