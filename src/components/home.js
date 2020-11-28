/* eslint-disable react/prop-types */
import React from "react";
import "../css/home.css";
import Button from "./common/Button";
import Create from "./create";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}
  changeState = (val, value) => {
    this.setState({
      [val]: value,
    });
  };
  render() {
    return (
      <div className="container home d-flex flex-column">
        <div className="header">
          <h1 className="text-center display-4">Resume Builder</h1>
          <div className="actions align-items-center justify-content-center">
            {!this.props.commonReducer.resume && (
              <Button
                text="Create Resume"
                typeClass="btn-primary"
                onclick={() => {
                  this.props.history.push("/create");
                }}
              />
            )}
            {this.props.commonReducer.resume && (
              <>
                <Button text="Edit Resume" typeClass="btn-warning" onclick={() => {
                  this.props.history.push("/edit");
                }} />
                <Button
                  text="Delete Resume"
                  typeClass="btn-danger"
                  onclick={this.props.actions.deleteResume}
                />
              </>
            )}
          </div>
        </div>
        <div className="play-area d-flex align-items-center justify-content-center">
          {this.state.create ? (
            <Create {...this.props} />
          ) : this.props.commonReducer.resume ? (
            <div className="view">
              <ul className="list-group">
                <li className="list-group-item">
                  <label>Name: </label>
                  <span>{this.props.commonReducer.resume.name}</span>
                </li>
                <li className="list-group-item">
                  <label>Email: </label>
                  <span>{this.props.commonReducer.resume.email}</span>
                </li>
                <li className="list-group-item">
                  <label>Address: </label>
                  <span>{this.props.commonReducer.resume.address}</span>
                </li>
                <li className="list-group-item">
                  <label>Phone: </label>
                  <span>{this.props.commonReducer.resume.phone}</span>
                </li>

                <li className="list-group-item">
                  <label>Experience: </label>
                  {this.props.commonReducer.resume.company &&
                    this.props.commonReducer.resume.company.map(
                      (item, index) => {
                        return (
                          <ul key={index} className="list-group">
                            <li className="list-group-item">
                              <label>Company:</label>{" "}
                              <span>{item.company}</span>
                            </li>
                            <li className="list-group-item">
                              <label>Year:</label> <span>{item.year}</span>
                            </li>
                            <li className="list-group-item">
                              <label>Designation:</label>{" "}
                              <span>{item.designation}</span>
                            </li>
                          </ul>
                        );
                      }
                    )}
                </li>
                <li className="list-group-item">
                  <label>Education: </label>
                  {this.props.commonReducer.resume.education &&
                    this.props.commonReducer.resume.education.map(
                      (item, index) => {
                        return (
                          <ul key={index} className="list-group">
                            <li className="list-group-item">
                              <label>Institute:</label>{" "}
                              <span>{item.institute}</span>
                            </li>
                            <li className="list-group-item">
                              <label>Year: </label> <span>{item.year}</span>
                            </li>
                            <li className="list-group-item">
                              <label>Degree:</label> <span>{item.degree}</span>
                            </li>
                          </ul>
                        );
                      }
                    )}
                </li>
                <li className="list-group-item">
                  <label>Skill Sets: </label>
                  <ul className="list-group">
                    {this.props.commonReducer.resume.skills &&
                      this.props.commonReducer.resume.skills.map(
                        (item, index) => {
                          return (
                            <li className="list-group-item" key={index}>
                              {item.label}
                            </li>
                          );
                        }
                      )}
                  </ul>
                </li>
              </ul>
            </div>
          ) : (
            <div className="align-middle">
              You didnt created a resume yet, please create one
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Home;
