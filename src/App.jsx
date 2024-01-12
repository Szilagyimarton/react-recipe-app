import { useEffect, useState } from 'react'
import './App.css'
import Meals from './components/Meals'

function App() {
  const [recipes,setRecipes] = useState(null)

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then(res=>res.json())
      .then(data => setRecipes(data.meals))
  },[])

  return (
    <>
      {recipes && recipes.map((recipe,index )=> <Meals key={index} recipe={recipe}/>)}
      
    </>
  )
}

export default App
