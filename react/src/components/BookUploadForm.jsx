import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookSchema } from "@/validation/bookSchema";

export default function BookUploadForm() {
  const [serverMsg, setServerMsg] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: yupResolver(bookSchema),
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    setServerMsg(null);
    try {
      // TODO: replace with real API
      // const res = await fetch("/api/books", { method: "POST", body: JSON.stringify(values) });
      // if (!res.ok) throw new Error("Upload failed");
      await new Promise(r => setTimeout(r, 600));
      setServerMsg({ type: "success", text: "Book uploaded successfully!" });
      reset(); // clear form on success
    } catch (e) {
      setServerMsg({ type: "error", text: e.message || "Upload failed. Please try again." });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 max-w-md">
      <label>
        Title<span className="text-red-600">*</span>
        <input
          {...register("title")}
          aria-invalid={!!errors.title}
          className="border p-2 rounded w-full"
          placeholder="e.g., Clean Code"
        />
      </label>
      {errors.title && <p className="text-red-600 text-sm">{errors.title.message}</p>}

      <label>
        Author<span className="text-red-600">*</span>
        <input
          {...register("author")}
          aria-invalid={!!errors.author}
          className="border p-2 rounded w-full"
          placeholder="e.g., Robert C. Martin"
        />
      </label>
      {errors.author && <p className="text-red-600 text-sm">{errors.author.message}</p>}

      <label>
        ISBN<span className="text-red-600">*</span>
        <input
          {...register("isbn")}
          aria-invalid={!!errors.isbn}
          className="border p-2 rounded w-full"
          placeholder="10 or 13 digits"
        />
      </label>
      {errors.isbn && <p className="text-red-600 text-sm">{errors.isbn.message}</p>}

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="bg-green-600 text-white rounded p-2 disabled:opacity-50"
      >
        {isSubmitting ? "Uploading..." : "Upload Book"}
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
