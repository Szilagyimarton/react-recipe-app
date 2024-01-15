import Meal from './Meal'

function Meals( { recipes }) {
  console.log(recipes)
  return (
    <div id="recipes">
    {recipes.map((recipe,index )=> <Meal key={index} recipe={recipe}/>)}
    </div>
  )
}

export default Meals