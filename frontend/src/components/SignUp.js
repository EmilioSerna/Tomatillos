import { Formik, Form } from 'formik';
import { Outlet } from "react-router-dom";
import Input from './Input';

const handleSubmit = () => {
    // POST Request
};

const SignUp = () => {
    return (
        <div>
            <h1>simón</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Input name='first-name' label='First Name' />
                    <Input name='first-name' label='First Name' />
                    <Input name='first-name' label='First Name' />
                    <Input name='first-name' label='First Name' />
                    <button type='submit'>Sign Up</button>
                </Form>
            </Formik>
            <Outlet />
        </div>
    );
}

export default SignUp;