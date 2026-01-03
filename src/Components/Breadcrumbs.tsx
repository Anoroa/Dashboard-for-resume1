import { Link, useLocation } from "react-router";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-500 flex items-center gap-2 mb-4">
      <Link to="/" className="hover:text-blue-500">Home</Link>
      {pathnames.map((segment, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        // Capitalize nicely
        const label = segment.charAt(0).toUpperCase() + segment.slice(1);

        return (
          <span key={to} className="flex items-center gap-2">
            <span>/</span>
            {isLast ? (
              <span className="font-semibold text-gray-700">{label}</span>
            ) : (
              <Link to={to} className="hover:text-blue-500">{label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
