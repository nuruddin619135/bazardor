import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="flex justify-center items-center h-dvh flex-col gap-3">
      <h3 className="text-3xl">404 Not Found</h3>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;
