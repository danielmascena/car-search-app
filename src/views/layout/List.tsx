// Component which renders list of items, e.g. car list
import React, { useState, useEffect, FunctionComponent, Dispatch } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import {
  ICar,
  Queries,
  SearchBySort,
  RemoveQuery,
  LoadingCars,
  CarsError,
  SetTotalPages,
  CarState
} from '../../types';

import { actionCreation } from '../../actions';

import Select from '../../components/Select';
import CarDetails from '../../components/CarDetails';
import Pagination from '../../components/Pagination';
import LoadingListItem from '../../components/LoadingListItem';
import Label from '../../components/Label';
import NavFilter from './NavFilter';

import './List.css';

const mapStateToProps = (state: CarState) => ({
  queries: state.queries,
  loading: state.loading,
  errorMsg: state.errorMsg
});

const ENDPOINT = '/api/cars';
const querify = (queries: Queries): string => {
  let fullQuery = '';
  const params = Object.keys(queries);
  for (let i = 0; i < params.length; i++) {
    const key = params[i];
    const value = queries[key];
    if (value) {
      fullQuery += i ? '&' : '?';
      fullQuery += `${key}=${value}`;
    }
  }
  return ENDPOINT + fullQuery;
};

let List: FunctionComponent<{
  queries: Queries;
  loading: boolean;
  errorMsg: string;
  dispatch: Dispatch<
    LoadingCars | SetTotalPages | CarsError | SearchBySort | RemoveQuery
  >;
}> = ({ queries, loading, errorMsg, dispatch }) => {
  const [cars, setCars] = useState<Array<number>>(new Array(10));
  const [totalCars, setTotalCars] = useState(0);
  const sortTypes = ['none', 'asc', 'des'];
  const sortLabels = ['None', 'Mileage - Ascending', 'Mileage - Descending'];

  const ListItem: FunctionComponent<{ indexItem: string }> = ({
    indexItem,
    children
  }) => (
    <li key={indexItem} role="row" className="list-car-item">
      {children}
    </li>
  );

  const mountCar = (car: ICar, index: number) => (
    <ListItem indexItem={car.stockNumber + car.modelName}>
      <CarDetails car={car}>
        <Link to={'/show/' + car.stockNumber} className="default-link">
          Show Detail
        </Link>
      </CarDetails>
    </ListItem>
  );

  useEffect(() => {
    const fetchCars = async () => {
      const url = querify(queries);
      await axios
        .get(url)
        .then(res => {
          setTotalCars(res.data.totalCarsCount);
          setCars(res.data.cars.map(mountCar));
          dispatch(actionCreation.setTotalPages(res.data.totalPageCount));
        })
        .catch(error => {
          setCars([]);
          dispatch(actionCreation.carsError('Something went wrong :('));
        });
    };
    fetchCars();
  }, [queries, dispatch]);

  const handleChangeSort = (index: number) => {
    const selectedSort = sortTypes[index];
    dispatch(
      index
        ? actionCreation.searchBySort(selectedSort)
        : actionCreation.removeQuery('sort')
    );
  };

  return (
    <React.Fragment>
      <NavFilter />
      {(
        <p style={{ textAlign: 'center', overflow: 'auto', color: 'red' }}>
          {errorMsg}
        </p>
      ) || null}
      <section className="car-table-container" role="table">
        <div className="row-header" role="rowgroup">
          <header className="car-table-header" role="row">
            <div role="columnheader">
              <h2 className="car-table-heading">Available cars</h2>
              <p className="car-showing-results">
                Showing {cars.length} of {totalCars} results
              </p>
            </div>
          </header>
          <section className="car-table-header" role="row">
            <div role="columnheader">
              <Label text="Sort By" idFor="sortByLbl" />
              <Select
                options={sortLabels}
                onChange={handleChangeSort}
                labelOption="None"
                labelByIds="sortByLbl"
              />
            </div>
          </section>
        </div>
        <ul className="cars-list" role="rowgroup">
          {loading
            ? cars.map((c, i) => (
                <ListItem indexItem={i + 'loading'}>
                  <LoadingListItem />
                </ListItem>
              ))
            : cars}
        </ul>
        <Pagination />
      </section>
    </React.Fragment>
  );
};

List = connect(mapStateToProps)(List);
export default List;
