import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-gray-500  text-gray-200">
        <div className="flex flex-grow justify-center order-1 flex-column">
            <div className="flex flex-grow flex-wrap order-1  justify-evenly flex-row gap-10">
                <div className="flex justify-start order-1 flex-col gap-2">
                    <div className="flex flex-row justify-center order-1 text-white font-bold ">
                        <p>CONTACT</p>
                    </div>
                    <div className="flex flex-row justify-center order-2 hover:text-white">                        
                        <Link to='#'><i className="fa-solid fa-map-pin"></i> ANYTOWN,ST 98765 USA </Link>
                    </div>
                    <div className="flex flex-row justify-center order-3 hover:text-white">                        
                        <Link to='#'><i className="fa-solid fa-envelope"></i> CONTACT@BG.ORG </Link>
                    </div>
                    <div className="flex flex-row justify-center order-4 hover:text-white">                        
                        <Link to='#'><i className="fa-solid fa-phone"></i> 555-555-5555 </Link>
                    </div>
                    <div className="flex flex-row justify-center order-5 hover:text-white">                        
                        <Link to='#'><i className="fa-solid fa-clock"></i> 5:00AM - 7:00PM </Link>
                    </div>
                </div>
                <div className="flex justify-start order-2 flex-col gap-2 ">
                    <div className="flex flex-row justify-center order-1 text-white font-bold">
                        <p>LINKS</p>
                    </div>
                    <div className="flex flex-row justify-center order-2 hover:text-white">
                        <Link to='/'> HOME </Link>
                    </div>
                    <div className="flex flex-row justify-center order-3 hover:text-white">
                        <Link to='/dashboard'> Dashboard </Link>
                    </div>
                </div>
                <div className="flex justify-start order-3 flex-col gap-2">      
                    <div className="flex flex-row justify-center order-1 text-white font-bold">
                        <p>SOCIALS</p>
                    </div>
                    <div className="flex flex-row justify-center order-2 hover:text-white">
                        <Link to='#'><i className="fa-brands fa-facebook"></i> FACEBOOK </Link>
                    </div>
                    <div className="flex flex-row justify-center order-3 hover:text-white">
                        <Link to='#'><i className="fa-brands fa-twitter"></i> TWITTER </Link>
                    </div>
                    <div className="flex flex-row justify-center order-4 hover:text-white">
                        <Link to='#'><i className="fa-brands fa-youtube"></i> YOUTUBE </Link>
                    </div>
                    <div className="flex flex-row justify-center order-5 hover:text-white">
                        <Link to='#'><i className="fa-brands fa-instagram"></i> INSTAGRAM </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center order-2 flex-row text-white font-bold">
            <div className="flex justify-center flex-col">
                <div className="flex flex-row justify-center">
                    <p>&copy; 2024 DAKOTA HAYES</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer