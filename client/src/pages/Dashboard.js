/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../components/Dashboard.css';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import { logout } from '../actions/organizationActions';
import axios from 'axios';
import Moment from 'react-moment';

const Dashboard = ({ history }) => {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  // const organizationLogin = useSelector(state => state.organizationLogin);
  // const { organizationInfo } = organizationLogin;

  const [organizationInfo, setOrganisationInfo] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  // useEffect(() => {
  //   if (!organizationInfo) {
  //     history.push('/login');
  //   } else {
  //     // console.log(OrganizationInfo);
  //   }
  // }, [dispatch, history]);

  const logoutHandler = () => {
    dispatch(logout());
  };
  const fetchUserFromLocalStorage = async () => {
    try {
      const res = await JSON.parse(localStorage.getItem('OrganizationInfo'));
      setOrganisationInfo(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCard = async () => {
    const token = JSON.parse(localStorage.getItem('organizationInfo'));

    console.log(token, organizationInfo);
    const config = {
      headers: {
        Authorization: token.access_token,
      },
    };
    try {
      const res = await axios.get(
        'https://star-card.herokuapp.com/api/all_cards',
        config
      );
      console.log(res);
      setCards(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(cards);
  useEffect(() => {
    
    fetchUserFromLocalStorage();
    fetchCard();
    // setOrganisationInfo(fetchUserFromLocalStorage());
  }, []);

  console.log(organizationInfo);
  return (
    <section className="dashboard">
      {width > breakpoint && <Sidebar />}

      <div className="main-page">
        <div className="main-page-nav">
          <div>
            <h3>
              Welcome back, {organizationInfo && organizationInfo?.data.name}
            </h3>
            <p>
              Enter your risk assessment report on the job you just conmpleted
            </p>
          </div>

          <div className="main-page-nav-profile">
            <a href="#">
              <i className="fas fa-search"></i>
              <i className="far fa-bell"></i>
            </a>

            <div style={{ display: 'flex', paddingLeft: '10px' }}>
              <p style={{ paddingRight: '10px' }}>
                {organizationInfo && organizationInfo?.data.name}
              </p>
              <div>
                <p>
                  <a href="#" className="logout" onClick={logoutHandler}>
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-details">
          <div className="dashboard-filter">
            <div>
              <p style={{ paddingRight: '10px' }}>
                <i className="fab fa fa-facebook"></i> Filter
              </p>
              <div
                style={{ paddingRight: '10px' }}
                className="dashboard-filter-input"
              >
                <p className="search">
                  <i className="fas fa fa-search"></i>
                </p>
                <input type="" text />
              </div>
              <Link to="/">View Summary</Link>
            </div>
          </div>

          <div className="dashboard-data">
            <div className="dashboard-header-details">
              <p>ID</p>
              <p>Assigned To</p>
              <p>Report Summary</p>
              <p>Time</p>
              <p>Date</p>
              <p>Risk Impact</p>
              <p>Status</p>
              <p>View Details</p>
            </div>

            <div className="db-grid">
              <p>0001</p>
              <p>Daniel Riverdale</p>
              <p>Fire Hazard Report</p>
              <p>17:00</p>
              <p>09/21</p>
              <p>High</p>
              <p>
                <button className="resolved-btn">Resolved</button>
              </p>
              <p>...</p>
            </div>

            {cards &&
              cards.map(
                ({
                  case_id,
                  employee,
                  hazard_description,
                  impact,
                  updated_at,
                  probability,
                }) => {
                  return (
                    <div className="db-grid">
                      <p>{case_id}</p>
                      <p>{employee}</p>
                      <p>{impact}</p>
                      <p>
                        <Moment format="YYYY/MM/DD">{updated_at}</Moment>
                      </p>
                      <p>
                        <Moment format="hh:mm:ss">{updated_at}</Moment>
                      </p>
                      <p>{hazard_description}</p>
                      <p>
                        <button className="resolved-btn">{probability}</button>
                      </p>
                      <p>....</p>
                    </div>
                  );
                }
              )}
            {/* 

            <div className="db-grid">
              <p>0003</p>
              <p>Angie Jones</p>
              <p>Personneel Hazard</p>
              <p>16:00</p>
              <p>08/20</p>
              <p>High</p>
              <p>
                <button className="resolved-btn">Resolved</button>
              </p>
              <p>...</p>
            </div> */}

            {/* <div className="db-grid">
              <p>0001</p>
              <p>Daniel Riverdale</p>
              <p>Fire Hazard Report</p>
              <p>17:00</p>
              <p>09/21</p>
              <p>High</p>
              <p>
                <button className="resolved-btn">Resolved</button>
              </p>
              <p>...</p>
            </div>

            <div className="db-grid">
              <p>0003</p>
              <p>Angie Jones</p>
              <p>Personneel Hazard</p>
              <p>16:00</p>
              <p>08/20</p>
              <p>High</p>
              <p>
                <button className="resolved-btn">Resolved</button>
              </p>
              <p>...</p>
            </div>

            <div className="db-grid">
              <p>0002</p>
              <p>Bob Faraday</p>
              <p>Equipment malfunction</p>
              <p>7:00</p>
              <p>08/21</p>
              <p>Low</p>
              <p>
                <button className="resolved-btn">Pending</button>
              </p>
              <p>...</p>
            </div> */}
            {/* 
            <div className="db-grid">
              <p>0002</p>
              <p>Bob Faraday</p>
              <p>Equipment malfunction</p>
              <p>7:00</p>
              <p>08/21</p>
              <p>Low</p>
              <p>
                <button className="resolved-btn">Pending</button>
              </p>
              <p>...</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
