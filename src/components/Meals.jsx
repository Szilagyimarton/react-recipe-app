import Meal from './Meal'

function Meals( { recipes,onClick }) {

  return (
    <div className="recipes">
    {recipes.map((recipe,index )=> <Meal key={index} recipe={recipe} onClick={onClick}/>)}
    </div>
  )
}

export default Meals