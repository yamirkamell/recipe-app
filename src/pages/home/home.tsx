/*import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import axios from "axios";
import { setInitialState } from "../../redux/home/actions";*/
import FooterContent from "../../components/footer-content/footer-content";
import NavBar from "../../components/nav-bar/nav-bar";

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
      <div>
        <p>RecipeApp</p>
      </div>
      <FooterContent />
    </>
  );
};

export default Initial;
