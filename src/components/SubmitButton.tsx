"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary !rounded-sm w-60"
      disabled={pending}
    >
      Send
    </button>
  );
}
