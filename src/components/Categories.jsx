import { useEffect, useState } from 'react'
import Layout from './Layout/Layout.jsx'
import Category from './Category'
import { Button } from '@mui/material'

import './Categories.css'

function Categories() {
  const [categories, setCategories] = useState(null)
  const [url,setUrl] = useState("list.php?c=list")
  const [category,setCategory] = useState("")
  const [backFromSelectedCategory,setBackFromSelectedCategory] = useState(true)
  
  useEffect(() => { 
    fetch(`https://www.themealdb.com/api/json/v1/1/${url}`)
      .then(res => res.json())
      .then(data => setCategories(data.meals))
  },[])


  return (
    
    <Layout>
    <div className='categories'>
    {  categories &&  url !== "list.php?c=list" 
      ?
      <Category category={category} setBackFromSelectedCategory={setBackFromSelectedCategory} setUrl={setUrl}/>
      :
      categories && backFromSelectedCategory === true && categories.map((category,index) => (
        <div className='category' key={index}>
          <Button variant="outlined"  onClick={(event)=>{
            setUrl(`filter.php?c=${event.target.innerHTML}`)
            setCategory(event.target.innerHTML)
            setBackFromSelectedCategory(false)
            }}>{category.strCategory}</Button>
        </div>
      ))}
    </div>
    </Layout>
  )
}

export default Categories