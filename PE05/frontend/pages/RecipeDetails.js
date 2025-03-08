import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRecipe, deleteRecipe } from '../api';

function RecipeDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        getRecipe(id).then(res => setRecipe(res.data));
    }, [id]);

    const handleDelete = async () => {
        await deleteRecipe(id);
        navigate('/');
    };

    return recipe ? (
        <div>
            <h1>{recipe.name}</h1>
            <p>{recipe.instructions}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    ) : <p>Loading...</p>;
}

export default RecipeDetails;
