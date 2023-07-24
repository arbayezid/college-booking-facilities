import { useContext, useState } from 'react';
import admissionLogo from '../../assets/admissionLogo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const [error, setError] = useState("");
    const { createUser, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = { name, email, password }
        console.log(user)

        if (password.length < 6) {
            return setError('Password must be 6 character')
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserInfo(loggedUser, name)
                Swal.fire({
                    title: 'Register',
                    text: 'Register successfully',
                    icon: 'success',
                    confirmButtonText: 'close'
                })
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                Swal.fire({
                    title: 'Register',
                    text: 'Register Successfully',
                    icon: 'success',
                    confirmButtonText: 'close'
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }



    const updateUserInfo = (user, name) => {
        updateProfile(user, {
            displayName: name,
        })
            .then()
            .catch(error => {
                console.log(error.message)
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
                        <h1 className="text-5xl font-bold">Register</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className='text-red-800 font-medium text-center mt-5'>
                                {error}
                            </div>
                            <div className='text-center font-medium mt-5'>
                                <p>Already have an account? <Link to='/login' className='text-blue-600'>Login</Link></p>
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

export default Register;