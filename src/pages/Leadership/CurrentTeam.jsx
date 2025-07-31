import React from "react";

// Use actual image paths for real deployment
const placeholderImage = "https://via.placeholder.com/150?text=Profile";

const teamData = [
  {
    department: "Leadership",
    members: [
      {
        name: "Shashwat Nande",
        position: "President",
        image: "/images/shashwat.jpg",
      },
      {
        name: "Swastik Singh",
        position: "Vice President",
        image: "/images/swastik.jpg",
      },
      {
        name: "Zahid Pansare",
        position: "Executive Head",
        image: "/images/zahid.jpg",
      },
    ],
  },
  {
    department: "Company Relations Department",
    members: [
      {
        name: "Janvi Bajpayee",
        position: "Company Relations Head",
        image: "/images/janvi.jpg",
      },
      {
        name: "Alroy Lopez",
        position: "Company Relations Committee Member",
        image: "/images/alroy.jpg",
      },
    ],
  },
  {
    department: "Technical Department",
    members: [
      {
        name: "Abhir Bengali",
        position: "Technical Head",
        image: "/images/abhir.jpg",
      },
      {
        name: "Zaara Hirani",
        position: "Project Manager",
        image: "/images/zaara.jpg",
      },
      {
        name: "Aaradhya Banginwar",
        position: "Software Head",
        image: "/images/aaradhya.jpg",
      },
    ],
  },
  {
    department: "Events and Operations",
    members: [
      {
        name: "Atharva Falle",
        position: "Events and Operations Head",
        image: "/images/atharva.jpg",
      },
    ],
  },
  {
    department: "Design Department",
    members: [
      {
        name: "Shlok Jain",
        position: "Design Head",
        image: "/images/shlok.jpg",
      },
      {
        name: "Manaswi Deshmukh",
        position: "Design Committee Member",
        image: "/images/manaswi.jpg",
      },
    ],
  },
  {
    department: "Marketing Department",
    members: [
      {
        name: "Niyati Mahavar",
        position: "Marketing Committee Member",
        image: "/images/niyati.jpg",
      },
      {
        name: "Divya Tiwari",
        position: "Marketing Committee Member",
        image: "/images/divya.jpg",
      },
      {
        name: "Lakshya Maheshwari",
        position: "Marketing Committee Member",
        image: "/images/lakshya.jpg",
      },
    ],
  },
  {
    department: "Data & HR Department",
    members: [
      {
        name: "Videeta Raut",
        position: "Data & HR Committee Member",
        image: "/images/videeta.jpg",
      },
      {
        name: "Janhavi Patel",
        position: "Data & HR Committee Member",
        image: "/images/janhavi.jpg",
      },
    ],
  },
];

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

const MemberCard = ({ name, position, image }) => (
  <div className="group relative flex flex-col items-center px-6 py-8 bg-white border border-gray-100 rounded-2xl shadow-xl transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-yellow-400 max-w-[300px] w-full">
    {/* Profile image with outline */}
    <div className="relative">
      <img
        src={image || placeholderImage}
        alt={name}
        className="w-28 h-28 rounded-full border-4 border-blue-500/80 bg-white object-cover shadow-lg group-hover:border-yellow-400 transition duration-200"
        loading="lazy"
      />
      {/* Initials overlay for fallback */}
      {!image && (
        <span className="absolute inset-0 flex items-center justify-center font-bold text-2xl text-blue-900">
          {initials(name)}
        </span>
      )}
      {/* Icon badge (future: for social or status) */}
      <span className="absolute -bottom-2 -right-2 bg-yellow-400 text-xs text-blue-900 px-2 py-1 rounded-lg shadow">
        {position.split(" ")[0]}
      </span>
    </div>
    {/* Name & Position */}
    <h3 className="mt-6 text-xl font-bold text-gray-900">{name}</h3>
    <span className="mt-2 bg-blue-50 text-blue-700/90 rounded-2xl px-4 py-1 text-sm font-medium shadow-sm">
      {position}
    </span>
  </div>
);

const CurrentTeam = () => {
  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-blue-50 to-yellow-50 flex flex-col justify-center items-center gap-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-14 text-blue-700 tracking-tight drop-shadow-sm">
        Our Leadership & Team
      </h1>
      <div className="max-w-7xl mx-auto space-y-24 ">
        {teamData.map(({ department, members }) => (
          <section
            key={department}
            className="my-2 flex flex-col justify-center "
          >
            <div className="flex items-center mb-10">
              <div className="w-2 h-10 bg-yellow-400 rounded-md mr-4"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 tracking-tight">
                {department}
              </h2>
            </div>
            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-8 justify-items-center mb-6 ">
              {members.map(({ name, position, image }) => (
                <MemberCard
                  key={name}
                  name={name}
                  position={position}
                  image={image}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default CurrentTeam;
