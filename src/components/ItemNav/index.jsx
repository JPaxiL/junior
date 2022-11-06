import './ItemNav.css';

const ItemNav = ({ children, active }) => {
  return (
    <li className={`NavItem ${active ? 'NavItem--active' : ''}`}>
      <a href="#">{children}</a>
    </li>
  );
};

export { ItemNav };
