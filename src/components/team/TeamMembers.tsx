import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Smith",
    role: "Chief Executive Officer",
    bio: "With over 15 years of experience in investment management, John leads our team with vision and expertise.",
  },
  {
    name: "Sarah Johnson",
    role: "Chief Investment Officer",
    bio: "Sarah brings deep expertise in portfolio management and market analysis to guide our investment strategies.",
  },
  {
    name: "Michael Chen",
    role: "Head of Research",
    bio: "Michael leads our research team in identifying and analyzing investment opportunities across global markets.",
  },
  {
    name: "Emily Brown",
    role: "Client Relations Director",
    bio: "Emily ensures our clients receive exceptional service and comprehensive support for their investment needs.",
  },
  {
    name: "David Wilson",
    role: "Risk Management Director",
    bio: "David oversees our risk management strategies to protect and optimize client investments.",
  },
  {
    name: "Lisa Martinez",
    role: "Operations Manager",
    bio: "Lisa ensures smooth day-to-day operations and efficient execution of our investment strategies.",
  }
];

const TeamMembers = () => {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        <svg
          className="absolute inset-0 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="team-members-pattern"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#team-members-pattern)" />
        </svg>
      </div>

      <div className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900/50 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-white/10 shadow-[0_8px_16px_rgb(0_0_0/0.4)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-[0_12px_24px_rgb(0_0_0/0.5)]"
              >
                <div className="aspect-w-3 aspect-h-4 relative h-64">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity group-hover:opacity-90" />
                  <div className="h-full w-full bg-gradient-to-br from-blue-900/50 to-gray-900/50" />
                </div>
                <div className="relative p-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-200">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-blue-200/80 group-hover:text-blue-100">
                      {member.role}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-gray-300 group-hover:text-white">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;