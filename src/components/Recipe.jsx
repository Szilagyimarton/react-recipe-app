import  { useEffect, useState } from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';

function Recipe({  selectedMealName,setClickedRecipe}) {
  const [selectedRecipe,setSelectedRecipe] = useState(null)
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${selectedMealName}
    `).then(res => res.json())
      .then(data => setSelectedRecipe(data.meals[0]))
  },[])

  return (
 <> 
    {selectedRecipe && 
  
      <Card className="recipe" id={selectedRecipe.strMeal} sx={{ maxWidth: 800 }}>

          <CardMedia
            sx={{ minWidth:200, minHeight:300 }}
            image={`${selectedRecipe.strMealThumb}/preview`}
            title={selectedRecipe.strMeal} />
          <CardContent>
            <h1>{selectedRecipe.strMeal}</h1>
            <h2>{selectedRecipe.strCategory}</h2>
            <h3>{selectedRecipe.strArea}</h3>
            <p>{selectedRecipe.strInstructions}</p>
           
            <Button onClick={() => setClickedRecipe(false)}>Back</Button>
          
          </CardContent>
        </Card>
    }</>
    
    
  )
}

export default Recipe