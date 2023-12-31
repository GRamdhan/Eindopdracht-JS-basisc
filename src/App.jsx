// App.jsx
import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import RecipeListPage from './pages/RecipeListPage';
import RecipePage from './pages/RecipePage';
import { data as recipes } from './utils/data'; // Note the correct import

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelection = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleGoBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <ChakraProvider>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} onGoBack={handleGoBack} />
      ) : (
        <RecipeListPage recipes={recipes} onRecipeSelect={handleRecipeSelection} />
      )}
    </ChakraProvider>
  );
};

export default App;


