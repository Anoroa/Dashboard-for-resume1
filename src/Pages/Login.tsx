import axios from "axios";
import type React from "react";
import { useEffect, useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
// import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { appendData } from "../Redux/userSlice";

const Login = () => {
  // Cookies.remove("token");
  // -----------States----------------
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [seePW, setseePW] = useState(false);
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // -----------Misc----------------
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // -----------UseEffect----------------
  useEffect(() => {
    if (err) {
      const timer = setTimeout(() => setErr(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [err]);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [success]);
  // ----------Handlers----------------
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.username || !data.password) {
      setErr("Please fill in all fields");
      return;
    }
    setLoading(true);
    axios
      .post("https://api.freeapi.app/api/v1/users/login", data, {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
      })
      .then(
        (res) => (
          setLoading(false),
          dispatch(appendData(res.data.data)),
          // Cookies.set("token", res.data.data.accessToken, { expires: 3 }),
          console.log(res),
          navigate("/dashboard"),
          setSuccess("Logged in successfully")
        )
      )
      .catch(
        (err) => (
          setLoading(false), console.count(err), setErr("User not valid")
        )
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // -----------JSX----------------
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gray-200">
        <div className="card px-10 pt-10 pb-6 border border-gray-100 rounded-2xl shadow-xl bg-gray-50">
          <h2 className="text-2xl text-center mb-5 font-mono">Login</h2>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="border border-gray-200 py-3 px-6 rounded-lg bg-white"
              onChange={handleChange}
            />
            <div className="relative">
              <input
                type={seePW ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="border border-gray-200 py-3 px-6 rounded-lg bg-white"
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setseePW(!seePW)}
                className="absolute right-3 top-4 text-xl"
              >
                {seePW ? <LuEyeClosed /> : <LuEye />}
              </button>
            </div>
            <button className="w-full bg-slate-200 p-3 rounded-lg text-md active:scale-90">
              {loading ? (
                <div className="border-2 border-black border-t-0 animate-spin w-3 h-3 rounded-full mx-auto"></div>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <p className="text-center mt-4 text-red-500 font-semibold">{err}</p>
          <p className="text-center mt-4 text-green-300 font-semibold">
            {success}
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
