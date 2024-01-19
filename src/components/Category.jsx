import  { useState,useEffect } from 'react'
import Meal from './Meal'
import '../App.css'
import { Button } from '@mui/material'
import Recipe from './Recipe'


function Category({ category,setBackFromSelectedCategory,setUrl}) {
  const [selectedCategory,setSelectedCategory] = useState(null)
  const [selectedMealName,setSelectedMealName] = useState(null)
  const [clickedRecipe,setClickedRecipe] = useState(false)
  useEffect(() => {
        fetch(`https:/www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(res => res.json())
        .then(data => {setSelectedCategory(data)
       })
    
  },[])
console.log(selectedCategory)
  return (
    <div><div className='recipes'>
      {selectedCategory &&
        <>
          {selectedCategory.meals && !clickedRecipe
            ?
            selectedCategory.meals.map((category, index) => (
              <Meal recipe={category} key={index} onClick={(event) => {
                setSelectedMealName(event.target.parentElement.id)
                setClickedRecipe(true)
              }
            } />
            ))
            :
            clickedRecipe 
            ?
            <Recipe selectedMealName={selectedMealName} setClickedRecipe={setClickedRecipe}/>
            :
            <p>No Meal Found!</p>}


        </>}
    </div>
    <div className='backBtn'>
        <Button variant="contained"  onClick={() => {
          setUrl("list.php?c=list")
          setBackFromSelectedCategory(true)
        } }>Back </Button>
      </div></div>
       
  )
}

export default Category