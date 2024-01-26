import './Confirmation.scss';

import image from '../../images/icon-thank-you.svg';

export const Confirmation = () => {
  return(
    <div className="confirmation">
      <img src={image} alt="confirmed" className="confirmation__image" />

      <h1 className="form__title">
        Thank you!
      </h1>

      <p className="form__subtitle confirmation__text">
        Thanks for confirming your subscription! We hope you have fun 
        using our platform. If you ever need support, please feel free 
        to email us at support@loremgaming.com.
      </p>
    </div>
  );
}