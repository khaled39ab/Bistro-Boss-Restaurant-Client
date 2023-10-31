import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import './Login.css';

const Login = () => {
    const { login } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email, password)
            .then(user => {
                console.log(user.user);
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row shadow-2xl px-8 py-6">
                <div className="text-center lg:text-left img-section">

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                    <h3 className='text-3xl font-bold text-center mt-5'>Login</h3>
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;