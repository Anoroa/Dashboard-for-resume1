import { useEffect } from "react";

const RTL = () => {
  useEffect(() => {
      document.title = "RTL | Dashboard";
    }, []);
  return (
    <div>RTL</div>
  )
}

export default RTL