import { useState } from 'react';
import classNames from 'classnames';

import './Plan.scss';
import { plans, terms } from '../../utils/consts';
import { PlanCard } from '../PlanCard/PlanCard';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setTerm } from '../../features/term';
import { PlanType } from '../../types/PlanType';
import { setCurrentPlan } from '../../features/currentPlan';

export const Plan = () => {
  const term = useAppSelector(state => state.term.term);
  const dispatch = useAppDispatch();


  const handlePlanChange = (plan: PlanType) => {
    dispatch(setCurrentPlan(plan));
  };

  const handleTermChange = () => {
    const newTerm = term === terms[0] ? terms[1] : terms[0];

    dispatch(setTerm(newTerm));
  };

  return(
    <div className="plan">
      <div className="form__container">
        <h1 className='form__title'>
          Select your plan
        </h1>

        <p className="form__subtitle">
          You have the option of monthly or yearly billing.
        </p>

        <div className="plan__cards">
          {plans.map(plan => (
            <PlanCard
              key={plan.id}
              plan={plan}
              handlePlanChange={handlePlanChange}
            />
          ))}
        </div>
        
        <div className="plan__term term">
          <p
            className={classNames("term__text", {
              "term__text--active": term === terms[0],
            })}
          >
            Monthly
          </p>

          <div
            className="term__switcher"
            onClick={handleTermChange}
          >
            <div
              className={classNames('term__switcher--circle', {
                'term__switcher--circle--month': term === terms[0],
                'term__switcher--circle--year': term === terms[1],
              })}
            ></div>
          </div>

          <p
            className={classNames("term__text", {
              "term__text--active": term === terms[1],
            })}
          >
            Yearly
          </p>
        </div>
      </div>
    </div>
  );
}