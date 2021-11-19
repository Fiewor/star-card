import axios from "axios";
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
  GET_ALL_CARDS_FAIL
} from "../constants/organizationConstants";
import { BACKEND_BASE_URL } from "../backendUrl";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: ORGANIZATION_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(`${BACKEND_BASE_URL}api/login`, { email, password },  config );

    dispatch({
      type: ORGANIZATION_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("organizationInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ORGANIZATION_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("organizationInfo");
  dispatch({ type: ORGANIZATION_LOGOUT });
  document.location.href = "/login";
};

export const register =
  (name, email, phone, organization, industry, password, password_confirmation) => async (dispatch) => {
    try {
      dispatch({
        type: ORGANIZATION_REGISTER_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post( `${BACKEND_BASE_URL}api/register`, { name, email, phone, organization, industry, password, password_confirmation }, config);

      dispatch({
        type: ORGANIZATION_REGISTER_SUCCESS,
        payload: data,
      });

      dispatch({
        type: ORGANIZATION_LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem("OrganizationInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: ORGANIZATION_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const createEmployees =
  (employee_name, employee_email, password) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CREATE_EMPLOYEE_REQUEST,
      });

      const {
        organizationLogin: { organizationInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: ` ${organizationInfo.access_token}`,
        },
      };

      const { data } = await axios.post( `${BACKEND_BASE_URL}api/create_employee`, { employee_name, employee_email, password }, config);

      dispatch({
        type: CREATE_EMPLOYEE_REQUEST_SUCCESS,
        payload: data,
      });

    }  catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "unauthenticated") {
        dispatch(logout());
      }
      dispatch({
        type: ORGANIZATION_DETAILS_FAIL,
        payload: message,
      });
    }
  };

export const getOrganizationDetails = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORGANIZATION_DETAILS_REQUEST,
      });
  
      const {
        organizationLogin: { organizationInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: ` ${organizationInfo.access_token}`,
        },
      };
  
      const { data } = await axios.get(`${BACKEND_BASE_URL}api/organization_details`, config);
  
      dispatch({
        type: ORGANIZATION_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "unauthenticated") {
        dispatch(logout());
      }
      dispatch({
        type: ORGANIZATION_DETAILS_FAIL,
        payload: message,
      });
    }
  };


export const getAllEmployees = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_ALL_EMPLOYEE_REQUEST,
    });

    const {
      organizationLogin: { organizationInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: ` ${organizationInfo.access_token}`,
      },
    };

    const { data } = await axios.get(`${BACKEND_BASE_URL}api/all_employees`, config);

    dispatch({
      type: GET_ALL_EMPLOYEE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "unauthenticated") {
      dispatch(logout());
    }
    dispatch({
      type: GET_ALL_EMPLOYEE_FAIL,
      payload: message,
    });
  }
};

export const getAllCards = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_ALL_CARDS_REQUEST,
    });

    const {
      organizationLogin: { organizationInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: ` ${organizationInfo.access_token}`,
      },
    };

    const { data } = await axios.get(`${BACKEND_BASE_URL}api/all_cards`, config);

    dispatch({
      type: GET_ALL_CARDS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "unauthenticated") {
      dispatch(logout());
    }
    dispatch({
      type: GET_ALL_CARDS_FAIL,
      payload: message,
    });
  }
};