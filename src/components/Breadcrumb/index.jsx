import './Breadcrumb.css';

const Breadcrumb = ({ list }) => {
  return (
    <div className="Breadcrumb">
      {list.map((item, i) => (
        <div
          key={item.label}
          className={`Breadcrumb__item ${
            i === list.length - 1 ? 'Breadcrumb__item--disabled' : ''
          }`}
        >
          <a href="#" className="Breadcrumb__link">
            {item.label}
          </a>
        </div>
      ))}
    </div>
  );
};

export { Breadcrumb };
