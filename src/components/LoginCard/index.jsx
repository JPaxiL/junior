import { Button } from '@components/Button';
import { InputText } from '@components/InputText';
import logo from '@images/logo.png';
import { Card } from '../Card';
import './LoginCard.css';

const LoginCard = () => {
  return (
    <div className="LoginCard">
      <Card>
        <div className="LoginCard__content">
          <img src={logo} alt="" />
          <span className="LoginCard__title">COTRINA EXPORTS E.I.R.L</span>
          <div className="LoginCard__form">
            <InputText placeholder="Usuario" />
            <InputText placeholder="Contraseña" />
            <Button>Iniciar sesión</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export { LoginCard };
