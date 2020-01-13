import * as types from '../constants/ActionTypes';

export interface Mileage {
  number: number;
  unit: string;
}
export interface ICar {
  manufacturerName: string;
  stockNumber: number;
  modelName: string;
  color: Color;
  fuelType: string;
  pictureUrl: string;
  mileage: Mileage;
}
export interface Model {
  name: string;
  uuid: string;
}
export interface Manufacturer {
  name: string;
  models: Model[];
  uuid: string;
}
export interface Queries {
  [key: string]: string | number;
  page: number;
  color: string;
  manufacturer: string;
  sort: string;
}
export interface CarState {
  queries: Queries;
  loading: boolean;
  errorMsg: string;
  totalPages: number;
}
export interface SearchByPage {
  type: types.SEARCH_BY_PAGE;
  payload: number;
}
export interface SearchByColor {
  type: types.SEARCH_BY_COLOR;
  payload: string;
}
export interface SearchByManufacturer {
  type: types.SEARCH_BY_MANUFACTURER;
  payload: string;
}
export interface SearchBySort {
  type: types.SEARCH_BY_SORT;
  payload: string;
}
export interface RemoveQuery {
  type: types.REMOVE_QUERY;
  payload: string;
}
export interface LoadingCars {
  type: types.LOADING_CARS;
  payload: boolean;
}
export interface CompleteLoading {
  type: types.COMPLETE_LOADING;
  payload: boolean;
}
export interface CarsError {
  type: types.CARS_ERROR;
  payload: {
    errorMsg: string;
    loading: boolean;
    totalPages: number;
  };
}
export interface SetTotalPages {
  type: types.TOTAL_PAGES;
  payload: {
    totalPages: number;
    loading: boolean;
    errorMsg: string;
  };
}
export type ActionTypes =
  | SearchByColor
  | SearchByManufacturer
  | SearchByPage
  | SearchBySort
  | RemoveQuery
  | LoadingCars
  | CompleteLoading
  | CarsError
  | SetTotalPages;

export type Color =
  | 'red'
  | 'blue'
  | 'green'
  | 'black'
  | 'yellow'
  | 'white'
  | 'silver';
