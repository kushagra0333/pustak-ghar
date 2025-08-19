import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "@/validation/signupSchema"; // adjust path if needed

export default function SignupForm() {
  const [serverMsg, setServerMsg] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: "onChange", // live validation
  });

  const onSubmit = async (values) => {
  setServerMsg(null);
  try {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      const { message } = await res.json().catch(() => ({ message: "Signup failed" }));
      throw new Error(message);
    }

    setServerMsg({ type: "success", text: "Signup successful!" });
  } catch (e) {
    setServerMsg({ type: "error", text: e.message || "Signup failed. Please try again." });
  }
};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 max-w-md">
      <label>
        Name<span className="text-red-600">*</span>
        <input
          {...register("name")}
          aria-invalid={!!errors.name}
          className="border p-2 rounded w-full"
          placeholder="Your name"
        />
      </label>
      {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}

      <label>
        Email<span className="text-red-600">*</span>
        <input
          {...register("email")}
          aria-invalid={!!errors.email}
          className="border p-2 rounded w-full"
          type="email"
          placeholder="you@example.com"
        />
      </label>
      {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}

      <label>
        Password<span className="text-red-600">*</span>
        <input
          {...register("password")}
          aria-invalid={!!errors.password}
          className="border p-2 rounded w-full"
          type="password"
          placeholder="At least 6 characters"
        />
      </label>
      {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="bg-blue-600 text-white rounded p-2 disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Sign Up"}
      </button>

      {isSubmitSuccessful && serverMsg?.type === "success" && (
        <div className="text-green-700 text-sm">{serverMsg.text}</div>
      )}
      {serverMsg?.type === "error" && (
        <div className="text-red-700 text-sm">{serverMsg.text}</div>
      )}
    </form>
  );
}
