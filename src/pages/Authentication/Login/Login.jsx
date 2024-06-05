import Lottie from 'lottie-react';
import groovyWalkAnimation from './login.json';
import Social from '../Social/Social';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import toast from 'react-hot-toast';
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then(() => {
        toast.success('Login Successful!');
        e.target.reset();
        navigate('/');
      })
      .catch((err) => {
        toast.error(err.massage);
        navigate('/');
      });
  };
  return (
    <div>
      <div className='hero font-montserrat font-medium'>
        <div className='hero-content flex-col lg:flex-row'>
          <div className='text-center lg:text-left'>
            <Lottie animationData={groovyWalkAnimation} className='w-3/4' />
          </div>
          <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form className='card-body' onSubmit={handleLogin}>
              <h1 className='text-center text-3xl font-bold'>Welcome Back!!</h1>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='input input-bordered'
                  name='email'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='Enter your password'
                  className='input input-bordered'
                  name='password'
                  required
                />
              </div>
              <div className='form-control'>
                <button className='btn mr-2 btn-warning font-playfairDisplay text-2xl my-4'>
                  Login
                </button>
                <Link to='/register' className='text-center link link-primary'>
                  New User
                </Link>
              </div>
              <div className='divider'>OR Using</div>
              <Social></Social>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
