import { AddOnCard } from '../AddOnCard/AddOnCard';
import './AddOns.scss';

import { addOns } from '../../helpers/consts';
import { AddOn } from '../../types/AddOn';

type Props = {
  currentAdds: AddOn[],
  setCurrentAdds: React.Dispatch<React.SetStateAction<AddOn[]>>,
}

export const AddOns: React.FC<Props> = ({ currentAdds, setCurrentAdds }) => {
  const handleAddOnSelection = (selectedAddOn: AddOn) => {
    setCurrentAdds((prevAdds) => {
      const isAlreadySelected = prevAdds.some((addOn) => addOn.id === selectedAddOn.id);
      
      if (isAlreadySelected) {
        return prevAdds.filter((addOn) => addOn.id !== selectedAddOn.id);
      } else {
        return [...prevAdds, selectedAddOn];
      }
    });
  };

  return(
    <div className="add-ons">
      <div className="form__container">
        <h1 className='form__title'>Pick add-ons</h1>

        <p className="form__subtitle">
          Add-ons help enhance your gaming experience.
        </p>

        <form onSubmit={(e) => e.preventDefault}>
          <div className="add-ons__cards">
            {addOns.map(addOn => (
              <AddOnCard
                key={addOn.id}
                addOn={addOn}
                handleAddOnSelection={handleAddOnSelection}
              />
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}