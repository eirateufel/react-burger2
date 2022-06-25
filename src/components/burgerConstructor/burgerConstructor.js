import React from 'react';
import constructorStyles from './burgerConstructor.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientSection from '../ingredientSection/ingredientSection';
import {ingredientGroupsPropTypes} from '../propTypes/propTypes';

BurgerConstructor.propTypes = {
    ingredients: ingredientGroupsPropTypes // isRequired внутри модуля propTypes
}

export default function BurgerConstructor({ingredients}) {
    const [currentTab, setCurrent] = React.useState('one');

    return (
        <div className={constructorStyles.mainSection}>
            <h2 className={`text text_type_main-large mt-10 mb-5 ${constructorStyles.header}`}>Соберите бургер</h2>
            <div className={`mb-10 ${constructorStyles.tabSection}`} style={{ display: 'flex' }}>
                <Tab value="one" active={currentTab === 'one'} onClick={setCurrent}>Булки</Tab>
                <Tab value="two" active={currentTab === 'two'} onClick={setCurrent}>Начинки</Tab>
                <Tab value="three" active={currentTab === 'three'} onClick={setCurrent}>Соусы</Tab>
            </div>
            <div className={constructorStyles.scrollSection}>
                {
                    [
                        ingredients.buns && <IngredientSection header={"Булки"} ingredients={ingredients.buns} key={"1"}/>,
                        ingredients.mains && <IngredientSection header={"Начинки"} ingredients={ingredients.mains} key={"2"}/>,
                        ingredients.sauces && <IngredientSection header={"Соусы"} ingredients={ingredients.sauces} key={"3"}/>
                    ]
                }
            </div>
        </div>
    )
}