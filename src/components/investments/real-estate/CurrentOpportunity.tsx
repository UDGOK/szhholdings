import React from 'react';
import Link from 'next/link';

const CurrentOpportunity = () => {
  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-xl overflow-hidden shadow-2xl">
      <div className="p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              The Village at Windrose
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Premium Build-to-Rent Investment Opportunity
            </p>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 text-emerald-400">Investment Highlights</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Targeted IRR: 24.8%</li>
                <li>• Equity Multiple: 2.17x</li>
                <li>• Trended Yield: 8.1%</li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 text-emerald-400">Property Overview</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 170 Total Units</li>
                <li>• 20 Acres</li>
                <li>• Opening 2025</li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 text-emerald-400">Location</h3>
              <p className="text-gray-300">
                13031 E 121st Street<br />
                Broken Arrow, OK
              </p>
            </div>
          </div>

          {/* Project Details */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-emerald-400">Project Overview</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our Build-to-Rent (BTR) strategy represents a paradigm shift in residential real estate, 
              focusing on purpose-built, single-family rental communities that meet the evolving demands
              of today&apos;s housing market. This institutional-grade rental asset is strategically positioned
              in a high-growth market, optimized for both operational efficiency and resident experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-400">Unit Mix</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between items-center bg-white/5 p-3 rounded">
                    <span>1 Bedroom</span>
                    <span>From $1,189/month</span>
                  </li>
                  <li className="flex justify-between items-center bg-white/5 p-3 rounded">
                    <span>2 Bedroom</span>
                    <span>From $2,140/month</span>
                  </li>
                  <li className="flex justify-between items-center bg-white/5 p-3 rounded">
                    <span>3 Bedroom</span>
                    <span>From $3,090/month</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-400">Capital Structure</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between items-center bg-white/5 p-3 rounded">
                    <span>LP Equity</span>
                    <span>51%</span>
                  </li>
                  <li className="flex justify-between items-center bg-white/5 p-3 rounded">
                    <span>Sponsor Equity</span>
                    <span>6%</span>
                  </li>
                  <li className="flex justify-between items-center bg-white/5 p-3 rounded">
                    <span>Preferred Equity</span>
                    <span>43%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Link 
              href="/pdf/The-Village-at-Windrose.pdf"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              target="_blank"
            >
              Download Investment Memorandum
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentOpportunity;