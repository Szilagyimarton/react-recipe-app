import { useEffect, useState } from 'react'
import Layout from './Layout/Layout.jsx'
import Category from './Category'
import { Button } from '@mui/material'

import '../App.css'


function Categories() {
  const [categories, setCategories] = useState(null)
  const [url,setUrl] = useState("list.php?c=list")
  const [category,setCategory] = useState("")
  const [backFromSelectedCategory,setBackFromSelectedCategory] = useState(true)
  
  useEffect(() => { 
    fetch(`https://www.themealdb.com/api/json/v1/1/${url}`)
      .then(res => res.json())
      .then(data => setCategories(data))
  },[])

  console.log(categories)
  console.log(category)
  console.log(url)
  
  return (
    
    <Layout>
    <div className='categories'>
     { categories && backFromSelectedCategory === true && url ==="list.php?c=list" 
     ?
      categories.meals.map((category,index) => (
        <div className='category' key={index}>
          <Button sx={{width:150}}
          variant="outlined"  onClick={(event)=>{
            setUrl(`filter.php?c=${event.target.textContent}`)
            setCategory(event.target.textContent)
            setBackFromSelectedCategory(false)
          }}>{category.strCategory}</Button>
        </div>
      ))
      :
      categories && 
      
      <Category category={category} setBackFromSelectedCategory={setBackFromSelectedCategory} setUrl={setUrl}/>}
    </div>
    </Layout>
  )
}

export default Categories