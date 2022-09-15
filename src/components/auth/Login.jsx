import { Link, Navigate } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthenticated, getUserLogin } from '../../store/features/authSlice';

export const Login = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const [formData, handleChange] = useForm({
        email: '',
        password: '',
    });

    const onSubmit = async e => {
        const { email, password } = formData;
        e.preventDefault();
        console.log('isAuthenticated', isAuthenticated);
        dispatch(getUserLogin(email, password));
        // dispatch(getUserAuthenticated());
    };

    // Redirect if logged in
    if (isAuthenticated) return <Navigate to="/dashboard" />;

    return (
        <section className="container">
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} name="email" />
                    <small className="form-text">This site uses Gravatar so if you want a profile image, use a
                        Gravatar email</small>
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
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Dont have an account?
                <Link to='/register'> Sign Up</Link>
            </p>
        </section>
    );
};
