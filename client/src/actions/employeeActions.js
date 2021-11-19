import axios from "axios";
import {
  EMPLOYEE_LOGIN_REQUEST,
  EMPLOYEE_LOGIN_SUCCESS,
  EMPLOYEE_LOGIN_FAIL,
  EMPLOYEE_LOGOUT,
  CREATE_CARD_REQUEST,
  CREATE_CARD_REQUEST_SUCCESS,
  CREATE_CARD_REQUEST_FAIL,
} from "../constants/employeeConstants";
import { BACKEND_BASE_URL } from "../backendUrl";


export const employeeLogins = (employee_email, password) => async (dispatch) => {
    try {
      dispatch({
        type: EMPLOYEE_LOGIN_REQUEST,
      });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(`${BACKEND_BASE_URL}api/employee_login`, { employee_email, password },  config );
  
      dispatch({
        type: EMPLOYEE_LOGIN_SUCCESS,
        payload: data,
      });
  
      localStorage.setItem("employeeInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: EMPLOYEE_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


export const employeeLogout = () => (dispatch) => {
    localStorage.removeItem("employeeInfo");
    dispatch({ type: EMPLOYEE_LOGOUT });
    document.location.href = "/employee-login";
  };

export const createCards =
  (location, hazard_description, risked_resource, probability, impact,  existing_control, existing_prevention, rating, other_info) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CREATE_CARD_REQUEST,
      });

      const {
        employeeLogin: { employeeInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: ` ${employeeInfo.access_token}`,
        },
      };

      const { data } = await axios.post( `${BACKEND_BASE_URL}api/create_card`, { location, hazard_description, risked_resource, probability, impact,  existing_control, existing_prevention, rating, other_info }, config);

      dispatch({
        type: CREATE_CARD_REQUEST_SUCCESS,
        payload: data,
      });
      
    }  catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "unauthenticated") {
        dispatch(employeeLogout());
      }
      dispatch({
        type: CREATE_CARD_REQUEST_FAIL,
        payload: message,
      });
    }
  };