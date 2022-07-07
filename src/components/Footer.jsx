import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className=" max-w-6xl mx-auto px-4 sm:px-6 ">
        {/* Bottom area */}
        <div className="text-center md:flex md:items-center md:justify-between py-4 md:py-8 border-t  border-gray-200">
          {/* Social links */}
          <ul className="text-center flex-row  md:flex mb-2 md:order-1 md:ml-4 md:mb-0  xs:flex-col">
            <li>
              <Link to="../privacy" className="text-sm text-gray-600 hover:underline">Privacy Policy</Link>
            </li>
            <li className="md:ml-5">
              <Link to="../terms" className="text-sm text-gray-600 hover:underline">Terms of Service</Link>
            </li>
            <li className="md:ml-5">
              {/* <a className="text-sm text-gray-600 hover:underline" href="https://company.wodsquad.app/faqs">FAQ</a> */}
              <Link to="../faq" className="text-sm text-gray-600 hover:underline">FAQ</Link>
            </li>
          </ul>
          {/* Copyrights note */}
          <div className="text-center  text-sm text-gray-600 mr-4 ">© 2022 <Link to="/" className="text-sm text-gray-600 hover:underline">SuperWOD Athlete</Link>. All right reserved.</div>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
