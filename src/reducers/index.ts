//import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';
import { CarState, ActionTypes, Queries } from '../types';

const initialState: CarState = {
  queries: {
    page: 1,
    color: '',
    manufacturer: '',
    sort: ''
  },
  loading: true,
  errorMsg: '',
  totalPages: 0
};

const reducer = (state: CarState = initialState, action: ActionTypes) => {
  const { type, payload } = action;
  const { queries }: Queries = state;
  switch (type) {
    case types.SEARCH_BY_PAGE: {
      return {
        ...state,
        queries: { ...(queries as {}), page: payload }
      };
    }
    case types.SEARCH_BY_COLOR: {
      return {
        ...state,
        queries: { ...(queries as {}), color: payload }
      };
    }
    case types.SEARCH_BY_MANUFACTURER: {
      return {
        ...state,
        queries: { ...(queries as {}), manufacturer: payload }
      };
    }
    case types.SEARCH_BY_SORT: {
      return {
        ...state,
        queries: { ...(queries as {}), sort: payload }
      };
    }
    case types.REMOVE_QUERY: {
      let withoutQuery: Queries = {};
      for (let key in queries) {
        if (key !== payload) {
          withoutQuery[key] = queries[key];
        }
      }
      return {
        ...state,
        queries: withoutQuery
      };
    }
    case types.LOADING_CARS: {
      return {
        ...state,
        loading: payload
      };
    }
    case types.COMPLETE_LOADING: {
      return {
        ...state,
        loading: payload
      };
    }
    case types.CARS_ERROR: {
      const { errorMsg, loading, totalPages } = payload;
      return {
        ...state,
        errorMsg: errorMsg,
        loading: loading,
        totalPages: totalPages
      };
    }
    case types.TOTAL_PAGES: {
      const { errorMsg, loading, totalPages } = payload;
      return {
        ...state,
        totalPages: totalPages,
        loading: loading,
        errorMsg: errorMsg
      };
    }
    default:
      return state;
  }
};

export default reducer;
