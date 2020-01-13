import * as types from '../constants/ActionTypes';
import {
  SearchByPage,
  SearchByManufacturer,
  SearchByColor,
  SearchBySort,
  RemoveQuery,
  LoadingCars,
  CompleteLoading,
  CarsError,
  SetTotalPages
} from '../types';

export const actionCreation = {
  searchByPage: (page: number): SearchByPage => {
    return {
      type: types.SEARCH_BY_PAGE,
      payload: page
    };
  },
  searchByColor: (color: string): SearchByColor => {
    return {
      type: types.SEARCH_BY_COLOR,
      payload: color
    };
  },
  searchByManufacturer: (manufacturer: string): SearchByManufacturer => {
    return { type: types.SEARCH_BY_MANUFACTURER, payload: manufacturer };
  },
  searchBySort: (sort: string): SearchBySort => {
    return { type: types.SEARCH_BY_SORT, payload: sort };
  },
  removeQuery: (query: string): RemoveQuery => ({
    type: types.REMOVE_QUERY,
    payload: query
  }),
  loadingCars: (): LoadingCars => ({
    type: types.LOADING_CARS,
    payload: true
  }),
  completeLoading: (): CompleteLoading => ({
    type: types.COMPLETE_LOADING,
    payload: false
  }),
  carsError: (errorMsg: string): CarsError => ({
    type: types.CARS_ERROR,
    payload: {
      errorMsg,
      loading: false,
      totalPages: 0
    }
  }),
  setTotalPages: (total: number): SetTotalPages => ({
    type: types.TOTAL_PAGES,
    payload: {
      totalPages: total,
      loading: false,
      errorMsg: ''
    }
  })
};
