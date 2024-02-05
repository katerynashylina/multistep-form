import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import './App.scss';
import './utils/normalize.scss';
import { PersonalInfo } from './components/PersonalInfo/PesonalInfo';
import { Plan } from './components/Plan/Plan';
import { AddOns } from './components/AddOns/AddOns';
import { Summary } from './components/Summary/Summary';
import { Navigation } from './components/Navigation/Navigation';
import { ButtonNext } from './components/ButtonNext/ButtonNext';
import { ButtonConfirm } from './components/ButtonConfirm/ButtonConfirm';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { emailRegex, phoneRegex, steps } from './helpers/consts';
import { Confirmation } from './components/Confirmation/Confirmation';
import { BackButton } from './components/BackButton/BackButton';
import { useLocalStorage } from './helpers/useLocalStorage';
import { useEffect, useState } from 'react';
import { setIsValid } from './features/isValid';
import { FormType } from './types/FormType';

export const App = () => {
  const location = useLocation();
  const currentURL = location.pathname;
  const currentStepNumber = useAppSelector(state => state.currentStepNumber.currentStepNumber);
  const dispatch = useAppDispatch();

  const [currentAdds, setCurrentAdds] = useLocalStorage([], 'add-ons');

  const initialValues = { name: "", email: "", phone: "" };
  const [formData, setFormData] = useLocalStorage({ ...initialValues }, 'form-info');
  const [formErrors, setFormErrors] = useState({ ...initialValues });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    // Phone validation
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Valid 10-digit phone number is required';
    }

    const isFormValid =
      !newErrors.name && !newErrors.email && !newErrors.phone;

    setFormErrors(newErrors);
    return isFormValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: FormType) => ({
      ...prevData,
      [name]: value,
    }));

    const isValidForm = validateForm();
    dispatch(setIsValid(isValidForm));
  };

  const handleSubmit = () => {
    const isValidForm = validateForm();
    dispatch(setIsValid(isValidForm));
  }

  useEffect(() => {dispatch(setIsValid(false))}, []);

  return(
    <div className="page">
      <div className="page__container">
        <Navigation />

        <div className="page__right">
          <div className="page__content">
            <Routes>
              <Route
                path="/steps/1"
                element={(
                  <PersonalInfo
                    formData={formData}
                    formErrors={formErrors}
                    handleInputChange={handleInputChange}
                  />
                )}
              />
              <Route
                path="/"
                element={
                  <Navigate to="/steps/1" replace />
                }
              />

              <Route
                path="/steps/2"
                element={(
                  <Plan />
                )}
              />
              <Route
                path="/steps/3"
                element={(
                  <AddOns
                    currentAdds={currentAdds}
                    setCurrentAdds={setCurrentAdds}
                  />
                )}
                />
              <Route
                path="/steps/4"
                element={(
                  <Summary
                    currentAdds={currentAdds}
                    setCurrentAdds={setCurrentAdds}
                  />
                )}
              />

              <Route
                path='/steps/confirmation'
                element={(
                  <Confirmation />
                )}
              />
            </Routes>
          </div>

          <div className="form__container buttons">
            {(currentURL !== '/steps/confirmation') && (
                <>
                <BackButton />

                {currentStepNumber === steps[3].number ? (
                  <ButtonConfirm />
                ) : (<ButtonNext
                  handleSubmit={handleSubmit}
                />)}
                </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}