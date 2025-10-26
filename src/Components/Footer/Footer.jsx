import React from 'react';
import Container from '../Container/Container';
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-black'>
            <Container>
           
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>

     
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>

     
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>

     
      <nav>
        <h6 className="footer-title">Contact</h6>
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-lg" />
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-lg" />
          <p>info@example.com</p>
        </div>
        <div className="flex items-start gap-2">
          <FaMapMarkerAlt className="text-lg mt-1" />
          <p>123 Main Street, Cityville, USA</p>
        </div>

        <div className="flex gap-4 mt-3">
          <a href="#" className="hover:text-primary transition-colors">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <FaInstagram size={20} />
          </a>
        </div>
      </nav>
    </footer>
</Container>
        </div>
    );
};

export default Footer;