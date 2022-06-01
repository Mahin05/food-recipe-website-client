import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetail.css';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    useEffect(() => {
        const url = `https://infinite-stream-73396.herokuapp.com/recipe/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setRecipe(data))
    }, [id])
    return (
        <div class="card w-100 bg-base-100 shadow-xl mx-auto mt-1">
            <figure class="px-10 pt-10">
                <img style={{
                    'width': '30%', 'height': '20%',
                }}
                    src={recipe.image}
                    alt="Shoes"
                    class="rounded-xl" />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-4xl name">{recipe.name}</h2>
                <p className="steps"><span className='title'>Description:</span></p>
                <p className="others">{recipe.description}</p>
                <p className="steps"><span className='title'>Ingredients:</span></p>
                <p className="others">{recipe.ingredients}</p>
                <p className="steps"><span className='title'>Preparing steps:</span></p>
                <p className="others">{recipe.steps}</p>
            </div>
        </div>
    );
};

export default RecipeDetail;