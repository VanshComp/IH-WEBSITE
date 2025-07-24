

import { useState, useRef } from "react";

const StartYourProjectSection = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  // Handle file via input or drop
  const handleFiles = (files) => {
    if (files.length === 0) return;
    const file = files[0];
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => setImagePreview(e.target.result);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    handleFiles(e.target.files);
  };

  const removeImage = (e) => {
    e.stopPropagation();
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <section className="mb-8 text-black p-6 rounded w-full mx-auto mt-5 flex flex-col md:flex-row justify-between items-center h-auto md:h-96 gap-8">
      {/* Left side header */}
      <div className="w-full md:w-1/3 flex flex-col gap-3 justify-center items-center px-2">
        <h2 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-6 tracking-tighter text-center">
          Start{" "}
          <span
            className="text-yellow-400"
            style={{
              fontStyle: "italic",
            }}
          >
            Project
          </span>
        </h2>
      </div>

      <div className="w-full md:w-1/2  flex flex-col md:flex-row gap-8">
        {/* Left side: Drag & Drop Upload */}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleClickUpload}
          className="flex flex-col items-center justify-center w-full md:w-1/2 border border-dashed border-black rounded cursor-pointer h-48 sm:h-60 bg-white hover:bg-gray-100 transition relative"
          title="Upload a Logo of your project"
        >
          {imagePreview ? (
            <div className="relative w-full h-full flex justify-center items-center">
              <img
                src={imagePreview}
                alt="Preview"
                className="max-h-48 sm:max-h-52 max-w-full object-contain rounded"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-2 right-2 bg-white/80 hover:bg-red-500 hover:text-white text-gray-700 p-1 rounded-full flex items-center justify-center shadow"
                title="Remove image"
                tabIndex={0}
              >
                {/* Simple X SVG */}
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M6 6l8 8M14 6l-8 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <p className="text-gray-500 text-center px-4">
              Upload a Logo of your project
            </p>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
        {/* Right side: Form Inputs */}
        <form
          className="flex flex-col gap-4 w-full md:w-1/2 text-slate-950 justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative z-0">
            <input
              type="text"
              id="floating_standard_name"
              className="block py-2.5 px-0 w-full text-sm text-slate-950 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard_name"
              className="absolute text-sm text-slate-950 dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Project Name
            </label>
          </div>
          <div className="relative z-0">
            <input
              type="text"
              id="floating_standard_leader"
              className="block py-2.5 px-0 w-full text-sm text-slate-950 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard_leader"
              className="absolute text-sm text-slate-950 dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Leader Name
            </label>
          </div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Start
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"  
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default StartYourProjectSection;
