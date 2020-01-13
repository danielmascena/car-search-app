import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import CarDetails from '../../components/CarDetails';
import Button from '../../components/Button';
import './Show.css';

const useLocalStorage = (stockNum: string) => {
  const localKey = `stockNum${stockNum}`;
  const [isSaved, setIsSaved] = useState(!!localStorage.getItem(localKey));
  const [saveText, setSaveText] = useState<string | undefined>();

  useEffect(() => {
    if (isSaved) {
      localStorage.setItem(localKey, stockNum);
      setSaveText('Unsave');
    } else {
      localStorage.removeItem(localKey);
      setSaveText('Save');
    }
  }, [isSaved, localKey, stockNum]);

  return [setIsSaved, saveText];
};

const Show: React.FC = ({ match }) => {
  const idCar = match.params.id;
  const [car, setCar] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | undefined>();
  const [setIsSaved, labelButton] = useLocalStorage(idCar);
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    const getCar = async () => {
      await axios
        .get(`/api/cars/${idCar}`)
        .then(({ data }) =>
          setCar(
            <CarDetails car={data.car}>
              <p style={{ lineHeight: 2 }}>
                This car is currently available and can be delivered as soon as
                tomorrow morning. Please be aware that delivery times shown in
                this page are not definitive and may change our to bad weather
                conditions.
              </p>
            </CarDetails>
          )
        )
        .catch(err => {
          setErrorMsg('Something went wrong');
          console.log(car);
        })
        .finally(() => setIsLoading(false));
    };
    if (isNaN(idCar)) {
      setNotFound(true);
    } else {
      getCar();
    }
  }, [idCar]);

  const addRemoveItem = () =>
    setIsSaved((isSaved: boolean) => !isSaved /* isSaved ? false : true */);

  return notFound ? (
    <Redirect to="/notfound" />
  ) : (
    <>
      {errorMsg || null}
      {isLoading ? (
        <p id="load_status">Loading...</p>
      ) : (
        car && (
          <section className="show-container">
            {car}
            <aside className="save-widget">
              <p>
                If you like this car, click the button and save it in your
                collection of favorite items.
              </p>
              <Button click={addRemoveItem}>{labelButton}</Button>
            </aside>
          </section>
        )
      )}
    </>
  );
};

export default Show;
