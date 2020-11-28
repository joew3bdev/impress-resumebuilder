/* eslint-disable react/prop-types */
import React from "react";

import "../css/home.css";
import { Toast, skills } from "../helpers";
import Button from "./common/Button";
import Input from "./common/Input";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();

class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      create: false,
      name: false,
      email: false,
      address: false,
      phone: false,
      companyIndex: [1],
      company: [],
      educationIndex: [1],
      education: [],
      skills: [],
    };
    this.company = React.createRef();
    this.education = React.createRef();
  }

  changeState = (val, value) => {
    this.setState({
      [val]: value,
    });
  };
  addCompany = () => {
    this.setState((prevState) => {
      let companyIndex = prevState.companyIndex;
      let company = prevState.company;
      if (
        company.length == companyIndex.length &&
        !Object.values(company[company.length - 1]).includes(false)
      ) {
        companyIndex.push(1);
      } else {
        Toast("error", "Fill your first company details");
      }
      return {
        companyIndex,
      };
    });
  };
  removeCompany = (index) => {
    let dom = this.company.current
      .getElementsByClassName("company" + index)[0]
      .getElementsByTagName("input");
    let lengthDom = dom.length;
    for (var i = 0; i < lengthDom - 1; i++) {
      dom[i].value = "";
    }
    this.setState((prevState) => {
      let companyIndex = prevState.companyIndex;
      let company = prevState.company;
      companyIndex.splice(index, 1);
      company.splice(index, 1);

      return {
        companyIndex,
        company,
      };
    });
  };
  addEducation = () => {
    this.setState((prevState) => {
      let educationIndex = prevState.educationIndex;
      let education = prevState.education;
      if (
        education.length == educationIndex.length &&
        !Object.values(education[education.length - 1]).includes(false)
      ) {
        educationIndex.push(1);
      } else {
        Toast("error", "Fill your first institute details");
      }
      return {
        educationIndex,
      };
    });
  };
  removeEducation = (index) => {
    let dom = this.education.current
      .getElementsByClassName("company" + index)[0]
      .getElementsByTagName("input");
    let lengthDom = dom.length;
    for (var i = 0; i < lengthDom - 1; i++) {
      dom[i].value = "";
    }
    this.setState((prevState) => {
      let educationIndex = prevState.educationIndex;
      let education = prevState.education;
      educationIndex.splice(index, 1);
      education.splice(index, 1);

      return {
        educationIndex,
        education,
      };
    });
  };

  submit = async () => {
    const resume = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      phone: this.state.phone,
      company: this.state.company,
      education: this.state.education,
      skills: this.state.skills,
    };
    if(Object.values((resume)).includes(false) || !resume.company.length || !resume.education.length || !resume.skills.length ){
      Toast("error", "Fill all the feilds")
    }
    else{
      const data = await this.props.actions.addResume(resume);
      if(data){
        this.props.history.push("/");
      }
  }
  };
  render() {
    return (
      <div className="container home d-flex flex-column">
        <div className="header">
          <h1 className="text-center display-4">Resume Builder</h1>
          <div className="actions align-items-center justify-content-center">
            <Button
              text="Back"
              typeClass="btn-danger"
              onclick={() => this.props.history.push("/")}
            />
          </div>
        </div>
        <div className="create">
          <Input
            type="text"
            text="Name"
            placeholder="Enter your name"
            onchange={(value) => {
              this.changeState("name", value);
            }}
          />
          <Input
            type="email"
            text="Email"
            placeholder="Enter your email"
            onchange={(value) => {
              this.changeState("email", value);
            }}
          />
          <Input
            type="text"
            text="Address"
            placeholder="Enter your address"
            onchange={(value) => {
              this.changeState("address", value);
            }}
          />
          <Input
            type="number"
            text="Phone"
            placeholder="Enter your phone"
            onchange={(value) => {
              this.changeState("phone", value);
            }}
          />
          <div ref={this.company}>
            <h6>Experience</h6>
            {this.state.companyIndex &&
              this.state.companyIndex.map((item, index) => {
                return (
                  <div key={index} className={"p-3 company" + index}>
                    <Input
                      type="text"
                      text="Company"
                      placeholder={"Enter your company " + (index + 1)}
                      onchange={(value) => {
                        this.setState((prevState) => {
                          let company = prevState.company;
                          if (company[index]) {
                            company[index]["company"] = value;
                          } else {
                            company[index] = {
                              company: value,
                              year: false,
                              designation: false,
                            };
                          }
                          return {
                            company,
                          };
                        });
                      }}
                    />
                    <Input
                      type="number"
                      text="Year"
                      placeholder={"Enter your year of experience"}
                      onchange={(value) => {
                        this.setState((prevState) => {
                          let company = prevState.company;
                          if (company[index]) {
                            company[index]["year"] = value;
                          } else {
                            company[index] = {
                              company: false,
                              year: value,
                              designation: false,
                            };
                          }
                          return {
                            company,
                          };
                        });
                      }}
                    />
                    <Input
                      type="text"
                      text="Designation"
                      placeholder={"Enter your designation"}
                      onchange={(value) => {
                        this.setState((prevState) => {
                          let company = prevState.company;
                          if (company[index]) {
                            company[index]["designation"] = value;
                          } else {
                            company[index] = {
                              company: false,
                              year: false,
                              designation: value,
                            };
                          }
                          return {
                            company,
                          };
                        });
                      }}
                    />
                    {this.state.companyIndex &&
                      this.state.companyIndex.length > 1 && (
                        <Button
                          text="Remove Company"
                          typeClass="btn-danger"
                          onclick={() => {
                            this.removeCompany(index);
                          }}
                        />
                      )}
                  </div>
                );
              })}

            <Button
              text="Add Company"
              typeClass="btn-primary float-right"
              onclick={() => {
                this.addCompany();
              }}
            />
          </div>
          <div ref={this.education} className="clearfix">
            <h6>Education</h6>
            {this.state.educationIndex &&
              this.state.educationIndex.map((item, index) => {
                return (
                  <div key={index} className={"p-3 education" + index}>
                    <Input
                      type="text"
                      text="Institute"
                      placeholder={"Enter your Institute " + (index + 1)}
                      onchange={(value) => {
                        this.setState((prevState) => {
                          let education = prevState.education;
                          if (education[index]) {
                            education[index]["institute"] = value;
                          } else {
                            education[index] = {
                              institute: value,
                              year: false,
                              degree: false,
                            };
                          }
                          return {
                            education,
                          };
                        });
                      }}
                    />
                    <Input
                      type="number"
                      text="Year"
                      placeholder={"Enter your year of study"}
                      onchange={(value) => {
                        this.setState((prevState) => {
                          let education = prevState.education;
                          if (education[index]) {
                            education[index]["year"] = value;
                          } else {
                            education[index] = {
                              institute: false,
                              year: value,
                              degree: false,
                            };
                          }
                          return {
                            education,
                          };
                        });
                      }}
                    />
                    <Input
                      type="text"
                      text="Designation"
                      placeholder={"Enter your degree"}
                      onchange={(value) => {
                        this.setState((prevState) => {
                          let education = prevState.education;
                          if (education[index]) {
                            education[index]["degree"] = value;
                          } else {
                            education[index] = {
                              institute: false,
                              year: false,
                              degree: value,
                            };
                          }
                          return {
                            education,
                          };
                        });
                      }}
                    />
                    {this.state.educationIndex &&
                      this.state.educationIndex.length > 1 && (
                        <Button
                          text="Remove Education"
                          typeClass="btn-danger"
                          onclick={() => {
                            this.removeEducation(index);
                          }}
                        />
                      )}
                  </div>
                );
              })}

            <Button
              text="Add Education"
              typeClass="btn-primary float-right"
              onclick={() => {
                this.addEducation();
              }}
            />
          </div>
          <div className="clearfix">
            <h6>Skill Sets</h6>
            <div className="p-3">
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={[]}
                isMulti
                options={skills}
                onChange={(value) => {
                  this.changeState("skills", value);
                }}
              />
            </div>
          </div>
          <div>
            <Button
              text="Submit"
              typeClass="btn-primary float-right"
              onclick={() => {
                this.submit();
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Create;
