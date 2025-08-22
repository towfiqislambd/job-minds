"use client";
import axios from "axios";
import Link from "next/link";
import { AppleLogo, GoogleLogo } from "@/Components/SvgContainer/SvgContainer";
import { useGoogleLoginFunc } from "@/Hooks/auth_api";
import { useGoogleLogin } from "@react-oauth/google";

const Page = () => {
  // Mutation
  const { mutateAsync: googleLoginMutation } = useGoogleLoginFunc();

  // Google Login
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => {
      const token = tokenResponse.access_token;
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_GOOGLE_URL}/oauth2/v2/userinfo`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const updatedData = {
        token,
        provider: "google",
        username: data?.name,
        email: data?.email,
        avatar: null,
        // avatar: data?.picture,
      };

      await googleLoginMutation(updatedData);
    },
  });

  return (
    <form
      className="w-full min-h-screen flex items-center justify-center"
      onSubmit={e => e.preventDefault()}
    >
      <div className="my-10 w-[calc(100%-30px)] md:w-[calc(100%-50px)] max-w-[700px] mx-auto px-5 md:px-10 py-5 md:py-12 lg:px-24 lg:py-14 bg-primary-off-blue rounded-3xl md:rounded-[50px] flex flex-col gap-y-5 md:gap-y-7 3xl:gap-y-10">
        <h2 className="auth-heading !leading-[140%]">
          Get Hired Faster with Job minds
        </h2>

        <div className="flex flex-col gap-y-4 md:gap-y-5 3xl:gap-y-7">
          {/* Google Login */}
          <button
            type="button"
            onClick={() => handleGoogleLogin()}
            className="py-3 md:py-4.5 bg-white rounded-[50px] cursor-pointer border border-[#eee] flex gap-3 items-center justify-center"
          >
            <GoogleLogo />
            <p className="leading-[140%] font-medium text-black-gray text-sm md:text-base">
              Continue with Google
            </p>
          </button>

          {/* Apple Login */}
          <div className="py-3 md:py-4.5 bg-white rounded-[50px] cursor-pointer border border-[#eee] flex gap-3 items-center justify-center">
            <AppleLogo />
            <p className="leading-[140%] font-medium text-black-gray text-sm md:text-base">
              Continue with Apple
            </p>
          </div>

          {/* Or */}
          <div className="flex gap-5 items-center">
            <div className="border-b border-gray-400 w-full" />
            <div className="md:text-lg font-semibold text-secondary-blue">
              OR
            </div>
            <div className="border-b border-gray-400 w-full" />
          </div>

          {/* Login with password */}
          <Link href="/auth/login" className="auth-btn">
            Log In With password
          </Link>

          {/* Don't have an account */}
          <div className="flex justify-center text-sm md:text-base lg:text-lg text-center gap-2">
            <p className="text-[#666565] leading-[164%]">
              Don't have an account?
            </p>
            <Link
              href="/auth/sign-up"
              className="text-primary-blue cursor-pointer"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Page;
