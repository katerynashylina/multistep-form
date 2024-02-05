import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setTerm } from '../../features/term';
import { AddOn } from '../../types/AddOn';
import { terms } from '../../helpers/consts';
import './Summary.scss';
import { Terms } from '../Terms/Terms';

type Props = {
  currentAdds: AddOn[],
  setCurrentAdds: React.Dispatch<React.SetStateAction<AddOn[]>>,
}

export const Summary: React.FC<Props> = ({ currentAdds, setCurrentAdds }) => {
  const term = useAppSelector(state => state.term.term);
  const currentPlan = useAppSelector(state => state.currentPlan.currentPlan);
  const dispatch = useAppDispatch();

  const handleTermChange = () => {
    const newTerm = term === terms[0] ? terms[1] : terms[0];
    dispatch(setTerm(newTerm));
  }

  const total = currentAdds.reduce(
    (accumulator, currentAdd) => accumulator + currentAdd.price, currentPlan.price
  );

  return(
    <div className="summary">
      <div className="form__container">
        <h1 className='form__title'>Finishing up</h1>

        <p className="form__subtitle">
          Double-check everything looks OK before confirming.
        </p>

        <div className="summary__wrap">
          <div className="summary__main">
            <div>
              <p className="summary__name">
                {term === terms[0]
                  ? 'Advanced (Monthly)'
                  : 'Advanced (Yearly)'
                }
              </p>

              <button
                className='summary__change'
                onClick={handleTermChange}
              >
                Change
              </button>
            </div>

            <p className="summary__price">
              <Terms
                price={currentPlan.price}
              />
            </p>
          </div>

          <ul className="summary__list">
            <div className="summary__list--wrap">
              {currentAdds.map(addedOn => (
                <li
                  className="summary__list--element"
                  key={addedOn.id}
                >
                  {addedOn.name}
                </li>
              ))}
            </div>

            <div className="summary__list--wrap">
              {currentAdds.map(addedOn => (
                <li
                  className="summary__list--price"
                  key={addedOn.id}
                >
                  <Terms
                    price={addedOn.price}
                  />
                </li>
              ))}
            </div>
          </ul>
        </div>

        <p className="summary__total">
          <p className="summary__total--text">
            {`Total (per ${
              term === terms[0] ? 'month' : 'year'
            })`}
          </p>

          <p className="summary__total--price">
            <Terms
              price={total}
            />
          </p>
        </p>
      </div>
    </div>
  );
}