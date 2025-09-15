import { ArrowRight } from "lucide-react"
import { assets } from "../assets/assets"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='fixed z-5 w-full backdrop-blur-2xl 
    flex justify-between items-center py-3 px-4 
    sm:px-20 xl:px-32 '>
            <img src={assets.logo} alt="logo" className="
w-32 sm:w-44 cursor-pointer" onClick={() => navigate("/")} />

            <button className=' flex rounded-full gap-2 text-sm cursor-pointer
 bg-primary text-white justify-between items-center py-2.5 px-10 
     '> Get Started <ArrowRight className="w4
h-4"/> </button>
        </div>
    )
}

export default Navbar