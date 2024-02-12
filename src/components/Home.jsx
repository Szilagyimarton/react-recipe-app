import { useEffect, useState } from 'react'
import Meal from './Meal'
import Layout from './Layout/Layout'
import Meals from './Meals'

import '../App.css'

import Recipe from './Recipe'
import { TextField } from '@mui/material'


function Home() {
  const [recipe,setRecipes] = useState("")
  const [searchBar, setSearchBar] = useState("")
  const [searchResult, setSearchResult] = useState(null)
  const [clickedRecipe,setClickedRecipe] = useState(false)
  const [selectedMealName, setSelectedMealName] = useState("")
  const [clickedRecipeFromSearching, setClickedRecipeFromSearching] = useState(false)
  const [selectedMealFromSearching, setSelectedMealFromSearching] = useState(null)

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(res=>res.json())
      .then(data => setRecipes(data.meals))
  },[])
  useEffect(()=> {
    if(searchBar){
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBar}`)
        .then(res => res.json())
        .then(data => setSearchResult(data))

    }
    if(!searchBar) setSearchResult(null)
  },[searchBar,clickedRecipeFromSearching])

  useEffect(() => {
    if(searchResult){
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${selectedMealName}`)
        .then(res => res.json())
        .then(data => setSelectedMealFromSearching(data))

    }
  },[])


  return (
    <Layout>
      <h1>Welcome to this Site!</h1>
      <h2>You can search for a meal, or you can filter by categories and area!</h2>
      <div className='inputField'>
        <TextField id="standard-basic" label="Search" variant="outlined"  onChange={(event) => {
          setClickedRecipeFromSearching(false)
          setSearchBar(event.target.value)}}/>
      </div>

     {
        clickedRecipeFromSearching
        ?
        <Recipe selectedMealName={selectedMealFromSearching} setClickedRecipe={setClickedRecipeFromSearching} setSelectedMealName={setSelectedMealFromSearching}/> 
        :
       recipe && searchBar==="" && !clickedRecipe && selectedMealName==="" && !searchResult 
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
     < Meals recipes={searchResult.meals} onClick={(event) =>{
      setSelectedMealFromSearching(event.target.parentElement.id) 
      setClickedRecipeFromSearching(true)
   } } /> 
     
      : 
      recipe && clickedRecipe  && selectedMealName 
      ?
      recipe && <Recipe selectedMealName={selectedMealName} setClickedRecipe={setClickedRecipe} setSelectedMealName={setSelectedMealName}/>
      :
  
      <p>No meal found</p>
    }
    
    </Layout>
    )
}

export default Home
