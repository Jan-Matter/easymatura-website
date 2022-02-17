import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    title: Yup.string().required('Bitte gib einen Titel ein.'),
    message: Yup.string().required('Deine Nachricht...'),
    })

function MessageWindow({title}) {

    return ( <>

        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                ...
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}
/*
    const formik = useFormik({
        initialValues: {
        title: '',
        message: '',
        },
        validationSchema,
        onSubmit: values => {
            console.log("sent");
        }
        });
    return (
        <div className="modal" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="modal-body">

                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">Titel</label>
                            <input
                                className="form-control"
                                id="title"
                                name="title"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.title}
                            />
                        </div>
                        {formik.touched.title && formik.errors.title ? (
                            <div>{formik.errors.title}</div>
                        ) : null}

                        <div className="mb-3">
                            <label className="form-label" htmlFor="password">Passwort</label>
                            <input
                                className="form-control"
                                id="message"
                                name="message"
                                type="message"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                            />
                        </div>
                        {formik.touched.message && formik.errors.message ? (
                            <div>{formik.errors.message}</div>
                        ) : null}

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit"  className="btn btn-primary">Save changes</button>
                </div>
                </form>
                </div>
            </div>
        </div>
        
        
        
    );
}
*/
export default MessageWindow;