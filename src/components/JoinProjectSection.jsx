import React, { useState, useEffect, useRef } from "react";

const projects = [
  {
    name: "IH Website",
    members: ["Arya", "Abhir", "Saichandan"],
    registered: "2025-07-24",
    leader: "Idkk",
    status: "Active",
    category: "Web Development",
  },
  {
    name: "New App Launch",
    members: ["Alex", "Dana"],
    registered: "2025-08-12",
    leader: "Mike",
    status: "Active",
    category: "Mobile App",
  },
  {
    name: "Project Phoenix",
    members: ["Maria", "John"],
    registered: "2025-09-10",
    leader: "Kate",
    status: "Inactive",
    category: "AI & Machine Learning",
  },
  {
    name: "Green Initiative",
    members: ["Lina", "Robert"],
    registered: "2025-10-05",
    leader: "Oliver",
    status: "Active",
    category: "Environment",
  },
  // Add more projects as needed...
];

// Combine unique suggestions from project names and categories
const uniqueSuggestions = Array.from(
  new Set([...projects.map((p) => p.name), ...projects.map((p) => p.category)])
);

const JoinProjectSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [joinMessage, setJoinMessage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      setJoinMessage(null);
      setSelectedProject(null);
      return;
    }

    const lowerSearch = searchTerm.toLowerCase();
    const filtered = uniqueSuggestions.filter((s) =>
      s.toLowerCase().includes(lowerSearch)
    );
    setFilteredSuggestions(filtered);
    setShowSuggestions(filtered.length > 0);
  }, [searchTerm]);

  // Close suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    setJoinMessage(null);
    setSelectedProject(null);
  };

  // Filter projects by name or category if searchTerm present.
  // If search term empty, show first 4 projects
  const filteredProjects =
    searchTerm.trim() === ""
      ? projects.slice(0, 3)
      : projects.filter(
          (p) =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.category.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const handleJoinClick = (project) => {
    if (project.status.toLowerCase() !== "active") {
      setJoinMessage(`Sorry, "${project.name}" is not open for joining.`);
      setSelectedProject(null);
      return;
    }
    // setJoinMessage(
    //   `Thank you for your interest in "${project.name}". We will be in touch soon!`
    // );
    setSelectedProject(project.name);
  };

  return (
    <section className="mb-8 p-6 max-w-4xl mx-auto text-black">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold">
          Join{" "}
          <span
            className="text-[#093FB4] italic"
            style={{ fontStyle: "italic" }}
          >
            project
          </span>
        </h2>
      </div>

      {/* Search Input */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative max-w-xl mx-auto mb-6"
        aria-label="Search projects"
      >
        <input
          ref={inputRef}
          type="search"
          id="project-search"
          className="w-full border rounded-xl px-4 py-3 pl-10 text-sm focus:outline-yellow-400"
          placeholder="Search by project name or category..."
          spellCheck="false"
          autoComplete="off"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-autocomplete="list"
          aria-controls="suggestions-list"
          aria-haspopup="listbox"
          aria-expanded={showSuggestions}
        />
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
            />
          </svg>
        </div>

        {/* Suggestions dropdown */}
        {showSuggestions && (
          <ul
            id="suggestions-list"
            role="listbox"
            ref={suggestionsRef}
            className="absolute z-50 mt-1 max-h-48 w-full overflow-auto rounded border border-gray-300 bg-white shadow-lg"
          >
            {filteredSuggestions.map((item, idx) => (
              <li
                key={idx}
                role="option"
                tabIndex={0}
                className="cursor-pointer px-4 py-2 hover:bg-blue-600 hover:text-white"
                onClick={() => handleSuggestionClick(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSuggestionClick(item);
                  }
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </form>

      {/* Project Cards */}
      <div>
        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-600">
            No projects match your search.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="border rounded-lg shadow-sm p-6 flex flex-col"
                aria-label={`Project: ${project.name}`}
              >
                <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                <p className="mb-1">
                  <span className="font-semibold">Category:</span>{" "}
                  {project.category}
                </p>
                <p className="mb-1">
                  <span className="font-semibold">Members:</span>{" "}
                  {project.members.join(", ")}
                </p>
                <p className="mb-1">
                  <span className="font-semibold">Registered:</span>{" "}
                  {project.registered}
                </p>
                <p className="mb-1">
                  <span className="font-semibold">Leader:</span>{" "}
                  {project.leader}
                </p>
                <p className="mb-4">
                  <span className="font-semibold">Status:</span>{" "}
                  <span
                    className={
                      project.status.toLowerCase() === "active"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {project.status}
                  </span>
                </p>
                <button
                  onClick={() => handleJoinClick(project)}
                  disabled={project.status.toLowerCase() !== "active"}
                  className={`mt-auto py-2 px-4 rounded text-white transition ${
                    project.status.toLowerCase() === "active"
                      ? "bg-blue-700 hover:bg-blue-800 cursor-pointer"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  aria-disabled={project.status.toLowerCase() !== "active"}
                >
                  Join
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Join feedback */}
      {joinMessage && (
        <p
          className={`mt-6 text-center font-semibold ${
            selectedProject ? "text-green-700" : "text-red-700"
          }`}
          role="alert"
        >
          {joinMessage}
        </p>
      )}
    </section>
  );
};

export default JoinProjectSection;
