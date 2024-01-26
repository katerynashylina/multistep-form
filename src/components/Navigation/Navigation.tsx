import { steps } from "../../utils/consts";
import { Step } from "../Step/Step";

import './Navigation.scss';

export const Navigation = () => {
  return(
    <div className="navigation">
      {steps.map(step => (
        <Step
          key={step.number}
          number={step.number}
          text={step.text}
        />
      ))}
    </div>
  );
}