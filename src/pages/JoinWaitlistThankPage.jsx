import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function joinwaitlistthankpage() {
    return (
        <div className="max-w-7xl mx-auto m-0 overflow-hidden w-full h-screen px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto my-10 pt-20 md:py-19">
                <h1 className='text-2xl md-text-7xl font-bold px-5 mmb-3 md:text-3xl text-center  md:text-center'>Thank You!</h1>
                <p className='text-1xl px-5 text-center my-5 md:text-center '>Your submission has been recorded. We will follow up with you shortly. Have a great day!</p>
                <p className='text-1xl px-5 text-center md:text-center '>Team SuperWOD</p>
                <img className='w-30'  src='https://res.cloudinary.com/dng8o0y7y/image/upload/v1659424061/Landing-page/thankyoujoinwaitlist_zqd3rc.png' alt="" />
            </div>
            <div className='bottom-0'>
                <Footer />
            </div>
            <Link to='../joinwaitlist-thankpage'></Link>
        </div>
    )
}
