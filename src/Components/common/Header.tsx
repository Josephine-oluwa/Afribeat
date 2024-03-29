import logo from "../../assets/logo (1).png"
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-full p-10 h-[100px] bg-[#0f1426] flex justify-between items-center text-white">
    {/* Logo and navigation section */}
    <div className="flex justify-between items-center w-full lg:w-[40%]">
        <img src={logo} alt="Afribeat" className="w-[150px] h-[80%] object-cover" />
        
        {/* Mobile menu icon (visible on small screens) */}
        <div className="lg:hidden font-bold text-[40px]">
            <IoMenuSharp />
        </div>

        {/* Navigation links (hidden on small screens) */}
        <div className="ml-5 space-x-8 font-medium hidden lg:flex ">
            <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Who we are</nav>
            <nav className="hover:cursor-pointer hover:underline transition-all duration-300">How it works</nav>
            <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Community</nav>
            <nav className="hover:cursor-pointer hover:underline transition-all duration-300">FAQ</nav>
        </div>
    </div>

    {/* "Hire Talent" button (visible on large screens) */}
    <div>
        <button className="rounded-3xl w-[150px] h-[50px] hover:cursor-pointer hover:bg-blue-500 hover:border-transparent justify-center hidden lg:flex border-white border sm:px-5 sm:py-3">
            Hire Talent
        </button>
    </div>
</div>

  )
}
 
export default Header