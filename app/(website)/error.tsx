"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle } from "lucide-react"; // Assuming you're using Lucide React icons

const ErrorPage = ({
  errorMessage = "Something went wrong",
  retry,
  error,
}: {
  errorMessage?: string;
  retry?: () => void;
  error: any;
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <AlertTriangle className="w-16 h-16 text-red-600 mb-4" />
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Oops!</h1>
      <p className="text-gray-600 mb-4">{errorMessage}</p>
      <p className="text-gray-600 mb-4">{error?.message || error.toString()}</p>

      <div className="space-x-4">
        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
        >
          Go to Homepage
        </button>
        {retry && (
          <button
            onClick={retry}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
