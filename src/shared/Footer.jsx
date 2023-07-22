import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-black rounded-lg">
            <div>
                {/* <img className='rounded-lg h-[50px] w-[70px]' src={logo} alt="" /> */}
                <p>College Admission<br />Providing college admission 2022</p>
                <p>Mirpur-1, Dhaka, Bangladesh</p>
            </div>
            <div>
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4 text-2xl">
                    <FaFacebook></FaFacebook>
                    <FaYoutube></FaYoutube>
                    <FaTwitter></FaTwitter>
                </div>
                <div className='mt-2'>
                    <p>Copyright © 2023 - All right reserved by College Admission</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;