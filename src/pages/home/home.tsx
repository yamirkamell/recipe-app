/*import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import axios from "axios";
import { setInitialState } from "../../redux/home/actions";*/

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
    <div>
      <h3>RecipeApp</h3>
    </div>
  );
};

export default Initial;
