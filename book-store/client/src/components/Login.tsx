import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from 'react';
import { useResolvedPath } from "react-router-dom";

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        getValues,
        formState: { errors, isSubmitting },
      } = useForm();
      const onSubmit = (data: FieldValues) => {
        // await new Promise((resolve) => setTimeout(resolve, 2000));
        // console.log(data);

        axios.post('http://localhost:5000/login', data)
        .then((res) => {
           res.status === 200 ? toast.success('Login Successful') : toast.error('Login Failed')
            console.log(res)
        })
        // reset();
      };



    //   useEffect(()=> {
    //     axios.post('http://localhost:5000/login', {username: 'gritfeat', password: 'fellowship'})
    //     .then((res) => {
    //         console.log(res)
    //     })
    //   },[])

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-gray-200 w-[80%] h-auto m-auto my-4 flex flex-col justify-center p-10 shadow-xl rounded-lg md:max-w-[40%] lg:max-w-[30%]">
          <h1 className="text-2xl font-bold text-center mb-4">
            Login
          </h1>
          <div className="lg:w-full lg:gap-4">
          <div>
            <label className="block mt-2 text-sm font-medium text-gray-900">
              Username
            </label>
            <input
              {...register("username", {
                required: "This field is required",
                // pattern: {
                //   value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                //   message: "Invalid username, please enter valid username",
                // },
              })}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="johndoe123"
            />
            {errors.username && (
              <p className="text-sm text-red-600">{`${errors.username.message}`}</p>
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
        </div>
      </form>
      <ToastContainer />
      </>
  )
}

export default Login;