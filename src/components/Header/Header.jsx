import logo from "../../images/logo.svg";
import icon from "../../images/icon.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div>
          <img className="header__logo" alt="логотип" src={logo} />
        </div>
        <div className="header__container-text">
          <p className="header__text">About us</p>
          <p className="header__text">Brands</p>
          <p className="header__text">Commissions</p>
          <p className="header__text">News</p>
          <p className="header__text">Contact us</p>
          <p className="header__text">Careers</p>
        </div>
        <div className="headers__icons">
          <p className="header__icon">
            <img alt="переключение языка" src={icon} />
            EN
          </p>
          <p className="header__icon">LOG IN</p>
          <p className="header__icon">SIGN UP</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
