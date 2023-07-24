import { useContext, useState } from 'react';
import admissionLogo from '../../assets/admissionLogo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const [error, setError] = useState("")
    const { signInUser, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const user = { email, password }
        console.log(user)

        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                Swal.fire({
                    title: 'Login',
                    text: 'Login successfull',
                    icon: 'success',
                    confirmButtonText: 'close'
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                Swal.fire({
                    title: 'Login',
                    text: 'Login successfull',
                    icon: 'success',
                    confirmButtonText: 'close'
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200 rounded-xl">
            <div className="hero-content flex-col lg:flex-row w-full">
                <div className="text-center lg:text-left w-1/2">
                    <img className='w-11/12 rounded-2xl' src={admissionLogo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='text-red-800 font-medium text-center mt-5'>
                                {error}
                            </div>
                            <div className='text-center font-medium mt-5'>
                                <p>New to this site? <Link to='/register' className='text-blue-600'>Register</Link></p>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div className='text-center'>
                            <button title='Google' onClick={handleGoogleSignIn} className='btn btn-circle btn-outline'>G</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;