/*import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import axios from "axios";
import { setInitialState } from "../../redux/home/actions";*/
import '../../scss/pages/home.scss'
import FooterContent from "../../components/footer-content/footer-content";
import NavBar from "../../components/nav-bar/nav-bar";
import StartIcon from '../../assets/icons/ic_star.svg';
import FavoriteIcon from '../../assets/icons/ic-favorite.svg';
import PortionIcon from '../../assets/icons/ic_portion.svg';
import TimeIcon from '../../assets/icons/ic_time.svg';
import ChefIcon from '../../assets/icons/ic_chef.svg';
import RecipeIcon from '../../assets/food.png';

const details = [
  {
    "id": 1,
    "img": PortionIcon,
    "alt": 'portion-icon',
    "title": 'Tamaño de la porción',
    "subTitle": '4 raciones'
  },
  {
    "id": 2,
    "img": TimeIcon,
    "alt": 'time-icon',
    "title": 'Tiempo de preparación',
    "subTitle": '10 minutos'
  },
  {
    "id": 3,
    "img": ChefIcon,
    "alt": 'portion-icon',
    "title": 'Dificultad',
    "subTitle": 'fácil'
  }
];

const Initial = () => {
  /*const dispatch = useDispatch();

  useEffect(() => {
    const fetchRecipes = async () => {
      return axios
        .get('https://api.spoonacular.com/recipes/complexSearch/?apiKey=1f3ac3bfb1934f81aea82f1fae435dd0')
        .then((response) => { dispatch(setInitialState(response.data.results)) })
    }
    fetchRecipes()
  }, [dispatch]);
*/
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
        <div className='container-new-recipes'>
          <div>
            <span className='span-new-recipes'> Nuevas Recetas</span>
          </div>
          <div className='container-slider-recipe'>
            {
              <div className='container-recipe'>
                <div className='container-all-recipe'>
                  <img src={RecipeIcon} alt="recipe-img" className='img-recipe' />
                  <div className='container-title-recipe'>
                    <span className='span-title-name'> Ojingeo</span>
                    <span className='span-title-lastname'>Muchim</span>
                  </div>
                  <div className='container-details-recipe'>
                    {details?.map((item) => (
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
                    <img src={StartIcon} alt="start-icon" />
                    <span className='span-points'>5.0</span>
                  </div>
                  <div>
                    <img src={FavoriteIcon} alt="favorite-icon" />
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
      <FooterContent />
    </>
  );
};

export default Initial;
