import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
const Footer = () => {
  return (
    <footer className=' bg-base-200 text-black py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between'>
          {/* Website Name and Copyright */}
          <div className='mb-4 md:mb-0'>
            <Link to='/' className='flex items-center cursor-pointer'>
              <img src={Logo} alt='' />
              <p className='font-playfairDisplay text-4xl'>
                Craf<span className='underline'>topia</span>
              </p>
            </Link>
            <p className='text-sm'>
              &copy; {new Date().getFullYear()} Craftopia. All rights reserved.
            </p>
          </div>

          {/* Contact Information */}
          <div className='mb-4 md:mb-0 font-montserrat'>
            <h3 className='text-xl font-semibold'>Contact Us</h3>
            <p>
              Support:{' '}
              <a href='mailto:support@craftopia.com' className='text-blue-400'>
                support@craftopia.com
              </a>
            </p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: San Francisco, CA, USA 94105</p>
          </div>

          {/* Social Media Links */}
          <div className='font-montserrat'>
            <h3 className='text-xl font-semibold'>Follow Us</h3>
            <div className='flex space-x-4 mt-2'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'
                className='text-2xl'
              >
                <FaFacebook />
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Twitter'
                className='text-2xl'
              >
                <FaTwitter />
              </a>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
                className='text-2xl'
              >
                <FaInstagram />
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                className='text-2xl'
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
