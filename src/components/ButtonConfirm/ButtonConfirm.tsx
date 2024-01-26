import { useNavigate } from 'react-router-dom';
import './ButtonConfirm.scss';
import { useAppDispatch } from '../../app/hooks';
import { setCurrentStepNumber } from '../../features/stepNumber';
import { steps } from '../../utils/consts';

export const ButtonConfirm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleConfirm = () => {
    dispatch(setCurrentStepNumber(steps[0].number));
    navigate(`/steps/confirmation`);
  }

  return(
    <button className="button-confirm" onClick={handleConfirm}>
      Confirm
    </button>
  );
}