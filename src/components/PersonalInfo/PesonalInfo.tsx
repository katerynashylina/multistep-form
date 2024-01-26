import classNames from 'classnames';

import './PesonalInfo.scss';
import { useEffect, useState } from 'react';
import { FormType } from '../../types/FormType';

type Props = {
  formData: FormType,
  formErrors: FormType,
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const PersonalInfo: React.FC<Props> = ({ formData, formErrors, handleInputChange }) => {
  return (
    <div className="personal-info">
      <div className="form__container">
        <h1 className="form__title">Personal info</h1>

        <p className="form__subtitle">Please provide your name, email address, and phone number.</p>

        <form
          className="personal-info__form form"
        >
          <label className="form__name form__label">
            <div className="form__label--wrapper">
              <p>Name</p>
              <p className="form__label--error">
                {formErrors.name}
              </p>
            </div>
            <input
              type="text"
              placeholder="e.g. Stephen King"
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              className={classNames('form__input', {
                'form__input--error': formErrors.name.length,
                'form__input--valid': !formErrors.name.length,
              })}
            />
          </label>
          <label className="form__email form__label">
            <div className="form__label--wrapper">
              <p>Email address</p>
              <p className="form__label--error">
                {formErrors.email}
              </p>
            </div>
            <input
              type="email"
              placeholder="e.g. stephenking@lorem.com"
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className={classNames('form__input', {
                'form__input--error': formErrors.email.length,
                'form__input--valid': !formErrors.email.length,
              })}
            />
          </label>
          <label className="form__phone form__label">
            <div className="form__label--wrapper">
              <p>Phone Number</p>
              <p className="form__label--error">
                {formErrors.phone}
              </p>
            </div>
            <input
              type="phone"
              placeholder="e.g. +1 234 567 890"
              name='phone'
              value={formData.phone}
              onChange={handleInputChange}
              className={classNames('form__input', {
                'form__input--error': formErrors.phone.length,
                'form__input--valid': !formErrors.phone.length,
              })}
            />
          </label>
        </form>
      </div>
    </div>
  );
};