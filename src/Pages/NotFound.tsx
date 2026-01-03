import { useEffect } from "react";
import { Link } from "react-router"

const NotFound = () => {
  useEffect(() => {
      document.title = "Not Found | Dashboard";
    }, []);
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-6">
      <h1 className="text-4xl font-inter">The Page you were looking for was not found</h1>
      <Link to="/verify" className="text-3xl">Go Back to <span className="text-[#4FD1C5] text-3xl font-faculty font-semibold">Login?</span></Link>
    </div>
  )
}

export default NotFound