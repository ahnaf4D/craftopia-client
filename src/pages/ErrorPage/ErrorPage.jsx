import { useNavigate, useRouteError } from 'react-router-dom';
import Lottie from 'lottie-react';
import ErrorLottie from './404.json';
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  const navigate = useNavigate();
  const handleBackToPreviouse = () => {
    navigate(-1);
  };
  return (
    <div className='flex items-center  font-montserrat justify-center flex-col min-h-screen'>
      <Lottie animationData={ErrorLottie} className='w-2/4'></Lottie>
      <h1 className='text-4xl font-bold'>{error.status}</h1>
      <p className='text-2xl'>{error.data}</p>
      <button className='btn btn-error text-xl' onClick={handleBackToPreviouse}>
        Back to Previous
      </button>
    </div>
  );
};

export default ErrorPage;
