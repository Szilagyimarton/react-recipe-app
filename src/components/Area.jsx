import { useEffect, useState } from 'react'
import Meal from './Meal'
import { Button } from '@mui/material'
import '../App.css'

import Recipe from './Recipe'

function Area({area,setUrl,setBackFromSelectedArea}) {
  const [selectedArea, setSelectdArea] = useState(null)
  const [selectedMealName,setSelectedMealName] = useState(null)
  const [clickedRecipe,setClickedRecipe] = useState(false)
  useEffect(()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      .then(res => res.json())
      .then(data => setSelectdArea(data))
  })
  return (
    <div><div className='recipes'>
      {selectedArea && !clickedRecipe
      ?
        selectedArea.meals.map((meal, index) => (
          <Meal recipe={meal} key={index} onClick={(event) => {
            setSelectedMealName(event.target.parentElement.id)
            setClickedRecipe(true)
          }} />
        ))
        :
        <Recipe selectedMealName={selectedMealName} setClickedRecipe={setClickedRecipe}/>
      }
    </div><div className='backBtn'>
        <Button variant="contained" onClick={() => {
          setUrl("list.php?a=list")
          setBackFromSelectedArea(true)
        } }>Back </Button>
      </div></div>
  )
}

export default Area