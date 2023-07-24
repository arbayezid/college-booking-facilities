import errorImg from '../assets/error.png'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center mt-20'>
            <div className='text-center'>
                <img src={errorImg} alt="" />
                <h2 className='text-3xl'>Error 404</h2>
                <span>Error</span><br/>
                <Link to='/' className='text-blue-600 font-medium underline hover:text-blue-900'>Back To Homepage</Link>
            </div>
        </div>
    );
};

export default ErrorPage;