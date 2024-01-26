import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCurrentStepNumber } from "../../features/stepNumber";
import { steps } from "../../utils/consts";
import './BackButton.scss';
import classNames from "classnames";

export const BackButton = () => {
  const currentStepNumber = useAppSelector(state => state.currentStepNumber.currentStepNumber);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleStepChange = (newStep: number) => {
    dispatch(setCurrentStepNumber(newStep));
    navigate(`/steps/${newStep}`);
  };

  const goToPrevStep = () => {
    const prevStep = currentStepNumber - 1;
    if (prevStep >= 1) {
      handleStepChange(prevStep);
    }
  };

  return(
    <button
      className={classNames("back-button", {
        "back-button--disabled": currentStepNumber === steps[0].number,
      })}
      onClick={goToPrevStep}
    >
      Go Back
    </button>
  );
}