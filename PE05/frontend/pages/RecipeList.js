import { useEffect, useState } from 'react';
import { getRecipes } from '../api';
import { Link } from 'react-router-dom';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes().then(res => setRecipes(res.data));
    }, []);

    return (
        <div>
            <h1>Recipe List</h1>
            <Link to="/add-recipe">Add Recipe</Link>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe._id}>
                        <Link to={`/recipe/${recipe._id}`}>{recipe.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeList;
