import { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
      document.title = "Profile | Dashboard";
    }, []);
  return (
    <div>Profile</div>
  )
}

export default Profile