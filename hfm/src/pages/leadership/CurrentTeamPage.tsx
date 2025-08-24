


import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroTeams from "../../components/HeroTeams";

// --- Types ---
interface Member {
  name: string;
  position: string;
  image?: string;
}

interface TeamDepartment {
  department: string;
  members: Member[];
}

// --- Data ---
const placeholderImage = "https://via.placeholder.com/150?text=Profile";

const teamData: TeamDepartment[] = [
  {
    department: "Leadership",
    members: [
      { name: "Shashwat Nande", position: "President", image: "/ShashwatNande.png" },
      { name: "Swastik Singh", position: "Vice President", image: "/Swastik Singh.jpg" },
      { name: "Zahid Pansare", position: "Executive Head", image: "/Zahid Pansare.jpg" },
    ],
  },
  {
    department: "Company Relations Department",
    members: [
      { name: "Janvi Bajpayee", position: "Company Relations Head", image: "/janvib.jpg" },
      { name: "Alroy Lopez", position: "Company Relations Committee Member", image: "/alroy.jpg" },
    ],
  },
  {
    department: "Technical Department",
    members: [
      { name: "Abhir Bengali", position: "Technical Head", image: "/Abhir Bengali.jpg" },
      { name: "Zaara Hirani", position: "Project Manager", image: "/zaara.jpg" },
      { name: "Aaradhya Banginwar", position: "Software Head", image: "/Aaradhya Banginwar.png" },
    ],
  },
  {
    department: "Events and Operations",
    members: [
      { name: "Atharva Falle", position: "Events and Operations Head", image: "/Atharva Falle.jpg" },
    ],
  },
  {
    department: "Design Department",
    members: [
      { name: "Shlok Jain", position: "Design Head", image: "/Shlok Jain.jpg" },
      { name: "Manaswi Deshmukh", position: "Design Committee Member", image: "/Manaswi Deshmukh.jpg" },
    ],
  },
  {
    department: "Marketing Department",
    members: [
      { name: "Niyati Mahawar", position: "Marketing Committee Member", image: "/Niyati Mahavar.jpg" },
      { name: "Divya Tiwari", position: "Marketing Committee Member", image: "/divya.jpg" },
      { name: "Lakshya Maheshwari", position: "Marketing Committee Member", image: "/lak.jpg" },
    ],
  },
  {
    department: "Data & HR Department",
    members: [
      { name: "Videeta Raut", position: "Data & HR Committee Member", image: "/Videeta Raut.jpg" },
      { name: "Janhavi Patel", position: "Data & HR Committee Member", image: "/Janhavi Patel.jpg" },
    ],
  },
];

// --- Helper to get initials ---
function initials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

// --- Member Card Component ---
interface MemberCardProps extends Member {}

const MemberCard: React.FC<MemberCardProps> = ({ name, position, image }) => (
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
      {/* Icon badge for position */}
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

const AnimatedBackground = React.memo(() => (
  <div className="background-shapes" aria-hidden="true">
    {/* Large gradient orbs */}
    <div className="floating-shape gradient-orb orb-1" />
    <div className="floating-shape gradient-orb orb-2" />
    <div className="floating-shape gradient-orb orb-3" />
    <div className="floating-shape gradient-orb orb-4" />
    <div className="floating-shape gradient-orb orb-5" />
    <div className="floating-shape gradient-orb orb-6" />
    
    {/* Multiple Hexagons */}
    <div className="floating-shape geometric-shape hexagon hexagon-1" />
    <div className="floating-shape geometric-shape hexagon hexagon-2" />
    <div className="floating-shape geometric-shape hexagon hexagon-3" />
    
    {/* Multiple Triangles */}
    <div className="floating-shape geometric-shape triangle-shape triangle-1" />
    <div className="floating-shape geometric-shape triangle-shape triangle-2" />
    <div className="floating-shape geometric-shape triangle-shape triangle-3" />
    <div className="floating-shape geometric-shape triangle-shape triangle-4" />
    
    {/* Multiple Diamonds */}
    <div className="floating-shape geometric-shape diamond diamond-1" />
    <div className="floating-shape geometric-shape diamond diamond-2" />
    <div className="floating-shape geometric-shape diamond diamond-3" />
    
    {/* Rotating Squares */}
    <div className="floating-shape square-shape square-1" />
    <div className="floating-shape square-shape square-2" />
    <div className="floating-shape square-shape square-3" />
    
    {/* Pulsing Circles */}
    <div className="floating-shape circle-pulse circle-1" />
    <div className="floating-shape circle-pulse circle-2" />
    <div className="floating-shape circle-pulse circle-3" />
    
    {/* Twinkling Stars */}
    <div className="floating-shape star-shape star-1" />
    <div className="floating-shape star-shape star-2" />
    <div className="floating-shape star-shape star-3" />
    
    {/* Enhanced Floating particles */}
    {Array.from({ length: 12 }, (_, i) => (
      <div 
        key={`particle-${i}`}
        className="particle" 
        style={{ 
          top: `${Math.random() * 80 + 10}%`, 
          left: `${Math.random() * 80 + 10}%`, 
          animationDelay: `${i * 0.8}s`,
          animationDuration: `${15 + Math.random() * 10}s`
        }} 
      />
    ))}

    {/* Mini particles */}
    {Array.from({ length: 20 }, (_, i) => (
      <div 
        key={`mini-particle-${i}`}
        className="mini-particle" 
        style={{ 
          top: `${Math.random() * 90 + 5}%`, 
          left: `${Math.random() * 90 + 5}%`, 
          animationDelay: `${i * 0.4}s`,
          backgroundColor: `var(--${['blue', 'purple', 'yellow', 'green', 'pink'][i % 5]}-accent)`
        }} 
      />
    ))}

    {/* Large particles */}
    {Array.from({ length: 8 }, (_, i) => (
      <div 
        key={`large-particle-${i}`}
        className="large-particle" 
        style={{ 
          top: `${Math.random() * 80 + 10}%`, 
          left: `${Math.random() * 80 + 10}%`, 
          animationDelay: `${i * 1.2}s`,
          backgroundColor: `var(--${['purple', 'blue', 'green', 'pink'][i % 4]}-accent)`
        }} 
      />
    ))}
    
    {/* Pentagon shapes */}
    <div className="floating-shape pentagon pentagon-1" />
    <div className="floating-shape pentagon pentagon-2" />
    <div className="floating-shape pentagon pentagon-3" />
    
    {/* Octagon shapes */}
    <div className="floating-shape octagon octagon-1" />
    <div className="floating-shape octagon octagon-2" />
    <div className="floating-shape octagon octagon-3" />
    
    {/* Cross shapes */}
    <div className="floating-shape cross cross-1" />
    <div className="floating-shape cross cross-2" />
    <div className="floating-shape cross cross-3" />
    
    {/* Heart shapes */}
    <div className="floating-shape heart heart-1" />
    <div className="floating-shape heart heart-2" />
    <div className="floating-shape heart heart-3" />
    
    {/* Arrow shapes */}
    <div className="floating-shape arrow arrow-1" />
    <div className="floating-shape arrow arrow-2" />
    <div className="floating-shape arrow arrow-3" />
    
    {/* Lightning bolts */}
    <div className="floating-shape lightning lightning-1" />
    <div className="floating-shape lightning lightning-2" />
    <div className="floating-shape lightning lightning-3" />
    
    {/* Spiral shapes */}
    <div className="floating-shape spiral spiral-1" />
    <div className="floating-shape spiral spiral-2" />
    <div className="floating-shape spiral spiral-3" />
    
    {/* Wave shapes */}
    <div className="floating-shape wave wave-1" />
    <div className="floating-shape wave wave-2" />
    <div className="floating-shape wave wave-3" />
    
    {/* Infinity symbols */}
    <div className="floating-shape infinity infinity-1" />
    <div className="floating-shape infinity infinity-2" />
    
    {/* Multiple Morphing blobs */}
    <div className="floating-shape morphing-blob blob-1" />
    <div className="floating-shape morphing-blob blob-2" />
    <div className="floating-shape morphing-blob blob-3" />
    
    {/* Grid overlay */}
    <div className="grid-overlay" />
  </div>
));

// --- Main Team Page ---
const CurrentTeamPage: React.FC = () => {
  return (
    <>
    <Header/>
    <div className="relative">
  <div className="w-full -mt-0">
    <HeroTeams />
  </div>
    <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-blue-50 to-yellow-50 flex flex-col justify-center items-center gap-8">
      
      <div className="max-w-7xl mx-auto space-y-24 ">
        {teamData.map(({ department, members }) => (
          <section
            key={department}
            className="my-2 flex flex-col justify-center"
          >
            <div className="flex items-center mb-10">
              <div className="w-2 h-10 bg-yellow-400 rounded-md mr-4"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 tracking-tight">
                {department}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-8 justify-items-center mb-6">
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
    </div>
    <Footer/>
    </>
  );
};

export default CurrentTeamPage;