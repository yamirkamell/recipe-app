import '../../scss/components/nav-bar.scss'

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
    </div>
  );
};

export default NavBar;
