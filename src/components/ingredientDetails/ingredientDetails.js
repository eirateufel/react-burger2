import PropTypes from 'prop-types';
import Nutrient from '../nutrient/nutrient';
import ingredientDetailsStyles from './ingredientDetails.module.css';
import {ingredientDetailsPropTypes} from '../propTypes/propTypes';

IngredientDetails.propTypes = ingredientDetailsPropTypes; // isRequired внутри модуля propTypes

export default function IngredientDetails(props) {
    
    return (
        <div className={ingredientDetailsStyles.content}>
            <img className="mb-4" src={props.imgSrc} alt={props.name}/>
            <p className="text text_type_main-medium mb-8">{props.name}</p>
            <div className={ingredientDetailsStyles.nutrients}>
                <Nutrient name="Калории,ккал" number={props.calories}/>
                <Nutrient name="Белки, г" number={props.proteins}/>
                <Nutrient name="Жиры, г" number={props.fat}/>
                <Nutrient name="Углеводы, г" number={props.carbohydrates}/>
            </div>
        </div>
    )
}