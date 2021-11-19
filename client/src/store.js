import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  organizationLoginReducer,
  organizationRegisterReducer,
  createEmployeeReducer,
  getOrganizationDetailsReducer,
  getAllEmployeeReducer,
  getAllCardsReducer
} from "./reducers/organizationReducers";
import{
  employeeLoginReducer,
  createCardReducer
}from "./reducers/employeeReducer"


const reducer = combineReducers({
  organizationLogin: organizationLoginReducer,
  organizationRegister: organizationRegisterReducer,
  createEmployee: createEmployeeReducer,
  getOrganizationDetails: getOrganizationDetailsReducer,
  getAllEmployee: getAllEmployeeReducer,
  getAllCards: getAllCardsReducer,
  employeeLogin: employeeLoginReducer,
  createCard: createCardReducer
});

const organizationInfoFromStorage = localStorage.getItem("organizationInfo")
? JSON.parse(localStorage.getItem("organizationInfo"))
: null;

const employeeInfoFromStorage = localStorage.getItem("employeeInfo")
? JSON.parse(localStorage.getItem("employeeInfo"))
: null;

const initialState = {
  organizationLogin: { organizationInfo: organizationInfoFromStorage },
  employeeLogin: { employeeInfo: employeeInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
