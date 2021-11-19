import {
    EMPLOYEE_LOGIN_REQUEST,
    EMPLOYEE_LOGIN_SUCCESS,
    EMPLOYEE_LOGIN_FAIL,
    EMPLOYEE_LOGOUT,
    CREATE_CARD_REQUEST,
    CREATE_CARD_REQUEST_SUCCESS,
    CREATE_CARD_REQUEST_FAIL,
  } from "../constants/employeeConstants";

  export const employeeLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case EMPLOYEE_LOGIN_REQUEST:
        return { loading: true };
      case EMPLOYEE_LOGIN_SUCCESS:
        return { loading: false, success: true, error: false, employeeInfo: action.payload };
      case EMPLOYEE_LOGIN_FAIL:
        return { loading: false, success: false, error: action.payload };
      case EMPLOYEE_LOGOUT:
        return {};
      default:
        return state;
    }
  };

export const createCardReducer = (state = {}, action) => {
        switch (action.type) {
          case CREATE_CARD_REQUEST:
            return { loading: true };
          case CREATE_CARD_REQUEST_SUCCESS:
            return { loading: false, success: true, error: false, cardInfo: action.payload };
          case CREATE_CARD_REQUEST_FAIL:
            return { loading: false, success: false, error: action.payload };
          default:
            return state;
        }
      }