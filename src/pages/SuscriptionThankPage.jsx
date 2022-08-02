import Footer from '../components/Footer';

export default function suscriptionthankpage() {
    return (
        <div className="max-w-7xl mx-auto m-0 overflow-hidden w-full h-screen px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto my-10 pt-20 md:py-19">
                <h1 className='text-2xl md-text-7xl font-bold px-5 mmb-3 md:text-3xl text-center  md:text-center'>Thank you for buying SuperWOD!</h1>
                <p className='text-1xl px-5 text-center my-5 md:text-center '>We appreciate your business and will be thrilled to send you the invite link as soon as possible. An email with tracking information will be sent to you.</p>
                <p className='text-1xl px-5 text-center my-5 md:text-center '>Thanks again, and we look forward to seeing you soon.</p>
                <p className='text-1xl px-5 text-center md:text-center '>Team SuperWOD</p>
                <img className='w-30'  src='https://res.cloudinary.com/dng8o0y7y/image/upload/v1659424223/Landing-page/Thankyou_pay_ldoezs.png' alt="" />
            </div>
            <div className='bottom-0'>
                <Footer />
            </div>
        </div>
    )
}