import { Link } from 'react-router-dom';
export default function joinwaitlist() {
    return (
      <div className="bg-gray-50 m-0 overflow-hidden w-full h-screen ">
         <iframe src="https://tally.so/r/w7RoMa?transparentBackground=1" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="Enter your details to get on the waitlist for SuperWOD access"></iframe>
         <Link to='../joinwaitlist-thankpage'></Link>
      </div>
    )
  }