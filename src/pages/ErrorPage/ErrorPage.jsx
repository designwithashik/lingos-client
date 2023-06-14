import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='items-center h-screen flex justify-center flex-col'>
            <img className='  w-1/2' src="https://i.ibb.co/r20htVR/undraw-Page-not-found-re-e9o6.png" alt="404 error" />
            <h2 className='text-xl'>Back to <Link to='/' className='font-bold text-white rounded-box bg-[#524fd5] py-3 ml-1 px-5'>Home</Link></h2>
        </div>
    );
};

export default ErrorPage;