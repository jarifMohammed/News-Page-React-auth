import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const {createNewUser ,user ,setUser, updateUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) =>{


        e.preventDefault()
        //  get form data 
        const form = new FormData(e.target)
        const name = form.get("name")
        const email = form.get("email")
        const photoLink = form.get("Photo")
        const password = form.get("password")
        
        // console.log({name,photoLink,email,password})
        createNewUser(email,password)
        .then((result)=>{
const user = result.user;
setUser(user)
// console.log(user);
updateUser({displayName: name , photoURL:photoLink})
.then(()=>{
  navigate("/")
}).catch(err=>{
  console.log(err);
})
// console.log(user);
        })
        .catch((error)=>{
const  errorMsg = error.code
console.log(errorMsg);
        })
    }
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center ">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10 shadow-2xl">
          <h2 className="text-2xl font-semibold text-center">
            Register your account
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
              name="Photo"
                type="text"
                placeholder="Photo-url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
              name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn  btn-neutral rounded-none">
                Register
              </button>
            </div>
          </form>
          <p className="text-center font-semibold ">
            Already Have Account ?{" "}
            <Link className="text-red-500" to="/auth/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
