import { useSelector } from 'react-redux';
import { ItemNav } from '../ItemNav';
import './Nav.css';

const Nav = () => {
  const open = useSelector(state => state.ui.menuOpen);

  const items = [
    {
      label: 'Inicio',
      icon: 'home-outline',
      link: './'
    },
    {
      label: 'Proveedores',
      icon: 'storefront-outline',
      link: '#'
    },
    {
      label: 'Clientes',
      icon: 'person-outline',
      link: '#'
    },
    {
      label: 'Productos',
      icon: 'cube-outline',
      link: '#'
    }
  ];

  return (
    <nav className={`Nav ${open ? 'Nav--open' : ''}`}>
      <ul>
        {items.map(item => (
          <ItemNav key={item.label} active={item.link !== '#' ? true : false}>
            <ion-icon name={item.icon}></ion-icon> <span>{item.label}</span>
          </ItemNav>
        ))}
      </ul>
    </nav>
  );
};

export { Nav };
