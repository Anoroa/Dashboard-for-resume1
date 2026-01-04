import { Link } from "react-router";
import logo from "../assets/sidenavlogo.svg";
import { FaHome } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { FaAddressCard } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router";

const SideNav = () => {
  const navLinks = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      link: "/auth/dashboard",
    },
    {
      name: "Tables",
      icon: <VscGraph />,
      link: "/auth/tables",
    },
    {
      name: "Billing",
      icon: <FaAddressCard />,
      link: "/auth/billing",
    },
    {
      name: "RTL",
      icon: <FaWrench />,
      link: "/auth/rtl",
    },
    {
      name: "Profile",
      icon: <FaUser />,
      link: "/auth/profile",
    },
  ];

  return (
    <>
      <nav className=" mb-auto w-74.5 h-screen bg-[#f8f9fa] shadow-sm">
        <div className="container pl-10.5 mx-auto">
          {/* Logo and Title */}
          <div className="logo pt-11 flex gap-3">
            <Link className="w-5.5" to="/">
              <img className="w-5.5 inline-block" src={logo} alt="logo" />
            </Link>
            <h3 className="font-bold font-inter text-[14px] text-fontColor">
              PURITY DASHBOARD
            </h3>
          </div>
          <hr className=" my-6 h-px border-0 bg-linear-to-r from-transparent via-gray-300 to-transparent" />
          {/* Navigation Links */}
          <div className="nav-links">
            <ul className="flex gap-7 flex-col">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="hover:bg-white w-54.75 h-13 rounded-xl transition-all duration-1000 hover:shadow-md"
                >
                  <NavLink
                    to={link.link}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? `text-fontColor flex items-center gap-5 text-lg font-inter font-medium shadow-md rounded-xl` : `text-gray-400 flex items-center gap-5 text-lg font-inter font-medium rounded-xl`
                    }
                  >
                    <div className="text-2xl p-3 bg-white rounded-xl text-[#4FD1C5]">
                      {link.icon}
                    </div>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideNav;
// ml-4.5 mt-11
// className={`flex items-center gap-5 text-lg font-inter font-medium text-gray-400 hover:text-fontColor`}
