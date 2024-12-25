"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function NamePage() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    push(`/name/${inputVal}`);
  };

  return (
    <div className="min-h-[70vh]">
      <div className="my-10 flex flex-col justify-center items-center gap-6">
        <h1> Enter your Name </h1>
        <form
          className="flex flex-col justify-center items-center gap-4"
          onSubmit={handleSubmit}
        >
          <input
            className="px-3 py-2 rounded-sm outline-none border-none text-slate-800"
            type="text"
            placeholder="Type your name..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button
            className="bg-green-400 px-2 py-1 rounded-sm text-slate-800"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default NamePage;
