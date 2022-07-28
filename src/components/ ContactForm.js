import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form } from "formik";


const ContactForm = () => {
    const handelSubmit=(values, {resetForm})=>{
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
    }
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                agree: false,
                contactType: 'By Phone',
                feedback: ''




            }}
            onSubmit={handelSubmit}
        >
            <Form>
                <FormGroup row>
                    <Label htmlFor="FirstName" md="2">
                        First NAme
                    </Label>
                    <Col md="10">
                        <Field
                            name="firstNAme"
                            placeholder='First Name'
                            className='form-control'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="lastName" md="2" >
                        Last NAme
                    </Label>
                    <Col md="10">
                        <Field
                            name='lastName'
                            placeholder=" Last Name"
                            className='form-control'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="phoneNume" md="2">
                        Phone
                    </Label>
                    <Col md="10">
                        <Field
                            name='phoneNume'
                            placeholder='phone'
                            className='form-control'

                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="email" md="2">
                        Email

                    </Label>
                    <Col md="10">
                        <Field
                            name='email'
                            placeholder='Email'
                            className='form-control'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label check md={{ size: 4, offset: 2 }}>
                        <Field
                            name='agree'
                            type='checkbox'
                            className='form-check-input'
                        />{''}
                        May we Contact you
                    </Label>
                    <Col md="4">
                        <Field
                            name='contactType'
                            as='select'
                            className='form-control'
                        >
                            <option>By phone</option>
                            <option>By Email</option>
                        </Field>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="feedback" md='2'>
                        your Feedback
                    </Label>
                    <Col md="10">
                        <Field
                            name='feedback'
                            as='textarea'
                            row='12'
                            className='form-control'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col  md={{size: 10, offset:2}}>
                        <Button type="submit" color='primary'>
                            Send Feedback
                        </Button>
                    </Col>
                </FormGroup>

            </Form>

        </Formik>

    )
}

export default ContactForm;