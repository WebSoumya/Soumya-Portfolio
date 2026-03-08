import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, GitBranch, Trello } from 'lucide-react';

export default function Education() {
  return (
    // Pale sage background matching the other pages
    <div className="min-h-screen bg-[#e8ecd8] text-[#1a1a1a] font-sans overflow-x-hidden pb-24">
      
      {/* Back to Home Navigation */}
      <div className="p-6 md:px-12 pt-8">
        <Link to="/" className="inline-flex items-center font-typewriter text-sm font-bold hover:text-[#f05d64] transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" /> 
          BACK TO HOME
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Massive Bold Header */}
        <h1 className="text-6xl md:text-[5.5rem] font-extrabold tracking-tighter mb-12 text-[#1a1a1a]">
          Education
        </h1>

        {/* EDUCATION BLOCK - White Box with signature shadow */}
        <div className="bg-white border-2 border-[#1a1a1a] shadow-[8px_8px_0px_#1a1a1a] p-8 md:p-12 mb-16 relative">
          
          {/* Decorative Corner Ribbon */}
          <div className="absolute top-0 right-0 bg-[#f05d64] text-white font-typewriter text-xs font-bold px-4 py-1 border-b-2 border-l-2 border-[#1a1a1a]">
            ACADEMICS
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4 mt-4">
            
            {/* Left Side: Date & Degree */}
            <div className="flex flex-col text-left space-y-2 w-full md:w-1/2">
              <span className="font-typewriter text-[#87ab91] font-bold tracking-widest uppercase text-sm">
                Jun 2018 – Jun 2022
              </span>
              <span className="font-bebas text-4xl md:text-5xl tracking-wide text-[#1a1a1a] leading-none">
                Bachelor of Technology (B.Tech)
              </span>
            </div>

            {/* Right Side: College & CGPA */}
            <div className="flex flex-col md:text-right space-y-2 w-full md:w-1/2 md:items-end">
              <span className="font-bebas text-3xl md:text-4xl tracking-wide text-[#f05d64] leading-none">
                NETAJI SUBHASH ENGINEERING COLLEGE (TECHNO INDIA)
              </span>
              <span className="font-typewriter text-[#1a1a1a] font-bold bg-[#e8ecd8] border-2 border-[#1a1a1a] px-3 py-1 inline-block mt-2 shadow-[2px_2px_0px_#1a1a1a]">
                CGPA: 8.56 / 10.0
              </span>
            </div>

          </div>
        </div>

        {/* The thin divider line */}
        <hr className="border-[#c4cec0] my-12 border-t-2" />

        {/* ADDITIONAL HIGHLIGHTS SECTION */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-8 text-[#1a1a1a]">
            Additional <span className="text-[#87ab91]">Highlights</span>
          </h2>

          {/* Grid for the dark green & white combination cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Dark Green Base */}
            <div className="bg-[#87ab91] text-white border-2 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a] p-6 md:p-8 flex flex-col hover:-translate-y-2 transition-transform duration-300">
              <Zap className="w-10 h-10 mb-6 text-[#fcfaf5]" strokeWidth={1.5} />
              <p className="font-sans text-[15px] leading-relaxed font-semibold">
                Strong problem-solving skills, continuous learner, and collaborative team player with experience delivering projects in Agile environments.
              </p>
            </div>

            {/* Card 2: White Base (Alternating) */}
            <div className="bg-white text-[#1a1a1a] border-2 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a] p-6 md:p-8 flex flex-col hover:-translate-y-2 transition-transform duration-300">
              <GitBranch className="w-10 h-10 mb-6 text-[#f05d64]" strokeWidth={1.5} />
              <p className="font-sans text-[15px] leading-relaxed font-semibold">
                Proficient in <span className="text-[#f05d64] font-bold">Git branching strategies</span> (Feature, Integration, Release, Hotfix, Bugfix) for efficient source code management.
              </p>
            </div>

            {/* Card 3: Dark Green Base */}
            <div className="bg-[#87ab91] text-white border-2 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a] p-6 md:p-8 flex flex-col hover:-translate-y-2 transition-transform duration-300">
              <Trello className="w-10 h-10 mb-6 text-[#fcfaf5]" strokeWidth={1.5} />
              <p className="font-sans text-[15px] leading-relaxed font-semibold">
                Skilled in <span className="text-[#1a1a1a] font-bold bg-[#fcfaf5] px-1">Jira</span> for sprint management, task tracking, and issue management in Agile projects.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}