"use client";
import Link from "next/link";
import { createAuthClient } from "better-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";

function Page() {
  let [loading, setLoading] = useState(false);
  let router = useRouter();
  const authClient = createAuthClient();
  const githubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };
  const googleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let data = Object.fromEntries(formData);
    setLoading(true);

    authClient.signUp.email({
      email: data.email,
      password: data.password,
      name: data.name,
      fetchOptions: {
        onSuccess: () => {
          toast.success("Sign up successful");
          router.push("/");
        },
        onError: () => {
          toast.error("Sign up failed");
        },
        onResponse: (response) => {
          setLoading(false);
        },
      },
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-sm">
        <h3 className="text-center text-2xl font-semibold text-gray-900">
          অ্যাকাউন্ট তৈরি করুন
        </h3>

        <p className="mt-2 text-center text-sm leading-6 text-gray-500">
          বাজারের তুলনা, বিস্তারিত দাম ও আপনার পছন্দের পণ্য দেখতে একটি
          অ্যাকাউন্ট তৈরি করুন।
        </p>

        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6">
          <form action="" className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                আপনার নাম
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="আপনার নাম লিখুন"
                autoComplete="name"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
              />
            </div>

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
                placeholder="কমপক্ষে ৮ অক্ষর"
                autoComplete="new-password"
                minLength={8}
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                পাসওয়ার্ড নিশ্চিত করুন
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="কমপক্ষে ৮ অক্ষর"
                autoComplete="new-password"
                minLength={8}
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-green-700 py-2.5 text-sm font-medium text-white transition hover:bg-green-800"
            >
              {loading ? "Loading..." : "অ্যাকাউন্ট তৈরি করুন"}
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
              className="w-full rounded-md border border-gray-300 py-2.5 text-sm text-gray-700 transition hover:bg-gray-50"
              onClick={googleSignIn}
            >
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              type="button"
              className="w-full rounded-md border border-gray-300 py-2.5 text-sm text-gray-700 transition hover:bg-gray-50"
              onClick={githubSignIn}
            >
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <p className="mt-5 text-center text-sm text-gray-600">
            ইতিমধ্যে অ্যাকাউন্ট আছে?
            <Link
              href="/sign-in"
              className="font-medium text-green-700 hover:underline"
            >
              সাইন ইন করুন
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
