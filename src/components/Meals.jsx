import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import "./Meals.css"

function Meals( {recipe}) {
  return (
  <Card   className="recipe" id={recipe.strMeal} sx={{ maxWidth: 400 }}>
 
     <CardMedia
        sx={{ height: 180 }}
        image ={`${recipe.strMealThumb}/preview`}
        title={recipe.strMeal}
        />
       <CardContent>
            <h1>{recipe.strMeal}</h1>
            <h2>{recipe.strCategory}</h2>
            <h3>{recipe.strArea}</h3>

        </CardContent>

  </Card>
  )
}

export default Meals