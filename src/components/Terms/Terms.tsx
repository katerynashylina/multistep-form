import { useAppSelector } from "../../app/hooks";
import { terms } from "../../helpers/consts";

type Props = {
  price: number,
}

export const Terms: React.FC<Props> = ({ price }) => {
  const term = useAppSelector(state => state.term.term);

  return (
    <>
    {term === terms[0] ? `+$${price}/mo` : `+$${price * 10}/yr`}
    </>
  );
}