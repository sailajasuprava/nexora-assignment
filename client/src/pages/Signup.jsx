import SignupForm from "../components/SignupForm";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen bg-linear-to-br from-yellow-50 via-white to-yellow-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Centered Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-yellow-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
            <p className="text-gray-600 mt-2">Join our pizza family today</p>
          </div>

          <SignupForm />

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-yellow-600 font-bold hover:text-yellow-700"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
