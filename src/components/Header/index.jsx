import { useDispatch } from 'react-redux';
import { menuToggle } from '../../store/slices/uiSlice';
import logo from '@images/logo_1.png';
import user from '@images/user.jpg';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(menuToggle());
  };

  return (
    <header className="Header">
      <div>
        <button className="Header__button" onClick={handleToggle}>
          <ion-icon name="menu-outline"></ion-icon>
        </button>
        <img className="Header__logo" src={logo} alt="" />
      </div>
      <div>
        <img className="Header__user" src={user} alt="" />
      </div>
    </header>
  );
};

export { Header };
