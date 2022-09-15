import { useForm } from "../../hooks/useForm.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { makeAlert } from '../../service/utilService.js';
// SERVICE 

// STORE 
import { setAlert, removeAlert } from "../../store/features/alertSlice.js";
import { registerSuccess, getRegisterToken } from "../../store/features/authSlice.js";

export const Register = () => {

    // const isAuthenticated = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [formData, handleChange] = useForm({
        name: '',
        email: '',
        password: '',
        validPassword: ''
    });

    const onSubmit = async e => {
        const { name, email, password } = formData;
        e.preventDefault();
        if (formData.password !== formData.validPassword) {
            // const newAlert = { msg: 'Passwords dont match', alertType: 'danger' };
            const newAlert = makeAlert();
            // console.log('newAlert', newAlert);
            dispatch(setAlert(newAlert));

            setTimeout(() => dispatch(removeAlert(newAlert.id)), 5000);
        } else {
            dispatch(registerSuccess());
            dispatch(getRegisterToken({ name, email, password }));

        }
    };

    return (
        <section className="container">
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
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
                        // minLength="6"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="validPassword"
                        // minLength="6"
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

