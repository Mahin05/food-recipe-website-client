import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Recipe.css'

const Recipe = ({recipe}) => {
    const {_id,name,image,description,ingredients,steps} = recipe;
    const navigate = useNavigate();
    const navigateToRecipeDetail = id => {
        navigate(`/details/${id}`);
    }
    return (
        <div class="card w-50 bg-base-100 mx-5 my-5 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={image} alt="food" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title name-title">{name}</h2>
                <div class="card-actions">
                <button onClick={()=>navigateToRecipeDetail(_id)}  class="btn btn-ghost mt-3 seemore">See more...</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;