import { NavLink } from 'react-router-dom';
import './Step.scss';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setCurrentStepNumber } from '../../features/stepNumber';


type Props = {
  number: number,
  text: string,
}

export const Step: React.FC<Props> = ({ number, text }) => {
  const dispatch = useAppDispatch();
  const isValid = useAppSelector((state) => state.isValid.isValid);

  const handleCurrentStep = () => {
    dispatch(setCurrentStepNumber(number));
  };

  return (
    <div className="step">
      <div className="step__container">
        {isValid ? (
          <NavLink
            to={`/steps/${number}`}
            className={({ isActive }) => classNames('step__number', {
              'step__number--active': isActive,
            })}
            onClick={handleCurrentStep}
          >
            {number}
          </NavLink>
        ) : (
          <span className="step__number">{number}</span>
        )}

        <div className="step__info">
          <p className="step__title">
            step {number}
          </p>

          {isValid ? (
            <NavLink
              to={`/steps/${number}`}
              className="step__text"
            >
              {text}
            </NavLink>
          ) : (
            <span className="step__text">{text}</span>
          )}
        </div>
      </div>
    </div>
  );
}
