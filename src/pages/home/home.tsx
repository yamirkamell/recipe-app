import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import axios from "axios";
import { setInitialState } from "../../redux/home/actions";
import '../../scss/pages/home.scss'
import FooterContent from "../../components/footer-content/footer-content";
import NavBar from "../../components/nav-bar/nav-bar";
import StartIcon from '../../assets/icons/ic_star.svg';
import FavoriteIcon from '../../assets/icons/ic-favorite.svg';
import { Details, MenuPrincipal } from './type';
import { InitialState } from "../../redux/home/types";

const Initial = () => {
  const dispatch = useDispatch();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      return axios
        .get('https://api.spoonacular.com/recipes/complexSearch/?apiKey=1f3ac3bfb1934f81aea82f1fae435dd0')
        .then((response) => {
          dispatch(setInitialState(response.data.results));
          setRecipes(response.data.results);
        })
    }
    fetchRecipes()
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <div className="container-home">
        <div className="container-img">
          <div className="container-font">
            <span className="span-title" > Recetas</span>
            <span className="span-subtitle"> para todos</span>
          </div>
        </div>
        <div className='container-menu-principal'>
          {MenuPrincipal?.map((item) => (
            <div className='container-item-menu' key={item.id}>
              <img src={item.img} alt={item.alt} />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <div className='container-new-recipes'>
          <div>
            <span className='span-new-recipes'> Nuevas Recetas</span>
          </div>
          <div className='container-slider-recipe'>
            {recipes?.map((item: InitialState) => (
              <div className='container-recipe' key={item.id}>
                <div className='container-all-recipe'>
                  <img src={item.image} alt="recipe-img" className='img-recipe' />
                  <div className='container-title-recipe'>
                    <span className='span-title-name'> {item.title}</span>
                  </div>
                  <div className='container-details-recipe'>
                    {Details?.map((item) => (
                      <div className='container-details-items' key={item.id}>
                        <img src={item.img} alt={item.alt} />
                        <span className='span-details-title'>{item.title}</span>
                        <span className='span-details-subtitle'>{item.subTitle}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='container-basic'>
                  <div>
                    <img src={StartIcon} alt="start-icon" className='icon-basic' />
                    <span className='span-points'>5.0</span>
                  </div>
                  <div>
                    <img src={FavoriteIcon} alt="favorite-icon" className='icon-basic' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <FooterContent />
      </div>
    </>
  );
};

export default Initial;
