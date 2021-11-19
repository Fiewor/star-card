import {
  ORGANIZATION_LOGIN_REQUEST,
  ORGANIZATION_LOGIN_SUCCESS,
  ORGANIZATION_LOGIN_FAIL,
  ORGANIZATION_LOGOUT,
  ORGANIZATION_REGISTER_REQUEST,
  ORGANIZATION_REGISTER_SUCCESS,
  ORGANIZATION_REGISTER_FAIL,
  CREATE_EMPLOYEE_REQUEST,
  CREATE_EMPLOYEE_REQUEST_SUCCESS,
  CREATE_EMPLOYEE_REQUEST_FAIL,
  ORGANIZATION_DETAILS_REQUEST,
  ORGANIZATION_DETAILS_SUCCESS,
  ORGANIZATION_DETAILS_FAIL,
  GET_ALL_EMPLOYEE_REQUEST,
  GET_ALL_EMPLOYEE_SUCCESS,
  GET_ALL_EMPLOYEE_FAIL,
  GET_ALL_CARDS_REQUEST,
  GET_ALL_CARDS_SUCCESS,
  GET_ALL_CARDS_FAIL,
} from '../constants/organizationConstants';

export const organizationLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case ORGANIZATION_LOGIN_REQUEST:
      return { loading: true };
    case ORGANIZATION_LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        loading: false,
        success: true,
        error: false,
        OrganizationInfo: action.payload,
      };
    case ORGANIZATION_LOGIN_FAIL:
      return { loading: false, success: false, error: action.payload };
    case ORGANIZATION_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const organizationRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case ORGANIZATION_REGISTER_REQUEST:
      return { loading: true };
    case ORGANIZATION_REGISTER_SUCCESS:
      return { loading: false, organizationInfo: action.payload };
    case ORGANIZATION_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case ORGANIZATION_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const createEmployeeReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_EMPLOYEE_REQUEST:
      return { loading: true };
    case CREATE_EMPLOYEE_REQUEST_SUCCESS:
      return { loading: false, employeeInfo: action.payload };
    case CREATE_EMPLOYEE_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getOrganizationDetailsReducer = (
  state = { organizationDetails: [] },
  action
) => {
  switch (action.type) {
    case ORGANIZATION_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case ORGANIZATION_DETAILS_SUCCESS:
      return {
        loading: false,
        organizationDetails: action.payload,
      };
    case ORGANIZATION_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getAllEmployeeReducer = (state = { employees: [] }, action) => {
  switch (action.type) {
    case GET_ALL_EMPLOYEE_REQUEST:
      return { loading: true };
    case GET_ALL_EMPLOYEE_SUCCESS:
      return { loading: false, employees: action.payload };
    case GET_ALL_EMPLOYEE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getAllCardsReducer = (state = { cards: [] }, action) => {
  switch (action.type) {
    case GET_ALL_CARDS_REQUEST:
      return { loading: true };
    case GET_ALL_CARDS_SUCCESS:
      return { loading: false, cards: action.payload };
    case GET_ALL_CARDS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
