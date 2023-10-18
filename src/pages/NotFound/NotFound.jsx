import {AiOutlineHome} from "react-icons/ai"
import {Link} from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <img src="https://i.ibb.co/vVn8PkJ/not-found.jpg w-full" alt="not found illustration" />
        <Link to="/">
        <button className="bg-[#F5921D] text-white font-bold px-5 py-2 flex items-center gap-2 md:text-2xl rounded-md"> <AiOutlineHome></AiOutlineHome> Go Home</button>
        </Link>
    </div>
  )
}

export default NotFound