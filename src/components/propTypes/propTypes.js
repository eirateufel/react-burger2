import { shape, number, string, arrayOf } from 'prop-types';

const ingredientsPropTypes = arrayOf(shape({
    image: string.isRequired,
    image_large: string.isRequired,
    name: string.isRequired,
    price: number.isRequired,
    calories: number.isRequired,
    carbohydrates: number.isRequired,
    fat: number.isRequired,
    proteins: number.isRequired,
}));


const ingredientGroupsPropTypes = shape({
    buns: ingredientsPropTypes,
    mains: ingredientsPropTypes,
    sauces: ingredientsPropTypes
});

const ingredientDetailsPropTypes = {
    imgSrc: string.isRequired,
    name: string.isRequired,
    calories: number.isRequired,
    carbohydrates: number.isRequired,
    fat: number.isRequired,
    proteins: number.isRequired
};

const fullIngredientDetailsPropTypes = {
    ...ingredientDetailsPropTypes,
    imgSrcLarge: string.isRequired,
    price: number.isRequired,
};

export {ingredientsPropTypes, ingredientGroupsPropTypes, ingredientDetailsPropTypes, fullIngredientDetailsPropTypes};