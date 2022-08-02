import { Link } from 'react-router-dom';
export default function suscription() {
  return (
    <div className="bg-gray-50 m-0 overflow-hidden w-full h-screen ">
      <iframe src="https://tally.so/r/wA7xQe?transparentBackground=1" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="Payment Detail "></iframe>
      <Link to='../suscription-thankpage'></Link>
    </div>
  )
}
