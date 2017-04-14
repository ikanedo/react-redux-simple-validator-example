import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { store } from './basicStore';
import { Provider, connect } from 'react-redux';
import { FormGroup, FormError, FormActions } from 'react-redux-simple-validate';

export default class BasicFormGroup extends Component {
  constructor() {
    super();
    this.validation = {
      rules: {
        exampleInput: {
          required: true
        }
      },
      messages: {
        exampleInput: {
          required: 'This is required'
        }
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleValidForm = this.handleValidForm.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { name, dispatch } = this.props;
    dispatch(
      FormActions.triggerValidate(name)
    );
  }

  handleValidForm(data) {
    console.log('call a Redux thunk here to submit your data to the server!', data);
  }

  render() {
    return (
      <div>
        <hr />
        <FormGroup
          formName={this.props.name}
          handleValidForm={this.handleValidForm}
          validation={this.validation}
        >
          <input type="text" name="exampleInput" value="" />
          <FormError forInput="exampleInput" />
          <br />
        </FormGroup>
        <button className="button" onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

const ConnectedBasicFormGroup = connect()(BasicFormGroup);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedBasicFormGroup name="BasicFormGroup" />
  </Provider>,
  document.getElementById('basicFormGroup')
);
