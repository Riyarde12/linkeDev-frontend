import { useForm } from "../../hooks/useForm.js";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { setAlert, removeAlert } from "../../store/features/alertSlice.js";
import { makeAlert } from '../../service/utilService.js';

export const Register = () => {

    const dispatch = useDispatch();

    const [formData, handleChange] = useForm({
        name: '',
        email: '',
        password: '',
        validPassword: ''
    });

    const onSubmit = async e => {
        e.preventDefault();
        if (formData.password !== formData.validPassword) {
            // const newAlert = { msg: 'Passwords dont match', alertType: 'danger' };
            const newAlert = makeAlert();
            console.log('newAlert', newAlert);
            dispatch(setAlert(newAlert));

            setTimeout(() => dispatch(removeAlert(newAlert.id)), 5000);
        } else console.log(formData);
    };

    return (
        <section className="container">
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} name="email" />
                    <small className="form-text">
                        This site uses Gravatar so if you want a profile image, use a
                        Gravatar email
                    </small>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="validPassword"
                        minLength="6"
                        value={formData.validPassword}
                        onChange={handleChange}
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </section>
    );
};

