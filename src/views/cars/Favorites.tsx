import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarDetails from '../../components/CarDetails';

const Favorites = () => {
  let [listOfFav, setListOfFav] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | undefined>();

  useEffect(() => {
    const getCar = async (idCar: string) => {
      await axios
        .get(`/api/cars/${idCar}`)
        .then(({ data }) =>
          setListOfFav(listOfFav => [
            ...listOfFav,
            <CarDetails car={data.car} />
          ])
        )
        .catch(err => setErrorMsg('Something went wrong'));
    };
    for (let key in window.localStorage) {
      if (
        window.localStorage.hasOwnProperty(key) &&
        key.startsWith('stockNum')
      ) {
        getCar(localStorage[key]);
      }
    }
    setIsLoading(false);
  }, []);

  return (
    <article style={styleFav.wrapper}>
      <header>
        <h1>Favorites Cars</h1>
      </header>
      {errorMsg || null}
      <p>Stock Number</p>
      {isLoading ? (
        <p id="load_status">Loading...</p>
      ) : (
        <ul style={styleFav.listOfFavorites}>
          {listOfFav.map((value: string, index: number) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      )}
    </article>
  );
};

const styleFav = {
  wrapper: {
    margin: 'auto',
    width: '80%'
  },
  listOfFavorites: {
    listStyle: 'none'
  }
};

export default Favorites;
