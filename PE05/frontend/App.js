import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './pages/RecipeList';
import RecipeDetails from './pages/RecipeDetails';
import AddRecipe from './pages/AddRecipe';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RecipeList />} />
                <Route path="/recipe/:id" element={<RecipeDetails />} />
                <Route path="/add-recipe" element={<AddRecipe />} />
            </Routes>
        </Router>
    );
}

export default App;

