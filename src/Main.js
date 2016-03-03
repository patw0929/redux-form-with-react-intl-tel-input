import React, { Component } from 'react';

import Col from 'react-bootstrap/lib/Col';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Row from 'react-bootstrap/lib/Row';
import { reduxForm } from 'redux-form';

import TextInput from './TextInput';
import PhoneInput from './PhoneInput';
import LoadingButton from './LoadingButton';

export const fields = ['name', 'phone', 'comment'];

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Please enter your name.';
  }

  if (!values.phone) {
    errors.phone = 'Please enter phone number.';
  }

  if (!values.comment) {
    errors.comment = 'Please enter comment.';
  }

  return errors;
};

class Main extends Component {
  static propTypes = {
    initializeForm: React.PropTypes.func,
    handleSubmit: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      fakeSaving: false,
      fakeSubmitted: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.initializeForm({
      name: '',
      phone: '',
      comment: '',
    });
  }

  handleSubmit(data) {
    this.setState({
      fakeSaving: true,
      fakeSubmitted: data,
    });

    setTimeout(() =>
      this.setState({ fakeSaving: false }),
      2000);
  }

  render() {
    const { fields } = this.props;
    const { fakeSaving, fakeSubmitted } = this.state;

    return (
      <div className="container">
        <PageHeader>redux-form example</PageHeader>
        <form className="form-horizontal" onSubmit={this.props.handleSubmit(this.handleSubmit)}>
          <Row>
            <TextInput
              disabled={fakeSaving}
              field={fields.name}
              id="name"
              label="Name:"
            />
          </Row>
          <Row>
            <PhoneInput
              id="phone"
              field={fields.phone}
              label="Phone:"
            />
          </Row>
          <Row>
            <TextInput
              disabled={fakeSaving}
              field={fields.comment}
              id="comment"
              label="Comment:"
            />
          </Row>
          <Row className="form-group">
            <Col sm={12} className="text-center">
              <LoadingButton
                bsSize="large"
                bsStyle="primary"
                label="Submit"
                loading={fakeSaving}
                loadingLabel="Submitting"
                type="submit"
              />
            </Col>
          </Row>
          {fakeSubmitted && <pre><code>{JSON.stringify(fakeSubmitted, null, 2)}</code></pre>}
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'mainValidation',
  fields,
  validate,
})(Main);

// export default connect(mapStateToProps)(form(Main));
