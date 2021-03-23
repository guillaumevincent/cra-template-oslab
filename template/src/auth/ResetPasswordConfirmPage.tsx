import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

export default function ResetPasswordConfirmPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src={Logo} alt="Logo" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Check your mail
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <p className="text-sm text-gray-500">
                We have sent a password recover instructions to your email.
              </p>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Open email app
              </button>
            </div>
          </form>

          <div className="mt-6 text-sm">
            <span className="text-gray-500 mr-1">
              Did not receive the email? Check your spam filter, or
            </span>
            <Link
              to="/reset-your-password"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              try another email address
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
