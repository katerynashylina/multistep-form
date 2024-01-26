import './AddOnCard.scss';

import { terms } from '../../utils/consts';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setAddedOns } from '../../features/addedOns';
import { AddOn } from '../../types/AddOn';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

type Props = {
  addOn: AddOn,
  handleAddOnSelection: (selectedAddOn: AddOn) => void,
}

export const AddOnCard: React.FC<Props> = ({ addOn, handleAddOnSelection }) => {
  const { id, name, text, price } = addOn;

  const term = useAppSelector(state => state.term.term);

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const storedAdds = JSON.parse(localStorage.getItem('add-ons') || '[]');
    const isAlreadyAdded = storedAdds.some((storedAdd: AddOn) => storedAdd.id === addOn.id);

    setIsSelected(isAlreadyAdded);
  }, [addOn.id]);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
    handleAddOnSelection(addOn);
  };

  return(
    <div className="card">
      <label
        htmlFor={`${id}`}
        className={classNames("card__container", {
          "card__container--selected" : isSelected,
        })}
      >
        <div className='card__form'>
          <input
            type="checkbox"
            className="card__input"
            id={`${id}`}
            checked={isSelected}
            onChange={toggleSelection}
          />
          
          <div className="card__info">
            <div className="card__name">{name}</div>
            <div className="card__text">{text}</div>
          </div>
        </div>

        <p className="card__price">
          {term === terms[0] ? `+$${price}/mo` : `+$${price * 10}/yr`}
        </p>
      </label>
    </div>
  );
}