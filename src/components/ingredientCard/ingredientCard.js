import React from 'react';
import PropTypes from 'prop-types';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientCardStyles from './ingredientCard.module.css';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredientDetails/ingredientDetails';
import {fullIngredientDetailsPropTypes} from '../propTypes/propTypes';

IngredientCard.propTypes = fullIngredientDetailsPropTypes; // isRequired внутри модуля propTypes

export default function IngredientCard(props) {
    const [modalMounted, setModalMountedState] = React.useState(false)

    const number = Math.floor(Math.random() * 2); // В теории количество выбранных ингредиентов должно добавляться при клике куда-то, но в макете об этом информации нет, поэтому рандом.
    
    const mountModal = () => {
        setModalMountedState(true)
    }

    const unmountModal = () => {
        setModalMountedState(false);
    }

    return (
        <>
        <div onClick={mountModal} className={`mb-8 ${ingredientCardStyles.card}`}>
            <div className={number !== 0 ? ingredientCardStyles.number : "hidden"}>
                {number !== 0 && <Counter count={number} size="default" />}
            </div>
            <img src={props.imgSrc} alt={props.name}/>
            <div className={`mt-2 mb-2 ${ingredientCardStyles.price}`}>
                <p className={`text text_type_digits-default mr-2`}>{props.price}</p>
                <CurrencyIcon type="primary"/>
            </div>
            <div className={ingredientCardStyles.name}>
                <p className={"text text_type_main-default pl-1 pr-1"}>{props.name}</p>
            </div>
        </div>
        {modalMounted && 
            <Modal 
                modalHeader={"Детали ингредиента"}
                unmountModal={unmountModal}
            >
                <IngredientDetails
                    imgSrc={props.imgSrcLarge}
                    name={props.name}
                    calories={props.calories}
                    carbohydrates={props.carbohydrates}
                    fat={props.fat}
                    proteins={props.proteins}
                />
            </Modal>
        }
        </>
    )
}