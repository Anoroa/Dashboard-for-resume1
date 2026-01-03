import { useEffect } from "react";

const Billing = () => {
  useEffect(() => {
    document.title = "Billing | Dashboard";
  }, []);
  return <div>Billing</div>;
};

export default Billing;
