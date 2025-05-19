"use client";

import { useEffect } from "react";

const RazorpayDonateButton = () => {
  useEffect(() => {
    const scriptId = "razorpay-embed-btn-js";

    // Check if script is already present to avoid duplication
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://cdn.razorpay.com/static/embed_btn/bundle.js";
      script.defer = true;
      document.body.appendChild(script);
    } else {
      const rzp = window["_rzp_"];
      if (rzp && rzp.init) {
        rzp.init();
      }
    }
  }, []);

  return (
    <div
      className="razorpay-embed-btn"
      data-url="https://pages.razorpay.com/pl_Q1UAiuS4GHNrbj/view"
      data-text="Donate Now"
      data-color="#528FF0"
      data-size="large"
    ></div>
  );
};

export default RazorpayDonateButton;
