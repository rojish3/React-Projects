import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
      } = useForm();
      
      const onSubmit = async(data: FieldValues) => {
        // await new Promise((resolve) => setTimeout(resolve, 2000));
        // console.log(data);
        try {
          const postData = await axios.post('http://localhost:3000/login', data)
          // console.log(postData)
          if(postData.status === 200){
            toast.success(postData.data)
          }

          
        } catch (error: any) {
          if(error.response.status === 401){
            toast.error(error.response.data)
          }
        }
        // reset();
      };


  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-gray-200 w-[80%] h-auto m-auto my-4 flex flex-col justify-center p-10 shadow-xl rounded-lg md:max-w-[40%] lg:max-w-[30%]">
          <h1 className="text-2xl font-bold text-center mb-4 uppercase">
            Login
          </h1>
          <div className="lg:w-full lg:gap-4">
          <div>
            <label className="block mt-2 text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              {...register("email", {
                required: "This field is required",
                // pattern: {
                //   value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                //   message: "Invalid Email, please enter valid email",
                // },
              })}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="johndoe123"
            />
            {errors.email && (
              <p className="text-sm text-red-600">{`${errors.email.message}`}</p>
            )}
          </div>
          <div>
            <label className="block mt-2 text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              {...register("password", {
                required: "This filed is required",
                // pattern: {
                //   value: /^(?=.*[A-Z])(?=.*\d)(?=.*\W).*$/,
                //   message:
                //     "Password must contain a Uppercase letter, a number and a symbol",
                // },
                minLength: {
                  value: 8,
                  message: "Passowrd must be atleast 8 characters",
                },
              })}
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="********"
            />
            {errors.password && (
              <p className="text-sm text-red-600">{`${errors.password.message}`}</p>
            )}
          </div>
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="mt-10 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-3 text-center mb-2 transition-all ease-in-out duration-300 disabled:bg-gray-600 disabled:text-white"
          >
            Submit
          </button>
        <p>Don't have an account? <a className="cursor-pointer text-blue-700 hover:underline" onClick={() => navigate('/signup')}>Sign Up</a></p>
        </div>
      </form>
      <ToastContainer />
      </>
  )
}

export default Login;