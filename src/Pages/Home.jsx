import React,{ useState, useEffect } from 'react';
import { Briefcase, Code2, UserCircle, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

import techStackImage from '../assets/profile.png'; 
import profileImage from '../assets/tech.jpg';

function Home() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // 2. Listen for window resize events to update the state dynamically
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    
    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 3. THE CONDITION: If it is mobile, return this stacked version
  if (isMobile) {
    return (
      <div className="min-h-screen overflow-x-hidden bg-[#fcfaf5] font-sans text-[#2b2b2b] flex flex-col">
        {/* Simplified Mobile Header */}
        <header className="px-4 py-8 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bebas text-[#f05d64] tracking-wider mb-1">SOUMYAJIT DAS</h1>
          <p className="text-xs tracking-[0.2em] uppercase font-semibold text-gray-700 mb-8">Java Full Stack Developer</p>
          
          <div className="flex w-full justify-around">
           <Link to="/experience" className="flex flex-col items-center group cursor-pointer"/>
            <a href="/skillset" className="flex flex-col items-center"><Code2 className="w-8 h-8 mb-1" /><span className="text-[10px]">SkillSet</span></a>
            <a href="#contact" className="flex flex-col items-center"><UserCircle className="w-8 h-8 mb-1" /><span className="text-[10px]">Contact</span></a>
          </div>
        </header>

        {/* Stacked Mobile Body */}
        <main className="flex flex-col w-full flex-1">
          {/* Top Green Box */}
          <div className="w-full bg-[#9ec2a8] py-12 px-6 flex flex-col items-center gap-6 border-t-[10px] border-[#fcfaf5] border-dotted">
            <div className="w-full max-w-[260px] h-[20rem] bg-pink-300 border-4 border-white shadow-lg flex items-center justify-center p-4">
              <img 
  src={techStackImage} 
  alt="My Tech Stack" 
  className="w-full h-[20rem] object-cover border-4 border-white shadow-lg shrink-0"
/>
            </div>
            <div className="flex flex-col gap-4 w-full max-w-[260px]">
              <button className="bg-white text-[#1a1a1a] border-2 border-[#1a1a1a] py-3 font-typewriter font-bold shadow-[4px_4px_0px_#1a1a1a]">Hire Me</button>
              <button className="bg-white text-[#1a1a1a] border-2 border-[#1a1a1a] py-3 font-typewriter font-bold shadow-[4px_4px_0px_#1a1a1a]">Resume</button>
            </div>
          </div>
          
          {/* Bottom Dark Green Box */}
          <div className="w-full bg-[#87ab91] py-12 px-6 flex flex-col items-center">
            <p className="font-typewriter text-lg mb-8 text-white font-bold text-center">HELLO I AM SOUMYA,<br/>MAYBE THE CORRECT PERSON YOU ARE LOOKING FOR!</p>
            <div className="w-64 h-72 bg-[#f05d64] border-2 border-[#1a1a1a] p-3 flex items-center justify-center shadow-[6px_6px_0px_#1a1a1a]">
               <img 
  src={profileImage} 
  alt="Soumyajit Das" 
  className="w-50 h-50 border-2 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a]"
/>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    // 'h-screen' and 'overflow-hidden' ensure the page fits the window exactly with zero scrolling
    <div className="h-screen overflow-hidden bg-[#fcfaf5] font-sans text-[#2b2b2b] flex flex-col">
      
      {/* HEADER SECTION - Reduced padding to close the gap */}
      <header className="max-w-7xl w-full mx-auto px-6 py-4 flex justify-between items-center shrink-0">
        
        {/* Left Icons */}
        <div className="flex space-x-12">
          <Link to="/experience" className="flex flex-col items-center group cursor-pointer">
            <Briefcase strokeWidth={1.5} className="w-10 h-10 mb-2 group-hover:-translate-y-1 transition-transform" />
            <span className="text-xs tracking-widest uppercase font-semibold">Experience</span>
          </Link>
          <Link to="/skillset" className="flex flex-col items-center group cursor-pointer">
            <Code2 strokeWidth={1.5} className="w-10 h-10 mb-2 group-hover:-translate-y-1 transition-transform" />
            <span className="text-xs tracking-widest uppercase font-semibold">SkillSet</span>
          </Link>
        </div>

        {/* Center Logo Area */}
        <div className="flex flex-col items-center text-center px-4">
          <div className="flex items-center space-x-4 mb-1">
          </div>
          <h1 className="text-5xl md:text-6xl font-bebas text-[#f05d64] tracking-wider mb-1">
            SOUMYAJIT DAS
          </h1>
          <p className="text-sm tracking-[0.2em] uppercase font-semibold text-gray-700">
            Java Full Stack Developer
          </p>
        </div>

        {/* Right Icons */}
        <div className="flex space-x-12">
         
          <Link to="/contact" className="flex flex-col items-center group cursor-pointer">
            <UserCircle strokeWidth={1.5} className="w-10 h-10 mb-2 group-hover:-translate-y-1 transition-transform" />
            <span className="text-xs tracking-widest uppercase font-semibold">Contact Me</span>
          </Link>
          <Link to="/education" className="flex flex-col items-center group cursor-pointer">
            <GraduationCap strokeWidth={1.5} className="w-10 h-10 mb-2 group-hover:-translate-y-1 transition-transform" />
            <span className="text-xs tracking-widest uppercase font-semibold">Education</span>
          </Link>
        </div>
      </header>

      {/* MAIN GREEN SPLIT SECTION - 'flex-1' makes it stretch to the bottom of the screen */}
      <main className="relative flex w-full flex-1 mt-4">
        
        {/* The Scalloped Border (Wavy Pattern) - Flawless inline implementation */}
        <div className="absolute top-[-14px] left-0 w-full h-[15px] z-20 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 10px 0, #fcfaf5 10px, transparent 11px)',
          backgroundSize: '20px 15px',
          backgroundRepeat: 'repeat-x'
        }}></div>

        {/* Left Column - Lighter Green */}
        <div className="w-[65%] bg-[#9ec2a8] py-8 px-10 relative flex justify-center items-center">
          
          {/* Black Ribbon */}
          <div 
            className="absolute left-0 top-12 bg-[#2b2b2b] text-[#f4aeba] font-typewriter text-sm tracking-widest py-3 pl-6 pr-8 z-10"
            style={{ clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)' }}
          >
            PORTFOLIO
          </div>

          <div className="w-full max-w-2xl flex items-center justify-around gap-8">
            {/* Tech Stack Image Placeholder */}
            <img 
  src={techStackImage} 
  alt="My Tech Stack" 
  className="w-64 h-[22rem] object-cover border-4 border-white shadow-lg shrink-0"
/>

            {/* Techie Action Buttons Area */}
            <div className="flex flex-col gap-6 w-full max-w-[280px]">
              <button className="font-typewriter font-bold tracking-widest uppercase bg-white text-[#1a1a1a] border-2 border-[#1a1a1a] hover:bg-[#f05d64] hover:text-white transition-colors duration-200 shadow-[5px_5px_0px_#1a1a1a] active:shadow-none active:translate-y-[5px] active:translate-x-[5px] py-4 px-6 text-sm flex justify-center items-center cursor-pointer">
                Hire Me
              </button>
              <button className="font-typewriter font-bold tracking-widest uppercase bg-white text-[#1a1a1a] border-2 border-[#1a1a1a] hover:bg-[#f05d64] hover:text-white transition-colors duration-200 shadow-[5px_5px_0px_#1a1a1a] active:shadow-none active:translate-y-[5px] active:translate-x-[5px] py-4 px-6 text-sm flex justify-center items-center cursor-pointer">
                Download Resume
              </button>
              <button className="font-typewriter font-bold tracking-widest uppercase bg-white text-[#1a1a1a] border-2 border-[#1a1a1a] hover:bg-[#f05d64] hover:text-white transition-colors duration-200 shadow-[5px_5px_0px_#1a1a1a] active:shadow-none active:translate-y-[5px] active:translate-x-[5px] py-4 px-6 text-xs text-center flex justify-center items-center cursor-pointer">
                Check Resume Score
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Darker Green */}
        <div className="w-[36%] bg-[#87ab91] py-8 px-10 flex flex-col items-center justify-center border-l border-[#76997f]">
           <div className="max-w-xs text-center flex flex-col items-center">
              
              {/* Updated Text: White, bigger, and slightly shadowed */}
              <p className="font-typewriter text-2x1 tracking-wide mb-10 text-white font-bold leading-relaxed drop-shadow-md">
                HELLO I AM SOUMYA! MAYBE THE CORRECT PERSON YOU ARE LOOKING FOR!
              </p>
              
              {/* Profile Image Placeholder */}
              <img 
  src={profileImage} 
  alt="Soumyajit Das" 
  className="w-52 h-50 object-cover border-2 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a]"
/>
           </div>
        </div>
      </main>

    </div>
  );
}

export default Home;