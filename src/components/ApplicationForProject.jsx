import { useState } from "react";

const ApplicationForProject = ({ title }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formType, setFormType] = useState("start"); // "start" or "join"
  const [formData, setFormData] = useState({
    projectName: "",
    leaderName: "",
    applicantName: "",
    email: "",
    projectIdToJoin: "",
    motivation: "",
  });
  const [errors, setErrors] = useState({});

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setErrors({});
    setFormData({
      projectName: "",
      leaderName: "",
      applicantName: "",
      email: "",
      projectIdToJoin: "",
      motivation: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Simple validation example
  const validate = () => {
    const errs = {};
    if (formType === "start") {
      if (!formData.projectName.trim())
        errs.projectName = "Project name is required";
      if (!formData.leaderName.trim())
        errs.leaderName = "Leader name is required";
      if (!formData.applicantName.trim())
        errs.applicantName = "Your name is required";
      if (!formData.email.trim()) errs.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        errs.email = "Invalid email address";
    } else {
      if (!formData.projectIdToJoin.trim())
        errs.projectIdToJoin = "Project ID/Name is required";
      if (!formData.applicantName.trim())
        errs.applicantName = "Your name is required";
      if (!formData.email.trim()) errs.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        errs.email = "Invalid email address";
      if (!formData.motivation.trim())
        errs.motivation = "Please share your motivation";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // For now, just alert JSON data. Replace or extend with API call here.
    alert(
      `Submitting ${
        formType === "start" ? "Start Project" : "Join Project"
      } Application:\n` + JSON.stringify(formData, null, 2)
    );

    closeModal();
  };

  return (
    <>
      <section className="p-6 rounded text-black max-w-4xl mx-auto text-center">
        {/* <p className="mb-6">Application form coming soon. Stay tuned!</p> */}
        <button
          onClick={openModal}
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          {title}
        </button>
      </section>

      {/* Modal backdrop */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg w-full max-w-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Close form"
              title="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <h3 className="text-2xl font-bold mb-6 text-center">
              Project Application Form
            </h3>

            {/* Form Type selector */}
            <div className="mb-6 flex justify-center gap-4">
              <button
                type="button"
                onClick={() => setFormType("start")}
                className={`px-4 py-2 rounded ${
                  formType === "start"
                    ? "bg-blue-700 text-white"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                Start New Project
              </button>
              <button
                type="button"
                onClick={() => setFormType("join")}
                className={`px-4 py-2 rounded ${
                  formType === "join"
                    ? "bg-blue-700 text-white"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                Join Project
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Common fields */}
              <div>
                <label
                  className="block mb-1 font-semibold"
                  htmlFor="applicantName"
                >
                  Your Name
                </label>
                <input
                  id="applicantName"
                  name="applicantName"
                  type="text"
                  value={formData.applicantName}
                  onChange={handleChange}
                  className={`w-full border rounded px-3 py-2 focus:outline-yellow-400 ${
                    errors.applicantName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.applicantName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.applicantName}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border rounded px-3 py-2 focus:outline-yellow-400 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Fields for Starting a Project */}
              {formType === "start" && (
                <>
                  <div>
                    <label
                      className="block mb-1 font-semibold"
                      htmlFor="projectName"
                    >
                      Project Name
                    </label>
                    <input
                      id="projectName"
                      name="projectName"
                      type="text"
                      value={formData.projectName}
                      onChange={handleChange}
                      className={`w-full border rounded px-3 py-2 focus:outline-yellow-400 ${
                        errors.projectName
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.projectName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.projectName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block mb-1 font-semibold"
                      htmlFor="leaderName"
                    >
                      Leader Name
                    </label>
                    <input
                      id="leaderName"
                      name="leaderName"
                      type="text"
                      value={formData.leaderName}
                      onChange={handleChange}
                      className={`w-full border rounded px-3 py-2 focus:outline-yellow-400 ${
                        errors.leaderName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.leaderName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.leaderName}
                      </p>
                    )}
                  </div>
                </>
              )}

              {/* Fields for Joining a Project */}
              {formType === "join" && (
                <>
                  <div>
                    <label
                      className="block mb-1 font-semibold"
                      htmlFor="projectIdToJoin"
                    >
                      Project ID or Name to Join
                    </label>
                    <input
                      id="projectIdToJoin"
                      name="projectIdToJoin"
                      type="text"
                      value={formData.projectIdToJoin}
                      onChange={handleChange}
                      className={`w-full border rounded px-3 py-2 focus:outline-yellow-400 ${
                        errors.projectIdToJoin
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.projectIdToJoin && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.projectIdToJoin}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block mb-1 font-semibold"
                      htmlFor="motivation"
                    >
                      Why do you want to join this project?
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full border rounded px-3 py-2 focus:outline-yellow-400 resize-none ${
                        errors.motivation ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.motivation && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.motivation}
                      </p>
                    )}
                  </div>
                </>
              )}

              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplicationForProject;
