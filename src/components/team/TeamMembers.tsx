import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin: string;
  email: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Syed Hussain",
    role: "President",
    bio: "Syed Hussain is a seasoned business leader with extensive experience in investment management and strategic growth. As President of SHT Investments, he brings a wealth of expertise in business development, strategic partnerships, and investment strategies.",
    linkedin: "https://www.linkedin.com/in/syed-hussain-6064b971/",
    email: "syed.hussain@shtinvestments.com"
  },
  {
    name: "Yasir Jahangir",
    role: "Chief Technology Officer & Head of Design",
    bio: "As CTO and Head of Design, Yasir leads our technology initiatives and design strategies. With a strong background in software development and user experience, he ensures our technological infrastructure and design systems meet the highest standards of excellence.",
    linkedin: "https://www.linkedin.com/in/udg/",
    email: "yasir.jahangir@shtinvestments.com"
  }
];

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
};

const TeamMembers = () => {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.015] mix-blend-overlay" />
        <div className="absolute -left-[50%] top-0 h-[1000px] w-[1000px] animate-blob rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-3xl filter" />
        <div className="absolute -right-[50%] top-[20%] h-[1000px] w-[1000px] animate-blob animation-delay-2000 rounded-full bg-gradient-to-l from-indigo-500/30 to-purple-500/30 blur-3xl filter" />
        <div className="absolute left-[25%] top-[50%] h-[1000px] w-[1000px] animate-blob animation-delay-4000 rounded-full bg-gradient-to-tr from-pink-500/30 to-blue-500/30 blur-3xl filter" />
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      <div className="relative w-full py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  duration: 0.8,
                  delay: index * 0.2,
                  bounce: 0.4
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-1 backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <div className="relative overflow-hidden rounded-xl bg-gray-900/40">
                    <div className="aspect-w-16 aspect-h-9 relative">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-center"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20">
                          <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                          >
                            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-lg" />
                            <span className="relative block text-6xl font-bold text-white/90">
                              {getInitials(member.name)}
                            </span>
                          </motion.div>
                        </div>
                      )}
                    </div>

                    <div className="relative p-8">
                      <div className="space-y-2">
                        <motion.h3
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                          className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-2xl font-bold text-transparent transition-all duration-300 group-hover:from-blue-600 group-hover:to-purple-600"
                        >
                          {member.name}
                        </motion.h3>
                        <motion.div
                         initial={{ opacity: 0, x: -20 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                         className="flex items-center gap-2"
                       >
                         <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 transition-colors group-hover:bg-blue-200">
                           {member.role}
                         </span>
                       </motion.div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                        className="mt-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-4 backdrop-blur-sm"
                      >
                        <p className="text-sm leading-relaxed tracking-wide text-gray-700 [text-wrap:balance]">
                          {member.bio}
                        </p>
                      </motion.div>

                      {/* Divider */}
                      <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

                      {/* Social Links */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                        className="mt-6 flex flex-col space-y-4"
                      >
                        <Link
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center space-x-3 rounded-lg bg-gradient-to-r from-white/10 to-white/5 p-3 transition-all duration-300 hover:from-white/20 hover:to-white/10 hover:scale-[1.02] hover:shadow-lg"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 transition-all duration-300 group-hover/link:from-blue-500/30 group-hover/link:to-purple-500/30">
                            <svg className="h-5 w-5 text-blue-400 transition-transform duration-300 group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                          </div>
                          <span className="text-sm text-blue-300 transition-colors group-hover/link:text-blue-200">LinkedIn Profile</span>
                        </Link>

                        <Link
                          href={`mailto:${member.email}`}
                          className="group/link flex items-center space-x-3 rounded-lg bg-gradient-to-r from-white/10 to-white/5 p-3 transition-all duration-300 hover:from-white/20 hover:to-white/10 hover:scale-[1.02] hover:shadow-lg"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 transition-all duration-300 group-hover/link:from-blue-500/30 group-hover/link:to-purple-500/30">
                            <svg className="h-5 w-5 text-blue-400 transition-transform duration-300 group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                          </div>
                          <span className="text-sm text-blue-300 transition-colors group-hover/link:text-blue-200">{member.email}</span>
                        </Link>
                      </motion.div>
                    </div>
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