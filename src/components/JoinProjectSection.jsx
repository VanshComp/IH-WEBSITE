import { useState } from "react";

const projectData = {
  name: "Ih website",
  members: ["Arya", "Abhir", "Saichandan"],
  registered: "2025-07-24",
  leader: "idkk",
  status: "Active",
};

const JoinProjectSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Filter members based on search
  const filteredMembers = projectData.members.filter((member) =>
    member.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="mb-8 text-black p-6 w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
      {/* Left: Search and Project Info */}

      <div className="w-full md:w-1/3 flex flex-col gap-3 justify-center items-center px-2">
        <h2 className="text-5xl sm:text-7xl md:text-9xl tracking-tighter font-bold mb-2 text-center">
          Join{" "}
          <span
            className="text-[#093FB4] italic"
            style={{ fontStyle: "italic" }}
          >
            project
          </span>
        </h2>
        {/* Optional description paragraph can be added here */}
        {/* <p className="mb-4 text-left px-3">
          Want to join an ongoing project? Search project members and see the details below.
        </p> */}
      </div>

      {/* Right: Heading */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <div>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm border rounded-xl outline-1 focus:outline-yellow-400"
                placeholder="Search members...."
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="border p-4 rounded bg-white text-black shadow-sm">
          <div className="mb-1">
            <span className="font-bold">Project:</span> {projectData.name}
          </div>
          <div className="mb-1">
            <span className="font-bold">Members:</span>{" "}
            {filteredMembers.length > 0 ? (
              filteredMembers.join(", ")
            ) : (
              <span className="italic text-gray-600">
                No members match your search
              </span>
            )}
          </div>
          <div className="mb-1">
            <span className="font-bold">Registered:</span>{" "}
            {projectData.registered}
          </div>
          <div className="mb-1">
            <span className="font-bold">Leader:</span> {projectData.leader}
          </div>
          <div>
            <span className="font-bold">Status:</span> {projectData.status}
          </div>
        </div>

        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center w-full md:w-auto"
        >
          Join
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
      </div>
    </section>
  );
};

export default JoinProjectSection;
