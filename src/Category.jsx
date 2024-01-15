import  { useState,useEffect } from 'react'
import Meal from './components/Meal'

function Category({meal,setBackFromSelectedCategory,setUrl}) {
  const [selectedMeal,setSelectedMeal] = useState(null)
  useEffect(() => {
    if(meal){

      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        .then(res => res.json())
        .then(data => {setSelectedMeal(data.meals)
       })
    }
  },[])
 
  return (
    <div className='selectedMealByCategory'>
    {selectedMeal && (
      <>
        <div>
          {selectedMeal.length > 0
            ? selectedMeal.map((meal,index) => (
               <Meal recipe={meal} key={index}/>
              ))
            : <p>No Meal Found</p>
          }
        </div>
        <button onClick={() =>{ 
          setUrl("list.php?c=list" )
          setBackFromSelectedCategory(true)
        }}>Back </button>
      </>
    )}
  </div>
  )
}

export default Category