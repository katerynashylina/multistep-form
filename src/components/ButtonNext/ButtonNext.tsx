import { useNavigate } from 'react-router-dom';
import './ButtonNext.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setCurrentStepNumber } from '../../features/stepNumber';
import { steps } from '../../helpers/consts';
import classNames from 'classnames';
import React from 'react';
import { FormType } from '../../types/FormType';

type Props = {
  handleSubmit: () => void,
}

export const ButtonNext: React.FC<Props> = ({ handleSubmit }) => {
  const currentStepNumber = useAppSelector((state) => state.currentStepNumber.currentStepNumber);
  const isValid = useAppSelector(state => state.isValid.isValid);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleStepChange = (newStep: number) => {
    dispatch(setCurrentStepNumber(newStep));
    navigate(`/steps/${newStep}`);
  };

  const goToNextStep = () => {
    const nextStep = currentStepNumber + 1;
    if (nextStep <= steps.length) {
      handleStepChange(nextStep);
    }
  };

  const handleClick = () => {
    handleSubmit();
    
    if (isValid) {
      goToNextStep();
    }
  }

  return(
    <button
      className={classNames("button", {
        "button--disabled": !isValid,
        "button--valid": isValid,
      })}
      onClick={handleClick}
    >
      Next Step
    </button>
  );
}
