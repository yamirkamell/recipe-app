import '../../scss/components/nav-bar.scss'
import HomeIcon from '../../assets/icons/ic_home.svg'

const NavBar = () => {
  return (
    <div className="container-header">
      <div className="logo-app">
        <span>Recipe<span className="span-app">App</span></span>
      </div>
      <div className="menu">
        <a id="home" href="/">Home</a>
        <span>Vegetarianos</span>
        <span>Platos Principales</span>
        <span>Tortas</span>
        <span>Comida Rápida</span>
        <span>Menú Niños</span>
        <span>Sopas</span>
      </div>
      <div className="menu-ipad">
        <img src={HomeIcon} alt='home-icon' />
      </div>
    </div>
  );
};

export default NavBar;
