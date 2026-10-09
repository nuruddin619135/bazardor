"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "@/lib/authClient";
import { useState } from "react";

function Page() {
  let [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setLoading(true);
    authClient.signIn.email({
      email: data.email,
      password: data.password,
      fetchOptions: {
        onSuccess: () => {
          toast.success("Sign in successful");
          router.push("/");
        },
        onError: (context) => {
          toast.error(context.error.message || "Sign in failed");
        },
        onResponse: (response) => {
          setLoading(false);
        },
      },
    });
  }

  function handleGoogleSignIn() {
    authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  }

  function handleGitHubSignIn() {
    authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-sm">
        <h1 className="text-center text-2xl font-semibold text-gray-900">
          সাইন ইন
        </h1>

        <p className="mt-2 text-center text-sm leading-6 text-gray-500">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>

        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                ইমেইল
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="ইমেইল লিখুন"
                autoComplete="email"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                পাসওয়ার্ড
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="পাসওয়ার্ড লিখুন"
                autoComplete="current-password"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-green-700 py-2.5 text-sm font-medium text-white transition hover:bg-green-800"
            >
              {loading ? "Loading..." : "সাইন ইন"}
            </button>
          </form>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs text-gray-500">অথবা</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full rounded-md border border-gray-300 py-2.5 text-sm text-gray-700 transition hover:bg-gray-50"
            >
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              type="button"
              onClick={handleGitHubSignIn}
              className="w-full rounded-md border border-gray-300 py-2.5 text-sm text-gray-700 transition hover:bg-gray-50"
            >
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <p className="mt-5 text-center text-sm text-gray-600">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/sign-up"
              className="font-medium text-green-700 hover:underline"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </div>

        <div className="mt-5 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-green-700">
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
