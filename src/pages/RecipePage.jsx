
import { Box, Heading, Image, Text, VStack, Button } from '@chakra-ui/react';

const RecipePage = ({ recipe, onGoBack }) => {
  return (
    <VStack align="center" spacing={8}>
      <Box>
        <Image src={recipe.image} alt={recipe.label} />
      </Box>
      <Box textAlign="center">
        <Heading as="h1" size="xl">
          {recipe.label}
        </Heading>
        <Text>{recipe.mealType.join(', ')}</Text>
        <Text>{recipe.dishType.join(', ')}</Text>
        <Text>Total Cooking Time: {recipe.totalTime} mins</Text>
        <Text>Diet Label: {recipe.dietLabels.join(', ')}</Text>
        <Text>Health Labels: {recipe.healthLabels.join(', ')}</Text>
        <Text>Cautions: {recipe.cautions.join(', ')}</Text>
        <Text>Servings: {recipe.yield}</Text>
      </Box>
      <Box>
        <Heading as="h2" size="lg">
          Ingredients
        </Heading>
        <VStack align="start" spacing={2}>
          {recipe.ingredients.map((ingredient, index) => (
            <Text key={index}>{ingredient.text}</Text>
          ))}
        </VStack>
      </Box>
      <Box>
        <Heading as="h2" size="lg">
          Total Nutrients
        </Heading>
        <VStack align="start" spacing={2}>
          <Text>Energy: {recipe.totalNutrients.ENERC_KCAL.quantity} kcal</Text>
          {/* Include other nutrient details */}
        </VStack>
      </Box>
      <Button onClick={onGoBack}>Go Back</Button>
    </VStack>
  );
};

export default RecipePage;
