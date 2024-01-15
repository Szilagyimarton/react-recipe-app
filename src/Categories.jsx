
import { useEffect, useState } from 'react'
import Layout from './components/Layout/Layout'
import Category from './Category'

function Categories() {
  const [categories, setCategories] = useState(null)
  const [url,setUrl] = useState("list.php?c=list")
  const [meal,setMeal] = useState("")
  const [backFromSelectedCategory,setBackFromSelectedCategory] = useState(true)
  
  useEffect(() => { 
    fetch(`https://www.themealdb.com/api/json/v1/1/${url}`)
      .then(res => res.json())
      .then(data => setCategories(data.meals))
  },[backFromSelectedCategory,url])



  return (
    
    <Layout>
    <div className='categories'>
    {  categories &&  url !== "list.php?c=list" 
      ?
      <Category meal={meal} setBackFromSelectedCategory={setBackFromSelectedCategory} setUrl={setUrl}/>
      :
      categories && backFromSelectedCategory === true && categories.map((category,index) => (
        <div className='category' key={index}>
          <button onClick={(event)=>{
            setUrl(`filter.php?c=${event.target.innerHTML}`)
            setMeal(event.target.innerHTML)
            setBackFromSelectedCategory(false)
            }}>{category.strCategory}</button>
        </div>
      ))}
    </div>
    </Layout>
  )
}

export default Categories