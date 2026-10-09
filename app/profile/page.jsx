"use client";

import { authClient } from "@/lib/authClient";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function page() {
  let router = useRouter();
  const data = authClient.useSession();
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    authClient.updateUser({
      name: data.name,
      fetchOptions: {
        onSuccess: () => {
          toast.success("Profile updated successfully!");
          router.refresh("/");
        },
        onError: (context) => {
          toast.error(context.error.message || "Sign in failed");
        },
      },
    });
  }
  return (
    <div className="mx-auto max-w-2xl p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold">আমার প্রোফাইল</h3>
        <p className="mt-1 text-sm text-gray-500">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>

      <div className=" p-5">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center pl-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <span className="text-xl text-green-700">👤</span>
            </div>
            <div>
              <h4 className="font-semibold">{data.data?.user.name}</h4>
              <p className="text-sm text-gray-500">{data.data?.user.email}</p>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                authClient.signOut();
                toast.success("Signed out");
                router.push("/");
              }}
              className="rounded-md bg-red-500 px-4 py-2 text-white"
            >
              ↩ সাইন আউট
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            নাম
          </label>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="আপনার নাম লিখুন"
            className="mb-4 w-full rounded-md border p-2 outline-none focus:border-green-600"
          />

          <button
            type="submit"
            className="w-full rounded-md bg-green-700 px-4 py-2 text-white hover:bg-green-800"
          >
            আপডেট
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;
