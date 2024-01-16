import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import "./Meal.css"
import { Button } from '@mui/material';

function Meal( {recipe,onClick}) {
  return (
  <Card  className="recipe" sx={{ maxWidth: 400 }}>
 
     <CardMedia
        sx={{ height: 180 }}
        image ={`${recipe.strMealThumb}/preview`}
        title={recipe.strMeal}
        />
       <CardContent id={recipe.strMeal} >
            <h1>{recipe.strMeal}</h1>
            <h2>{recipe.strCategory}</h2>
            <h3>{recipe.strArea}</h3>
            <Button  onClick={onClick}>Show More</Button>
        </CardContent>

  </Card> 
  
  )
}

export default Meal