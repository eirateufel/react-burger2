import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import IngredientCard from '../ingredientCard/ingredientCard';
import ingredientSectionStyles from './ingredientSection.module.css'
import {ingredientsPropTypes} from '../propTypes/propTypes';

IngredientSection.propTypes = {
    ingredients: ingredientsPropTypes, // isRequired внутри модуля propTypes
    header: PropTypes.string.isRequired
}

export default function IngredientSection(props) {
    const [subSections, setSubSections] = React.useState();

    useEffect(() => {
        setSubSections(
            props.ingredients.map((ingredient, index) => {
                return (
                    <IngredientCard 
                        key={`${ingredient.name}section${index}`}
                        imgSrc={ingredient.image}
                        name={ingredient.name}
                        price={ingredient.price}
                        imgSrcLarge={ingredient.image_large}
                        calories={ingredient.calories}
                        carbohydrates={ingredient.carbohydrates}
                        fat={ingredient.fat}
                        proteins={ingredient.proteins}
                    />
                )
            })
        )
    }, [props.ingredients])

    return (
        <div className={ingredientSectionStyles.mainSection}>
            <h3 className="text text_type_main-medium">{props.header}</h3>
            <div className={`ml-2 mr-2 ${ingredientSectionStyles.subSections}`}>
                {subSections}
            </div>
        </div>
    )
}
