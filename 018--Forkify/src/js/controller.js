// https://forkify-api.herokuapp.com/v2

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import * as model from './model';
import RecipeView from './views/recipe-view';


const controlRecipe = async () => {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;

        RecipeView.renderSnipper();

        await model.loadRecipe(id);

        RecipeView.render(model.state.recipe);
    } catch (err) {
        alert(err);
    }
}

const init = () => {
    RecipeView.eventHandler(controlRecipe);
}

init();