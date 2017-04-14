import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './basicStore';
import { Form, FormError } from 'react-redux-simple-validate';

export default class BasicForm extends Component {
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
    this.handleValidForm = this.handleValidForm.bind(this);
  }

  handleValidForm(data) {
    console.log('call a Redux thunk here to submit your data to the server!', data);
  }

  render() {
    return (
      <div>
        <hr />
        <Form
          formName={this.props.name}
          handleValidForm={this.handleValidForm}
          validation={this.validation}
        >
          <div>
            <input type="text" name="exampleInput" value="" />
            <button className="button">Submit</button>
          </div>
          <div data-form-error="exampleInput"> {/* this DIV will have an error class */}
            <FormError forInput="exampleInput" /> {/* this will display error message */}
          </div>
        </Form>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <BasicForm name="Basic" />
  </Provider>,
  document.getElementById('basicForm')
);
