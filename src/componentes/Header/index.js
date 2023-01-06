import React, {useContext} from 'react';
import Logo from "../../img/img/Iconos/Logo.png";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider"

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito

    const toogleMenu = () => {
      setMenu(!menu)
    }

  return (
    <header>
      <Link to="/">
        <div className='logo'>
          <img src={Logo} alt="logo"/>
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/"> home </Link>
        </li>
        <li>
          <Link to="/productos"> shop </Link>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className='item__total'>{carrito.length}</span>
      </div>
    </header>
  )
}
