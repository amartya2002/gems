import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Password must be 8 or more characters")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  //google handler func
  async function handleGooglesignIn() {
    signIn("google", { callbackUrl: "https://gems-chi.vercel.app" });
  }
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div className=" flex h-screen justify-center ">
        <div className="w-full max-w-sm  rounded-lg  p-6 ">
          <div className="mt-10 my-6">
            <h2 className="text-4xl tracking-tight my-1">Sign in</h2>
  
<div>
<p className=" text-slate-500">Not yet registered?  <Link href="/register" className="tracking-tight text-blue-500 hover:text-blue-700 font-medium  "> Sign up </Link> </p>  
</div>
            

              
             
              
            
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="">
              <div className=" mb-6  ">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                  htmlFor="email"
                >
                  Email address
                  <input
                    className=" w-full py-2 px-3 text-gray-500 border-b-2  border-slate-300 focus:outline-none focus:border-slate-700  tracking-wide font-semibold  "
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />{" "}
                  {formik.touched.email && formik.errors.email ? (
                    <div className=" bg-slate-200 rounded-xl px-2 absolute top-[31%] mx-[266px] tracking-wide text-red-300 font-medium text-xs">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </label>
              </div>
              <div className="mb-7 ">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                  htmlFor="Password"
                >
                  Password
                  <input
                    className=" w-full py-2 px-3 text-gray-500 border-b-2  border-slate-300 focus:border-slate-700  focus:outline-none  tracking-wide font-semibold "
                    type="password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className=" bg-slate-200 rounded-xl px-2  absolute top-[48%]  tracking-wide text-red-300 font-medium text-xs">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </label>
              </div>

              <div className="mx-1 flex justify-between  mb-5 ">
                <div className="flex items-center ">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm justify-end">
                  <a
                    href="#"
                    className="font-medium text-blue-500 hover:text-blue-700 "
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              {/* Buttons */}

              <div className=" w-full md:w-full px-3 mb- ">
                <div className="">
                  {/* Sign in button */}

                  <button
                    className="appearance-none  w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-full py-3 px-3 leading-tight hover:bg-blue-700 focus:outline-none"
                    type="submit"
                    //   onClick={signIn}
                  >
                    Sign in
                  </button>
                </div>

                <div className="text-center text-slate-500 mt-3">
                  Or continue with
                </div>

                {/* Other vendor buttons */}
                <div className="text-slate-500 mt-3 mb-4 flex justify-evenly">
                  <button
                    onClick={handleGooglesignIn}
                    className="flex items-center justify-center  bg-white  border border-slate-200 rounded-full py-2 px-2  hover:bg-blue-100 "
                    //   onClick={signInWithGoogle}
                    type="submit"
                  >
                    <svg className="h-6 w-6" viewBox="0 0 48 48">
                      <title>Google Logo</title>
                      <clipPath id="g">
                        <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                      </clipPath>
                      <g className="colors" clipPath="url(#g)">
                        <path fill="#FBBC05" d="M0 37V11l17 13z" />
                        <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                        <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                        <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
