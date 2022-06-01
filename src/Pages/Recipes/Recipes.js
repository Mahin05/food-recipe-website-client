import React, { useEffect, useState } from 'react';
import Recipe from '../Home/Recipe/Recipe';
import './Recipes.css'

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    const [filter,setFilter] = useState('');
    const searchText = (event) =>{
        setFilter(event.target.value);
    }
    // console.warn(filter)
    let dataSearch = recipes.filter(item => {
        return Object.keys(item).some(key=>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    })
    return (
        <div  className='max-w-7xl mx-auto px-12'>
         <h2 className="text-3xl text-center mb-4 title-style">FOOD RECIPE</h2>
            <input
             type="text" 
             placeholder="Search your favourite food" 
             class="input input-bordered input-error w-full max-w-xs"
             value={filter}
             onChange={searchText.bind(this)}
             />
        <div>
            <h2 className='recipes-title mt-12'>FOODS</h2>
            <div className="recipes-container">
                {
                    dataSearch.map(recipe => <Recipe
                        key={recipe._id}
                        recipe={recipe}
                    ></Recipe>)
                }
                {

                }
            </div>
        </div>
    </div>
    );
};

export default Recipes;