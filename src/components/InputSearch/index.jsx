import './InputSearch.css';

const InputSearch = ({ placeholder }) => {
  return (
    <div className="InputSearch">
      <ion-icon name="search-outline"></ion-icon>
      <input
        className="InputSearch__input"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export { InputSearch };
