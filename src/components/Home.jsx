import { useEffect, useState } from 'react'
import Meal from './Meal'
import Layout from './Layout/Layout'
import Meals from './Meals'


import '../App.css'

import Recipe from './Recipe'
import { TextField } from '@mui/material'


function Home() {
  const [recipe,setRecipes] = useState("")
  const [searchBar, setSearchBar] = useState(null)
  const [searchResult, setSearchResult] = useState(null)
  const [clickedRecipe,setClickedRecipe] = useState(false)
  const [selectedMealName, setSelectedMealName] = useState("")

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(res=>res.json())
      .then(data => setRecipes(data.meals))
  },[clickedRecipe])
  useEffect(()=> {
    if(searchBar){
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBar}`)
        .then(res => res.json())
        .then(data => setSearchResult(data))

    }
  },[searchBar])


  return (
    <Layout>
      <h1>Welcome to this Site!</h1>
      <h2>You can search for a meal, or you can filter by categories and area!</h2>
      <div>
      <TextField id="standard-basic" label="Search" variant="outlined"  onChange={(event) => setSearchBar(event.target.value)}/>
     
      </div>

     {recipe && !searchBar && !clickedRecipe && selectedMealName===""
     ?
     <>
      <h3>Random recipe</h3>
     <Meal onClick={(event) =>{
        setSelectedMealName(event.target.parentElement.id)
        setClickedRecipe(true)
     } } recipe={recipe[0]}/>
     </>
     :
     searchResult && searchResult.meals && recipe 
     ?
     < Meals recipes={searchResult.meals}/>
     
      : 
      recipe && clickedRecipe === true && selectedMealName
      ?
      recipe && <Recipe selectedMealName={selectedMealName} setClickedRecipe={setClickedRecipe}/>
      :
      <p>No meals found</p>
    }
    
    </Layout>
    )
}

export default Home
