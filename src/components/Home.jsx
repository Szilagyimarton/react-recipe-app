import { useEffect, useState } from 'react'

import Meals from './Meals'
import Layout from './Layout/Layout'

import '../App.css'

function Home() {
  const [recipes,setRecipes] = useState("")

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then(res=>res.json())
      .then(data => setRecipes(data.meals))
  },[])
 
  return (
    <Layout>
     {recipes && <Meals recipes={recipes}/>}
      
    </Layout>
  )
}

export default Home
