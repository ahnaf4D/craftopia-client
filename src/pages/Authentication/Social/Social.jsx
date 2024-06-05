import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import toast from 'react-hot-toast';

const Social = () => {
  const { signInWithGithub, signInWithGoogle } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success('Successfully Login with Google');
      })
      .catch((err) => {
        toast.error(err.massage);
      });
  };
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then(() => {
        toast.success('Successfully Login with Github');
      })
      .catch((err) => {
        toast.error(err.massage);
      });
  };
  return (
    <div className='flex items-center justify-center gap-2'>
      <button className='btn btn-error text-2xl' onClick={handleGoogleSignIn}>
        <FaGoogle></FaGoogle>
      </button>
      <button
        className='btn text-black btn-secondary text-2xl'
        onClick={handleGithubSignIn}
      >
        <FaGithub></FaGithub>
      </button>
    </div>
  );
};

export default Social;
