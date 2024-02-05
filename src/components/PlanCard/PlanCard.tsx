import classNames from 'classnames';

import './PlanCard.scss';
import { terms } from '../../helpers/consts';
import { useAppSelector } from '../../app/hooks';
import { PlanType } from '../../types/PlanType';

type Props = {
  plan: PlanType,
  handlePlanChange: (plan: PlanType) => void,
}

export const PlanCard: React.FC<Props> = ({
  plan,
  handlePlanChange,
}) => {
  const { id, image, name, price } = plan;
  const currentPlan = useAppSelector(state => state.currentPlan.currentPlan);

  const isSelected = currentPlan.id === id;

  const term = useAppSelector(state => state.term.term);

  return (
    <div className="plan-card">
      <div
        onClick={() => handlePlanChange(plan)}
        className={classNames("plan-card__container", {
          "plan-card__container--selected": isSelected,
          "plan-card__container--bigger": term === terms[1],
        })}
      >
        <img src={`img/${image}`} alt="image" className="plan-card__image" />

        <p className="plan-card__name">
          {name}
        </p>

        <p className="plan-card__price">
          {term === terms[0] ? `$${price}/mo` : `$${price * 10}/yr`}
        </p>

        {term === terms[1] && (
          <p className='plan-card__subtitle'>
            2 months free
          </p>
        )}
      </div>
    </div>
  );
}