import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from './../Context/AuthContext';
import { useNavigate } from 'react-router';
import NewUserPageWrapper from '../Component/NewUserPageWrapper';
import createDB from '../dbHandlers/createDB';

const validationSchema = Yup.object({
    email: Yup.string().email('Emailadresse wurde nicht gefunden.').required('Bitte gib deine Emailadresse ein.'),
    password: Yup.string().min(6, 'Passwort muss mindestens 6 Zeichen lang sein.').required('Bitte gib dein Passwort ein.'),
    })

function LoginPage(props) {
    const { login } = useAuth();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
        email: '',
        password: '',
        },
        validationSchema,
        onSubmit: values => {
            //createDB();
            login(values.email, values.password);
            navigate('/dashboard');
        }
        });
    return (
        <NewUserPageWrapper>
        <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
            <label className="form-label" htmlFor="email">Email</label>
            <input
                className="form-control"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
        </div>
        {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
        ) : null}

        <div className="mb-3">
            <label className="form-label" htmlFor="password">Passwort</label>
            <input
                className="form-control"
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
        </div>
        {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
        ) : null}

        <button className="btn btn-primary" type="submit">Log in</button>
        </form>
        </NewUserPageWrapper>
    );
};

export default LoginPage;