

import { useState } from 'react';
import { data } from '../utils/data';

const RecipeListPage = ({ onRecipeSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterRecipes = (recipe) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const lowerCaseLabel = recipe.recipe.label.toLowerCase();

    const nameMatch = lowerCaseLabel.includes(lowerCaseQuery);

    const healthLabelMatch =
      recipe.recipe.healthLabels &&
      recipe.recipe.healthLabels.some((label) => label.toLowerCase().includes(lowerCaseQuery));

    return nameMatch || healthLabelMatch;
  };

  const filteredRecipes = data.hits.filter(filterRecipes);

  return (
    <div>
      <h2>Recipe List Page</h2>

      
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={handleSearchChange}
      />

      
      {filteredRecipes.map((recipe) => (
        <div key={recipe.recipe.label} onClick={() => onRecipeSelect(recipe.recipe)}>
          <h3>{recipe.recipe.label}</h3>
          {recipe.recipe.image && (
            <img src={recipe.recipe.image} alt={recipe.recipe.label} style={{ maxWidth: '100%' }} />
          )}
          {recipe.recipe.dietLabels && <p>Diet: {recipe.recipe.dietLabels.join(', ')}</p>}
          {recipe.recipe.cautions && <p>Cautions: {recipe.recipe.cautions.join(', ')}</p>}
          {recipe.recipe.mealType && <p>Meal Type: {recipe.recipe.mealType.join(', ')}</p>}
          {recipe.recipe.dishType && <p>Dish Type: {recipe.recipe.dishType.join(', ')}</p>}

          
          {recipe.recipe.healthLabels && (
            <div>
              <p>Health Labels:</p>
              <ul>
                {recipe.recipe.healthLabels.includes('Vegan') && <li>Vegan</li>}
                {recipe.recipe.healthLabels.includes('Vegetarian') && <li>Vegetarian</li>}
                
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeListPage;
