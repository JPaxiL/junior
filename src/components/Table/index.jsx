import './Table.css';
import user from '../../assets/images/user.jpg';

const Table = () => {
  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">
              <span>
                Nombre y apellido{' '}
                <ion-icon name="caret-down-outline"></ion-icon>
              </span>
            </th>
            <th scope="col">
              <span>
                Correo electrónico{' '}
                <ion-icon name="caret-down-outline"></ion-icon>
              </span>
            </th>
            <th scope="col">
              <span>
                Número de contacto{' '}
                <ion-icon name="caret-down-outline"></ion-icon>
              </span>
            </th>
            <th scope="col">
              <span>
                Empresa <ion-icon name="caret-down-outline"></ion-icon>
              </span>
            </th>
            <th scope="col">
              <span>
                Cargo <ion-icon name="caret-down-outline"></ion-icon>
              </span>
            </th>
            <th scope="col">
              <span>
                Producto <ion-icon name="caret-down-outline"></ion-icon>
              </span>
            </th>
            <th scope="col">
              <span>
                Estado <ion-icon name="caret-down-outline"></ion-icon>
              </span>
            </th>
            <th scope="col">
              <span>
                Fecha de actualización{' '}
                <ion-icon name="caret-down-outline"></ion-icon>
              </span>
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="Table__image">
              <img src={user} />
            </td>
            <td className="Table__strong">
              <span>Carlos Junior Ramos Vásquez</span>
            </td>
            <td>
              <span>juniorencode@outlook.com</span>
            </td>
            <td className="Table__phone">
              <span>
                <span>+51 922 014 929</span>
              </span>
            </td>
            <td className="Table__link">
              <span>
                <a href="#">COTRINA EXPORTS E.I.R.L.</a>
              </span>
            </td>
            <td>
              <span>Practicante</span>
            </td>
            <td>
              <span>ACEITUNA / SEVILLANA</span>
            </td>
            <td className="Table__status Table__status--active">
              <span>
                <span>Activo</span>
              </span>
            </td>
            <td className="Table__date">
              <span>
                <span>Septiembre 27, 2021</span>
                <span>02:30 PM</span>
              </span>
            </td>
            <td>
              <span className="Table__buttons">
                <button className="Table__button">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </span>
            </td>
          </tr>
          <tr>
            <td className="Table__image">
              <img src={user} />
            </td>
            <td className="Table__strong">
              <span>Carlos Junior Ramos Vásquez</span>
            </td>
            <td>
              <span>juniorencode@outlook.com</span>
            </td>
            <td className="Table__phone">
              <span>
                <span>+51 922 014 929</span>
                <span>+51 987 654 321</span>
              </span>
            </td>
            <td className="Table__link">
              <span>
                <a href="#">COTRINA EXPORTS E.I.R.L.</a>
              </span>
            </td>
            <td>
              <span>Practicante</span>
            </td>
            <td>
              <span>ACEITUNA / SEVILLANA</span>
            </td>
            <td className="Table__status Table__status--inactive">
              <span>
                <span>Inactivo</span>
              </span>
            </td>
            <td className="Table__date">
              <span>
                <span>Septiembre 27, 2021</span>
                <span>02:30 PM</span>
              </span>
            </td>
            <td>
              <span className="Table__buttons">
                <button className="Table__button">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </span>
            </td>
          </tr>
          <tr>
            <td className="Table__image">
              <img src={user} />
            </td>
            <td className="Table__strong">
              <span>Carlos Junior Ramos Vásquez</span>
            </td>
            <td>
              <span>juniorencode@outlook.com</span>
            </td>
            <td className="Table__phone">
              <span>
                <span>+51 922 014 929</span>
              </span>
            </td>
            <td className="Table__link">
              <span>
                <a href="#">COTRINA EXPORTS E.I.R.L.</a>
              </span>
            </td>
            <td>
              <span>Practicante</span>
            </td>
            <td>
              <span>ACEITUNA / SEVILLANA</span>
            </td>
            <td className="Table__status Table__status--active">
              <span>
                <span>Activo</span>
              </span>
            </td>
            <td className="Table__date">
              <span>
                <span>Septiembre 27, 2021</span>
                <span>02:30 PM</span>
              </span>
            </td>
            <td>
              <span className="Table__buttons">
                <button className="Table__button">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </span>
            </td>
          </tr>
          <tr>
            <td className="Table__image">
              <img src={user} />
            </td>
            <td className="Table__strong">
              <span>Carlos Junior Ramos Vásquez</span>
            </td>
            <td>
              <span>juniorencode@outlook.com</span>
            </td>
            <td className="Table__phone">
              <span>
                <span>+51 922 014 929</span>
              </span>
            </td>
            <td className="Table__link">
              <span>
                <a href="#">COTRINA EXPORTS E.I.R.L.</a>
              </span>
            </td>
            <td>
              <span>Practicante</span>
            </td>
            <td>
              <span>ACEITUNA / SEVILLANA</span>
            </td>
            <td className="Table__status Table__status--active">
              <span>
                <span>Activo</span>
              </span>
            </td>
            <td className="Table__date">
              <span>
                <span>Septiembre 27, 2021</span>
                <span>02:30 PM</span>
              </span>
            </td>
            <td>
              <span className="Table__buttons">
                <button className="Table__button">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </span>
            </td>
          </tr>
          <tr>
            <td className="Table__image">
              <img src={user} />
            </td>
            <td className="Table__strong">
              <span>Carlos Junior Ramos Vásquez</span>
            </td>
            <td>
              <span>juniorencode@outlook.com</span>
            </td>
            <td className="Table__phone">
              <span>
                <span>+51 922 014 929</span>
                <span>+51 987 654 321</span>
              </span>
            </td>
            <td className="Table__link">
              <span>
                <a href="#">COTRINA EXPORTS E.I.R.L.</a>
              </span>
            </td>
            <td>
              <span>Practicante</span>
            </td>
            <td>
              <span>ACEITUNA / SEVILLANA</span>
            </td>
            <td className="Table__status Table__status--active">
              <span>
                <span>Activo</span>
              </span>
            </td>
            <td className="Table__date">
              <span>
                <span>Septiembre 27, 2021</span>
                <span>02:30 PM</span>
              </span>
            </td>
            <td>
              <span className="Table__buttons">
                <button className="Table__button">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </span>
            </td>
          </tr>
          <tr>
            <td className="Table__image">
              <img src={user} />
            </td>
            <td className="Table__strong">
              <span>Carlos Junior Ramos Vásquez</span>
            </td>
            <td>
              <span>juniorencode@outlook.com</span>
            </td>
            <td className="Table__phone">
              <span>
                <span>+51 922 014 929</span>
              </span>
            </td>
            <td className="Table__link">
              <span>
                <a href="#">COTRINA EXPORTS E.I.R.L.</a>
              </span>
            </td>
            <td>
              <span>Practicante</span>
            </td>
            <td>
              <span>ACEITUNA / SEVILLANA</span>
            </td>
            <td className="Table__status Table__status--active">
              <span>
                <span>Activo</span>
              </span>
            </td>
            <td className="Table__date">
              <span>
                <span>Septiembre 27, 2021</span>
                <span>02:30 PM</span>
              </span>
            </td>
            <td>
              <span className="Table__buttons">
                <button className="Table__button">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </span>
            </td>
          </tr>
          <tr>
            <td className="Table__image">
              <img src={user} />
            </td>
            <td className="Table__strong">
              <span>Carlos Junior Ramos Vásquez</span>
            </td>
            <td>
              <span>juniorencode@outlook.com</span>
            </td>
            <td className="Table__phone">
              <span>
                <span>+51 922 014 929</span>
              </span>
            </td>
            <td className="Table__link">
              <span>
                <a href="#">COTRINA EXPORTS E.I.R.L.</a>
              </span>
            </td>
            <td>
              <span>Practicante</span>
            </td>
            <td>
              <span>ACEITUNA / SEVILLANA</span>
            </td>
            <td className="Table__status Table__status--active">
              <span>
                <span>Activo</span>
              </span>
            </td>
            <td className="Table__date">
              <span>
                <span>Septiembre 27, 2021</span>
                <span>02:30 PM</span>
              </span>
            </td>
            <td>
              <span className="Table__buttons">
                <button className="Table__button">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </span>
            </td>
          </tr>
          <tr>
            <td className="Table__image">
              <img src={user} />
            </td>
            <td className="Table__strong">
              <span>Carlos Junior Ramos Vásquez</span>
            </td>
            <td>
              <span>juniorencode@outlook.com</span>
            </td>
            <td className="Table__phone">
              <span>
                <span>+51 922 014 929</span>
                <span>+51 987 654 321</span>
              </span>
            </td>
            <td className="Table__link">
              <span>
                <a href="#">COTRINA EXPORTS E.I.R.L.</a>
              </span>
            </td>
            <td>
              <span>Practicante</span>
            </td>
            <td>
              <span>ACEITUNA / SEVILLANA</span>
            </td>
            <td className="Table__status Table__status--active">
              <span>
                <span>Activo</span>
              </span>
            </td>
            <td className="Table__date">
              <span>
                <span>Septiembre 27, 2021</span>
                <span>02:30 PM</span>
              </span>
            </td>
            <td>
              <span className="Table__buttons">
                <button className="Table__button">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </span>
            </td>
          </tr>
          <tr>
            <td className="Table__image">
              <img src={user} />
            </td>
            <td className="Table__strong">
              <span>Carlos Junior Ramos Vásquez</span>
            </td>
            <td>
              <span>juniorencode@outlook.com</span>
            </td>
            <td className="Table__phone">
              <span>
                <span>+51 922 014 929</span>
              </span>
            </td>
            <td className="Table__link">
              <span>
                <a href="#">COTRINA EXPORTS E.I.R.L.</a>
              </span>
            </td>
            <td>
              <span>Practicante</span>
            </td>
            <td>
              <span>ACEITUNA / SEVILLANA</span>
            </td>
            <td className="Table__status Table__status--active">
              <span>
                <span>Activo</span>
              </span>
            </td>
            <td className="Table__date">
              <span>
                <span>Septiembre 27, 2021</span>
                <span>02:30 PM</span>
              </span>
            </td>
            <td>
              <span className="Table__buttons">
                <button className="Table__button">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </span>
            </td>
          </tr>
          <tr>
            <td className="Table__image">
              <img src={user} />
            </td>
            <td className="Table__strong">
              <span>Carlos Junior Ramos Vásquez</span>
            </td>
            <td>
              <span>juniorencode@outlook.com</span>
            </td>
            <td className="Table__phone">
              <span>
                <span>+51 922 014 929</span>
              </span>
            </td>
            <td className="Table__link">
              <span>
                <a href="#">COTRINA EXPORTS E.I.R.L.</a>
              </span>
            </td>
            <td>
              <span>Practicante</span>
            </td>
            <td>
              <span>ACEITUNA / SEVILLANA</span>
            </td>
            <td className="Table__status Table__status--active">
              <span>
                <span>Activo</span>
              </span>
            </td>
            <td className="Table__date">
              <span>
                <span>Septiembre 27, 2021</span>
                <span>02:30 PM</span>
              </span>
            </td>
            <td>
              <span className="Table__buttons">
                <button className="Table__button">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </span>
            </td>
          </tr>
          <tr>
            <td className="Table__image">
              <img src={user} />
            </td>
            <td className="Table__strong">
              <span>Carlos Junior Ramos Vásquez</span>
            </td>
            <td>
              <span>juniorencode@outlook.com</span>
            </td>
            <td className="Table__phone">
              <span>
                <span>+51 922 014 929</span>
              </span>
            </td>
            <td className="Table__link">
              <span>
                <a href="#">COTRINA EXPORTS E.I.R.L.</a>
              </span>
            </td>
            <td>
              <span>Practicante</span>
            </td>
            <td>
              <span>ACEITUNA / SEVILLANA</span>
            </td>
            <td className="Table__status Table__status--active">
              <span>
                <span>Activo</span>
              </span>
            </td>
            <td className="Table__date">
              <span>
                <span>Septiembre 27, 2021</span>
                <span>02:30 PM</span>
              </span>
            </td>
            <td>
              <span className="Table__buttons">
                <button className="Table__button">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </span>
            </td>
          </tr>
          <tr>
            <td className="Table__image">
              <img src={user} />
            </td>
            <td className="Table__strong">
              <span>Carlos Junior Ramos Vásquez</span>
            </td>
            <td>
              <span>juniorencode@outlook.com</span>
            </td>
            <td className="Table__phone">
              <span>
                <span>+51 922 014 929</span>
                <span>+51 987 654 321</span>
              </span>
            </td>
            <td className="Table__link">
              <span>
                <a href="#">COTRINA EXPORTS E.I.R.L.</a>
              </span>
            </td>
            <td>
              <span>Practicante</span>
            </td>
            <td>
              <span>ACEITUNA / SEVILLANA</span>
            </td>
            <td className="Table__status Table__status--active">
              <span>
                <span>Activo</span>
              </span>
            </td>
            <td className="Table__date">
              <span>
                <span>Septiembre 27, 2021</span>
                <span>02:30 PM</span>
              </span>
            </td>
            <td>
              <span className="Table__buttons">
                <button className="Table__button">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </span>
            </td>
          </tr>
          <tr>
            <td className="Table__image">
              <img src={user} />
            </td>
            <td className="Table__strong">
              <span>Carlos Junior Ramos Vásquez</span>
            </td>
            <td>
              <span>juniorencode@outlook.com</span>
            </td>
            <td className="Table__phone">
              <span>
                <span>+51 922 014 929</span>
              </span>
            </td>
            <td className="Table__link">
              <span>
                <a href="#">COTRINA EXPORTS E.I.R.L.</a>
              </span>
            </td>
            <td>
              <span>Practicante</span>
            </td>
            <td>
              <span>ACEITUNA / SEVILLANA</span>
            </td>
            <td className="Table__status Table__status--active">
              <span>
                <span>Activo</span>
              </span>
            </td>
            <td className="Table__date">
              <span>
                <span>Septiembre 27, 2021</span>
                <span>02:30 PM</span>
              </span>
            </td>
            <td>
              <span className="Table__buttons">
                <button className="Table__button">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </span>
            </td>
          </tr>
          <tr>
            <td className="Table__image">
              <img src={user} />
            </td>
            <td className="Table__strong">
              <span>Carlos Junior Ramos Vásquez</span>
            </td>
            <td>
              <span>juniorencode@outlook.com</span>
            </td>
            <td className="Table__phone">
              <span>
                <span>+51 922 014 929</span>
              </span>
            </td>
            <td className="Table__link">
              <span>
                <a href="#">COTRINA EXPORTS E.I.R.L.</a>
              </span>
            </td>
            <td>
              <span>Practicante</span>
            </td>
            <td>
              <span>ACEITUNA / SEVILLANA</span>
            </td>
            <td className="Table__status Table__status--active">
              <span>
                <span>Activo</span>
              </span>
            </td>
            <td className="Table__date">
              <span>
                <span>Septiembre 27, 2021</span>
                <span>02:30 PM</span>
              </span>
            </td>
            <td>
              <span className="Table__buttons">
                <button className="Table__button">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </span>
            </td>
          </tr>
          <tr>
            <td className="Table__image">
              <img src={user} />
            </td>
            <td className="Table__strong">
              <span>Carlos Junior Ramos Vásquez</span>
            </td>
            <td>
              <span>juniorencode@outlook.com</span>
            </td>
            <td className="Table__phone">
              <span>
                <span>+51 922 014 929</span>
                <span>+51 987 654 321</span>
                <span>+51 987 654 321</span>
              </span>
            </td>
            <td className="Table__link">
              <span>
                <a href="#">COTRINA EXPORTS E.I.R.L.</a>
              </span>
            </td>
            <td>
              <span>Practicante</span>
            </td>
            <td>
              <span>ACEITUNA / SEVILLANA</span>
            </td>
            <td className="Table__status Table__status--active">
              <span>
                <span>Activo</span>
              </span>
            </td>
            <td className="Table__date">
              <span>
                <span>Septiembre 27, 2021</span>
                <span>02:30 PM</span>
              </span>
            </td>
            <td>
              <span className="Table__buttons">
                <button className="Table__button">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </span>
            </td>
          </tr>
          <tr>
            <td className="Table__image">
              <img src={user} />
            </td>
            <td className="Table__strong">
              <span>Carlos Junior Ramos Vásquez</span>
            </td>
            <td>
              <span>juniorencode@outlook.com</span>
            </td>
            <td className="Table__phone">
              <span>
                <span>+51 922 014 929</span>
              </span>
            </td>
            <td className="Table__link">
              <span>
                <a href="#">COTRINA EXPORTS E.I.R.L.</a>
              </span>
            </td>
            <td>
              <span>Practicante</span>
            </td>
            <td>
              <span>ACEITUNA / SEVILLANA</span>
            </td>
            <td className="Table__status Table__status--active">
              <span>
                <span>Activo</span>
              </span>
            </td>
            <td className="Table__date">
              <span>
                <span>Septiembre 27, 2021</span>
                <span>02:30 PM</span>
              </span>
            </td>
            <td>
              <span className="Table__buttons">
                <button className="Table__button">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </span>
            </td>
          </tr>
          <tr>
            <td className="Table__image">
              <img src={user} />
            </td>
            <td className="Table__strong">
              <span>Carlos Junior Ramos Vásquez</span>
            </td>
            <td>
              <span>juniorencode@outlook.com</span>
            </td>
            <td className="Table__phone">
              <span>
                <span>+51 922 014 929</span>
              </span>
            </td>
            <td className="Table__link">
              <span>
                <a href="#">COTRINA EXPORTS E.I.R.L.</a>
              </span>
            </td>
            <td>
              <span>Practicante</span>
            </td>
            <td>
              <span>ACEITUNA / SEVILLANA</span>
            </td>
            <td className="Table__status Table__status--active">
              <span>
                <span>Activo</span>
              </span>
            </td>
            <td className="Table__date">
              <span>
                <span>Septiembre 27, 2021</span>
                <span>02:30 PM</span>
              </span>
            </td>
            <td>
              <span className="Table__buttons">
                <button className="Table__button">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </span>
            </td>
          </tr>
          <tr>
            <td className="Table__image">
              <img src={user} />
            </td>
            <td className="Table__strong">
              <span>Carlos Junior Ramos Vásquez</span>
            </td>
            <td>
              <span>juniorencode@outlook.com</span>
            </td>
            <td className="Table__phone">
              <span>
                <span>+51 922 014 929</span>
              </span>
            </td>
            <td className="Table__link">
              <span>
                <a href="#">COTRINA EXPORTS E.I.R.L.</a>
              </span>
            </td>
            <td>
              <span>Practicante</span>
            </td>
            <td>
              <span>ACEITUNA / SEVILLANA</span>
            </td>
            <td className="Table__status Table__status--active">
              <span>
                <span>Activo</span>
              </span>
            </td>
            <td className="Table__date">
              <span>
                <span>Septiembre 27, 2021</span>
                <span>02:30 PM</span>
              </span>
            </td>
            <td>
              <span className="Table__buttons">
                <button className="Table__button">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </span>
            </td>
          </tr>
          <tr>
            <td className="Table__image">
              <img src={user} />
            </td>
            <td className="Table__strong">
              <span>Carlos Junior Ramos Vásquez</span>
            </td>
            <td>
              <span>juniorencode@outlook.com</span>
            </td>
            <td className="Table__phone">
              <span>
                <span>+51 922 014 929</span>
              </span>
            </td>
            <td className="Table__link">
              <span>
                <a href="#">COTRINA EXPORTS E.I.R.L.</a>
              </span>
            </td>
            <td>
              <span>Practicante</span>
            </td>
            <td>
              <span>ACEITUNA / SEVILLANA</span>
            </td>
            <td className="Table__status Table__status--active">
              <span>
                <span>Activo</span>
              </span>
            </td>
            <td className="Table__date">
              <span>
                <span>Septiembre 27, 2021</span>
                <span>02:30 PM</span>
              </span>
            </td>
            <td>
              <span className="Table__buttons">
                <button className="Table__button">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="create-outline"></ion-icon>
                </button>
                <button className="Table__button">
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { Table };
