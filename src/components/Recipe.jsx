import  { useEffect, useState } from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';

import './Recipe.css'

function Recipe({  selectedMealName,setClickedRecipe, setSelectedMealName}) {
  const [selectedRecipe,setSelectedRecipe] = useState(null)
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${selectedMealName}
    `).then(res => res.json())
      .then(data => setSelectedRecipe(data.meals[0]))
  },[])

  return (
 <> 
    {selectedRecipe && 
  
      <Card className="recipe" id={selectedRecipe.strMeal}  >

          <CardMedia
            sx={{ minWidth:200, minHeight:300 }}
            image={`${selectedRecipe.strMealThumb}`}
            title={selectedRecipe.strMeal} />
          <CardContent>
            <h1>{selectedRecipe.strMeal}</h1>
            <h2>{selectedRecipe.strCategory}</h2>
            <h3>{selectedRecipe.strArea}</h3>
            <p>{selectedRecipe.strInstructions}</p>
           
            <Button onClick={() => {
              setClickedRecipe(false)
              setSelectedMealName("")
            }}>Back</Button>
          
          </CardContent>
        </Card>
    }</>
    
    
  )
}

export default Recipe