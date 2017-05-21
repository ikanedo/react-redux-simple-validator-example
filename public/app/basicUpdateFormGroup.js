import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { store } from './basicStore';
import { Provider, connect } from 'react-redux';
import { FormGroup, FormError, FormActions } from 'react-redux-simple-validate';

export default class BasicUpdateFormGroup extends Component {
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
    this.updateInputValue = this.updateInputValue.bind(this);
    this.updateMultiValue = this.updateMultiValue.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { name, dispatch } = this.props;
    dispatch(
      FormActions.triggerValidate(name)
    );
  }

  updateInputValue() {
    const { name, dispatch } = this.props;
    dispatch(
      FormActions.setInputValue(name, {
        exampleInput: 'my new data'
      })
    );
  }

  updateMultiValue() {
    const { name, dispatch } = this.props;
    dispatch(
      FormActions.setDataReplace(name, {
        exampleInput: 'my new data replace',
        exampleInput2: 'my new data replace 2',
        exampleInput3: 'my new data replace 3'
      })
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
          <input type="text" name="exampleInput" value="" placeholder="input 1" />
          <br />
          <input type="text" name="exampleInput2" value="" placeholder="input 2" />
          <br />
          <input type="text" name="exampleInput2" value="" placeholder="input 3" />
          <FormError forInput="exampleInput" />
          <br />
        </FormGroup>
        <button onClick={this.onSubmit}>Submit</button>
        <button onClick={this.updateInputValue}>Update Single Value</button>
        <button onClick={this.updateMultiValue}>Update Multi Value</button>
      </div>
    );
  }
}

const ConnectedBasicUpdateFormGroup = connect()(BasicUpdateFormGroup);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedBasicUpdateFormGroup name="BasicUpdateFormGroup" />
  </Provider>,
  document.getElementById('basicUpdateFormGroup')
);
