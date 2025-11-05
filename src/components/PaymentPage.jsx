import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function PaymentPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [paymentDone, setPaymentDone] = useState(false);

  useEffect(() => {
    // Simulate fake payment process
    const timer = setTimeout(() => {
      setLoading(false);
      setPaymentDone(true);

      // After success, redirect to home after 3 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-orange-100 to-orange-50">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
          <h2 className="mt-6 text-xl font-semibold text-orange-600 animate-pulse">
            Processing your payment...
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Please wait while we confirm your order 🍔
          </p>
        </div>
      ) : paymentDone ? (
        <div className="text-center">
          <i className="ri-checkbox-circle-fill text-green-500 text-6xl mb-4 animate-bounce"></i>
          <h2 className="text-2xl font-bold text-green-600">
            Payment Successful 🎉
          </h2>
          <p className="text-gray-600 mt-2">
            Your food is on the way! Redirecting to home page...
          </p>
        </div>
      ) : null}
    </div>
  );
}
