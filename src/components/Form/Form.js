import React from "react";
import content from "content/content";
import Page from "components/Page/Page";
import { NavList } from "components/Nav/Nav";
import "./Form.css";

const formContent = content.form;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      config: formContent.formConfig,
      output: null,
      data: {},
    };
    this.JSONError = formContent.invalidJSONError;
  }

  componentDidMount() {
    // create empty output from placeholder config, check required fields
    this.setOutputData();
    this.setRequiredFields(this.state.config);
  }

  // set the output object from current form config
  setOutputData = () => {
    if (this.state.config && Array.isArray(this.state.config)) {
      const data = {};
      this.state.config.forEach((item) => {
        let element = document.getElementById(item.name);
        if (element.type === "checkbox") {
          data[item.name] = element.checked;
        } else {
          data[item.name] = element.value;
        }
      });
      this.setState({ data });
    }
  };

  // update output object based on current config
  handleInputChange = (event) => {
    const { id, value, checked } = event.target;
    const data = {
      ...this.state.data,
    };
    if (event.target.type === "checkbox") {
      data[id] = checked;
    } else {
      data[id] = value;
    }
    this.setState({ data });
  };

  // push required names into state
  setRequiredFields = (config) => {
    const required = [];
    config.forEach((field) => {
      if (field.is_required) {
        required.push(field.name);
      }
    });
    this.setState({ required });
  };

  // check for valid json and update state on config input change
  handleConfigChange = (event) => {
    const { value } = event.target;
    let config;
    const userInputConfig = value;
    try {
      config = JSON.parse(userInputConfig);
      this.setRequiredFields(config);
    } catch (e) {
      config = this.JSONError;
    }
    this.setState({ config }, this.setOutputData);
  };

  // set output or alerts if required fields values are falsy
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.areRequiredFieldsCompleted()) {
      this.setState({ output: this.state.data });
    } else {
      alert(formContent.requiredWarning + this.state.required.join(", "));
    }
  };

  areRequiredFieldsCompleted = () => {
    let areRequiredFieldsCompleted = true;
    this.state.required.forEach((fieldName) => {
      if (!this.state.data[fieldName]) {
        areRequiredFieldsCompleted = false;
      }
    });
    return areRequiredFieldsCompleted;
  };

  renderForm = (config) => {
    if (config === this.JSONError) {
      return (
        <form className="form-container form-error">
          {formContent.JSONWarning}
        </form>
      );
    } else {
      return (
        <form className="form-container" onSubmit={this.handleSubmit}>
          <h3>{formContent.formTitle}</h3>
          {this.renderFormItems(config)}
          <button className="form-button" type="submit">
            {formContent.submitTitle}
          </button>
        </form>
      );
    }
  };

  renderFormItems = (config) => {
    if (config.length === 0 || !Array.isArray(config)) {
      return <div>{formContent.noItemsWarning}</div>;
    } else {
      return config.map((item, index) => {
        return (
          <div className="form-item" key={index}>
            <label>
              {item.human_label}
              {item.is_required ? "*" : ""}
            </label>
            <input
              id={item.name}
              type={item.type}
              onChange={this.handleInputChange}
            ></input>
          </div>
        );
      });
    }
  };

  render() {
    return (
      <div>
        <Page>
          <h2 className="form-title">{formContent.title}</h2>
          <p className="form-description">{formContent.description}</p>
          <div className="form-item">
            <label>{formContent.inputTitle}</label>
            <textarea
              id="config"
              className="form-input"
              defaultValue={JSON.stringify(formContent.formConfig, null, 2)}
              onChange={this.handleConfigChange}
            ></textarea>
          </div>
          {this.renderForm(this.state.config)}
          <div className="form-item">
            <label>{formContent.outputTitle}</label>
            <textarea
              readOnly
              value={
                this.state.output
                  ? JSON.stringify(this.state.output, null, 2)
                  : formContent.noDataWarning
              }
              className="form-input"
            ></textarea>
          </div>
          <hr></hr>
          <NavList></NavList>
          <hr></hr>
        </Page>
      </div>
    );
  }
}

export default Form;
