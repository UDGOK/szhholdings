"use client";

import TeamHero from '@/components/team/Hero';
import TeamMembers from '@/components/team/TeamMembers';

const TeamPage = () => {
  return (
    <main className="flex-1">
      <TeamHero />
      <TeamMembers />
    </main>
  );
};

export default TeamPage;