import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);

    try {
      const postData = await axios.post('http://localhost:3000/signup', data);
      if(postData.status === 200){
        toast.success(postData.data)
      }
    } catch (error: any) {
      if(error.response.status === 401){
        toast.error(error.response.data)
      }
    }
    // reset();
  }; // your form submit function which will invoke after successful validation
  // const selectedGender = watch('gender');

  return (

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-gray-200 w-[80%] h-auto m-auto my-4 flex flex-col justify-center p-10 shadow-xl rounded-lg md:max-w-[60%] lg:max-w-[40%]">
          <h1 className="text-2xl font-bold text-center mb-4 uppercase">
            Sign Up
          </h1>
          <div className="md:flex md:flex-row md:w-full md:gap-4">
            <div className="md:w-1/2">
              <label className="block mt-2 text-sm font-medium text-gray-900">
                First Name
              </label>
              <input
                {...register("firstName", {
                  required: "This field cannot be empty.",
                })}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="John"
              />
              {errors.firstName && (
                <p className="text-sm text-red-600">{`${errors.firstName.message}`}</p>
              )}
            </div>
            <div className="md:w-1/2">
              <label className="block mt-2 text-sm font-medium text-gray-900">
                Last Name
              </label>
              <input
                {...register("lastName", {
                  required: "This field cannot be empty.",
                })}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Doe"
              />
              {errors.lastName && (
                <p className="text-sm text-red-600">{`${errors.lastName.message}`}</p>
              )}
            </div>
          </div>
          <label className="block mt-2 text-sm font-medium text-gray-900">
            Gender
          </label>
          <div className="flex flex-col items-start mb-2 gap-2 md:flex-row md:items-center md:gap-8">
            <div className="flex items-center">
              <input
                {...register("gender", {
                  required: "This field is required",
                })}
                id="male-radio"
                type="radio"
                value="Male"
                name="gender"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="male-radio"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Male
              </label>
            </div>
            <div className="flex items-center">
              <input
                {...register("gender", {
                  required: "This field is required",
                })}
                id="female-radio"
                type="radio"
                value="Female"
                name="gender"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="female-radio"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Female
              </label>
            </div>
            <div className="flex items-center">
              <input
                {...register("gender", {
                  required: "This field is required",
                })}
                id="others-radio"
                type="radio"
                value="Others"
                name="gender"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="others-radio"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Others
              </label>
            </div>
            {errors.gender && (
              <p className="text-xs text-red-600">{`${errors.gender.message}`}</p>
            )}
          </div>

          <div>
            <label className="block mt-2 text-sm font-medium text-gray-900">
              Phone Number
            </label>
            <input
              {...register("phoneNumber", {
                required: "This field is required",
                pattern: {
                  value: /^9\d*$/,
                  message: "The phone number must be valid",
                },
                validate: (value) => {
                  return (
                    value.length === 10 ||
                    "The phone number must be 10 character"
                  );
                },
              })}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="9876543210"
            />
            {errors.phoneNumber && (
              <p className="text-sm text-red-600">{`${errors.phoneNumber.message}`}</p>
            )}
          </div>
          <div>
            <label className="block mt-2 text-sm font-medium text-gray-900">
              Email address
            </label>
            <input
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                  message: "Invalid Email, please enter valid email",
                },
              })}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="johndoe@gmail.com"
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
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*\W).*$/,
                  message:
                    "Password must contain a Uppercase letter, a number and a symbol",
                },
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
          <div>
            <label className="block mt-2 text-sm font-medium text-gray-900">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword", {
                required: "This filed is required",
                minLength: {
                  value: 8,
                  message: "Passowrd must be atleast 8 characters",
                },
                validate: (value) => {
                  return (
                    value === getValues("password") || "Password did not match"
                  );
                },
              })}
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="********"
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-600">{`${errors.confirmPassword.message}`}</p>
            )}
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="mt-10 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-3 text-center mb-2 transition-all ease-in-out duration-300 disabled:bg-gray-600 disabled:text-white"
          >
            Submit
          </button>
          <p>Already have an account? <a className="cursor-pointer text-blue-700 hover:underline" onClick={() => navigate('/login')}>Login</a></p>
        </div>
      <ToastContainer />
      </form>
  );
};

export default Form;
