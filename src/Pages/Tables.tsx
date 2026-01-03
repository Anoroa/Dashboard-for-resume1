import { useEffect } from "react";

const Tables = () => {
  useEffect(() => {
      document.title = "Tables | Dashboard";
    }, []);
  return (
    <div>Tables</div>
  )
}

export default Tables