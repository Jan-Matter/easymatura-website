import React, { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import PageWrapper from './../Component/PageWrapper';
import { useAuth } from './../Context/AuthContext';
import { useUser } from './../Context/UserContext';


const validationSchema = Yup.object({
    firstName: Yup.string().required('Bitte gib deinen Vornamen ein.'),
    surName: Yup.string().required('Bitte gib deinen Nachnamen ein.'),
    email: Yup.string().email('Emailadresse wurde nicht gefunden.').required('Bitte gib deine Emailadresse ein.'),
    password: Yup.string().min(6, 'Passwort muss mindestens 6 Zeichen lang sein.').required('Bitte gib dein Passwort ein.'),
    gymnasium: Yup.string().required('Bitte gib dein Gymnasium ein.'),
    klasse: Yup.string().required('Bitte gib deine Klasse ein.'),
    })

function RegistrationPage(props) {
    const { signup } = useAuth();
    const { createUser } = useUser();

    const { course } = useParams();
    
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
        firstName: '',
        surName: '',
        phone: '',
        email: '',
        password: '',
        gymnasium: '',
        klasse: '',
        },
        validationSchema,
        onSubmit: async values => {
            try{
                await signup(values.email, values.password);
                await createUserInDB(values);
            }catch(error){
                console.log(error);
            }
            navigate(`/kurse/${course}/welcome`);
        }
        });
    return (
        <PageWrapper>
        <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
            <label className="form-label" htmlFor="text">Vorname</label>
            <input
                className="form-control"
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
            />
        </div>
        {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
        ) : null}

        <div className="mb-3">
            <label className="form-label" htmlFor="text">Nachname</label>
            <input
                className="form-control"
                id="surName"
                name="surName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.surName}
            />
        </div>
        {formik.touched.surName && formik.errors.surName ? (
            <div>{formik.errors.surName}</div>
        ) : null}

        <div className="mb-3">
            <label className="form-label" htmlFor="text">Handynummer für Whatsappgruppe</label>
            <input
                className="form-control"
                id="phone"
                name="phone"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
            />
        </div>
        {formik.touched.phone && formik.errors.phone ? (
            <div>{formik.errors.phone}</div>
        ) : null}
    
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

        <div className="mb-3">
            <label className="form-label" htmlFor="text">Gymnasium</label>
            <input
                className="form-control"
                id="gymnasium"
                name="gymnasium"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.gymnasium}
            />
        </div>
        {formik.touched.gymnasium && formik.errors.gymnasium ? (
            <div>{formik.errors.gymnasium}</div>
        ) : null}

        <div className="mb-3">
            <label className="form-label" htmlFor="text">Schulklasse</label>
            <input
                className="form-control"
                id="klasse"
                name="klasse"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.klasse}
            />
        </div>
        {formik.touched.klasse && formik.errors.klasse ? (
            <div>{formik.errors.klasse}</div>
        ) : null}

        <button className="btn btn-primary" type="submit">Registrieren</button>
        </form>
        </PageWrapper>
    );
};

export default RegistrationPage;