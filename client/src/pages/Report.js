/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../components/Report.css";
import Sidebar from "../components/Sidebar";
import { employeeLogout, createCards } from "../actions/employeeActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
//location, hazard_description, risked_resource, probability, impact,  existing_control, existing_prevention, rating, other_info, media
const Report = () => {
  const [location, setLocation] = useState("");
  const [hazard_description, setHazard_description] = useState("");
  const [risked_resource, setRisked_resource] = useState("");
  const [probability, setProbability] = useState("");
  const [impact, setImpact] = useState("");
  const [existing_control, setExisting_control] = useState("");
  const [existing_prevention, setExisting_prevention] = useState("");
  const [rating, setRating] = useState("");
  const [other_info, setOther_info] = useState("");
  // const [media, setMedia] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  const employeeLogin = useSelector((state) => state.employeeLogin);
  const { employeeInfo } = employeeLogin;

  const createCard = useSelector((state) => state.createCard);
  const { loading, error, cardInfo } = createCard;

  useEffect(() => {
    if (!employeeInfo) {
      window.location = "/employee-login";
    } else {
      // console.log(OrganizationInfo);
    }
  }, [dispatch, employeeInfo]);

  const logoutHandler = () => {
    dispatch(employeeLogout());
  };

  useEffect(() => {
    if (cardInfo) {
      alert("Card Created Successfully");
      // history.push("/report");
    }
    if (error) {
      setMessage(error);
    }
  }, [dispatch, cardInfo, error]);

  const createCardHandler = (e) => {
    e.preventDefault();
    dispatch(
      createCards(
        location,
        hazard_description,
        risked_resource,
        probability,
        impact,
        existing_control,
        existing_prevention,
        rating,
        other_info,
        // media
      )
    );
  };

  return (
    <section className="report">
      {width > breakpoint && <Sidebar />}

      <div className="main-page">
        <div className="main-page-nav">
          <div>
            <h3>Welcome back, {employeeInfo?.data?.employee_name}</h3>
            <p>
              Enter your risk assessment report on the job you just conmpleted
            </p>
          </div>

          <div className="main-page-nav-profile">
            <a href="#">
              <i className="fas fa-search"></i>
              <i className="far fa-bell"></i>
            </a>

            <div className="profile-user">
              <p>{employeeInfo?.data?.employee_name}</p>
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

        <div className="risk-form">
          <div className="risk-form-div">
            <div className="risk-form-title">
              <h3>Risk Assessment</h3>
              <p>
                Fill the form with all relevant information on the just
                completed job
              </p>
            </div>

            <div className="risk-form-input">
              {message && <Message variant="danger">{message}</Message>}
              {error && <Message variant="danger">{error}</Message>}
              {loading && <Loader />}
              <form onSubmit={createCardHandler}>
                <div className="risk-input-group-1">
                  {/* <div>
                    <label>Case ID</label>
                    <input type="text" className="risk-input-text" required />
                  </div>

                  <div>
                    <label>Date</label>
                    <input
                      type="date"
                      value="2021-01-30"
                      className="risk-input-text"
                      required
                    />
                  </div>

                  <div>
                    <label>Time</label>
                    <input type="time" />
                  </div> */}

                  <div>
                    <label>Location</label>
                    <input
                      type="text"
                      className="risk-input-text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>

                <div className="risk-input-group-2">
                  <div>
                    <label>Hazard Description</label>
                    <input
                      type="text"
                      className="risk-input-text"
                      value={hazard_description}
                      onChange={(e) => setHazard_description(e.target.value)}
                    />
                  </div>

                  <div>
                    <label>Resources at Risk</label>
                    <input
                      type="text"
                      className="risk-input-text"
                      value={risked_resource}
                      onChange={(e) => setRisked_resource(e.target.value)}
                    />
                  </div>

                  <div>
                    <label>Risk Probability</label>
                    <select
                      value={probability}
                      onChange={(e) => setProbability(e.target.value)}
                    >
                      <option>Select a risk probability</option>
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </select>
                  </div>
                </div>

                <div className="risk-input-group-3">
                  <div>
                    <label>Risk Impact</label>
                    <select
                      value={impact}
                      onChange={(e) => setImpact(e.target.value)}
                    >
                      <option>Select the level of the risk impact</option>
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </select>
                  </div>

                  <div>
                    <label>Existing Control Measure</label>
                    <input
                      type="text"
                      className="risk-input-text"
                      value={existing_control}
                      onChange={(e) => setExisting_control(e.target.value)}
                    />
                  </div>
                </div>

                <div className="risk-input-group-4">
                  <div>
                    <label>
                      Existing Measures for Prevention and Mitigation
                    </label>
                    <input
                      type="text"
                      className="risk-input-text"
                      value={existing_prevention}
                      onChange={(e) => setExisting_prevention(e.target.value)}
                    />
                  </div>

                  <div>
                    <label>Hazard Rating</label>
                    <select
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    >
                      <option>Select the hazard rating</option>
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </select>
                  </div>
                </div>

                <div className="risk-input-group-5">
                  <div>
                    <label>Additional Information</label>
                    <input
                      type="text"
                      className="risk-input-text"
                      value={other_info}
                      onChange={(e) => setOther_info(e.target.value)}
                    />
                  </div>
                </div>

                {/* <div className="risk-input-group-6">
                  <div>
                    <label>
                      Upload Media
                      <span style={{ color: "blue" }}>(optional)</span>
                    </label>
                    <input type="file" className="risk-input-text" />
                  </div>
                </div> */}

                <div className="risk-form-btn">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Report;
