import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addRecipe } from '../api';

function AddRecipe() {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const ingredientsArray = ingredients.split(',').map(ing => ing.trim());

        try {
            await addRecipe({ name, ingredients: ingredientsArray, instructions });
            navigate('/'); 
        } catch (err) {
            setError('Failed to add recipe. Please try again.');
        }
    };

    return (
        <div>
            <h1>Add New Recipe</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Recipe Name:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </label>
                <br />

                <label>
                    Ingredients (comma-separated):
                    <input 
                        type="text" 
                        value={ingredients} 
                        onChange={(e) => setIngredients(e.target.value)} 
                        required 
                    />
                </label>
                <br />

                <label>
                    Instructions:
                    <textarea 
                        value={instructions} 
                        onChange={(e) => setInstructions(e.target.value)} 
                        required 
                    />
                </label>
                <br />

                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
}

export default AddRecipe;
