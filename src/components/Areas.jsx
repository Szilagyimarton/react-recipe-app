import { useEffect, useState } from 'react'
import Layout from './Layout/Layout'
import Area from './Area'
import { Button } from '@mui/material'
import '../App.css'

function Areas() {
  const [areas,setAreas] = useState(null)
  const [url,setUrl] = useState("list.php?a=list") 
  const [area,setArea] = useState("")
  const [backFromSelectedArea,setBackFromSelectedArea] = useState(true)


  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/${url}`)
      .then(res=>res.json())
      .then(data => setAreas(data))
  },[backFromSelectedArea,url])
 
  return (
    <Layout>
      <div className='areas'>
      {areas && url === "list.php?a=list" && backFromSelectedArea === true
      ?
        areas.meals.map((area,index) => (
        <div className="area" key={index}>
          <Button sx={{width:150}}
          variant="outlined" onClick={(event) => {
            setUrl(`filter.php?a=${event.target.textContent}`)
            setArea(event.target.textContent)
            setBackFromSelectedArea(false)
          }}>{area.strArea}</Button>
        </div>
       ))
       :
       areas && <Area area={area} setUrl={setUrl} setBackFromSelectedArea={setBackFromSelectedArea}/>
      }
    </div>
    </Layout>
  )
}

export default Areas