import Lottie from 'lottie-react';
import groovyWalkAnimation from './register.json';
import Social from '../Social/Social';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!passwordPattern.test(password)) {
      return toast.error(
        'Password must be at least 6 characters long and include both uppercase and lowercase letters.'
      );
    }
    const photo = e.target.photo.value;
    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo).then(() => {
          toast.success('Registration Successful!!!');
          e.target.reset();
          navigate('/');
        });
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
            <form className='card-body' onSubmit={handleRegister}>
              <h1 className='text-center text-3xl font-bold'>Register!!</h1>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  placeholder='Enter your name'
                  className='input input-bordered'
                  required
                  name='name'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='input input-bordered'
                  required
                  name='email'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Photo URl</span>
                </label>
                <input
                  type='url'
                  placeholder='Give your Photo Url'
                  className='input input-bordered'
                  required
                  name='photo'
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
                  required
                  name='password'
                />
              </div>
              <div className='form-control '>
                <button className='btn mr-2 btn-warning font-playfairDisplay text-2xl my-4'>
                  Register
                </button>
                <Link to='/login' className='text-center link link-primary'>
                  Old User
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

export default Register;
