import './InputText.css';

const InputText = ({ placeholder = '' }) => {
  return <input className="InputText" type="text" placeholder={placeholder} />;
};

export { InputText };
