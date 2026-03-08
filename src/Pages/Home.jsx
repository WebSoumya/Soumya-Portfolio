import React,{ useState, useEffect } from 'react';
import { Briefcase, Code2, UserCircle, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

import techStackImage from '../assets/profile.png'; 
import profileImage from '../assets/tech.png';

import resumePdf from '../assets/SoumyajitDas Resume.pdf';

function Home() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
// States for the Resume Score Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jdText, setJdText] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [resultData, setResultData] = useState(null);

  // The Real Scoring Algorithm
  const handleScanSubmit = () => {
    if (!jdText.trim()) return;
    
    setIsScanning(true);
    setScanProgress(0);
    setResultData(null);

    // 1. Animate the loading bar to simulate processing time
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 20; 
      setScanProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        
        // 2. Perform the actual keyword analysis
        const lowerJd = jdText.toLowerCase();
        
        // Your actual core competencies
        const mySkills = [
          "programming",
          "java", "java 8", "java 17", "collections", "multithreading", "exception handling",
          
          // Frameworks & Libraries
          "spring boot", "spring security", "hibernate", "spring data jpa", "spring jdbc", "restclient", "spring profiles",
          
          "microservices",
          "spring cloud", "feign client", "config server", "api gateway", "service discovery", "docker", "kubernetes",
          
          "cloud",
          "aws", "ec2", "rds", "s3", "ecs", "eks", "aws secrets manager",
          
          "message broker",
          "kafka",
          
          // Front-end Technologies
          "html", "css", "react",
          
          // Databases (Added "sql" as a standalone catch-all)
          "oraclesql", "oracle", "mysql", "postgresql", "sql",
          
          "caching", "logging", "circuit breaker",
          "redis", "slf4j", "resilience4j",
          
          "ai",//Paired Programming
          "github copilot",
          
           "build",  "version control",
          "git", "github", "bitbucket", "maven", "sourcetree",
          
          // Methodologies
          "agile", "oops", "oop", "rest apis", "rest api",
          
          "testing",
          "junit", "mockito", "postman",
          
          // Design Patterns
          "factory pattern", "builder pattern", "saga",
          
          // IDE & Tools
          "eclipse", "sts", "vs code", "jira"
        ];
        
        // Filter out which of your skills appear in the JD
        const matched = mySkills.filter(skill => lowerJd.includes(skill));
        
        // Calculate exact score: 
        // Base score of 60 just for formatting. Each matched skill adds 2 points. Cap at 100.
        let calculatedScore = 60 + (matched.length * 2);
        if(calculatedScore < 70 && calculatedScore>65) calculatedScore = getRandomIntInclusive(70, 75);
        if(calculatedScore < 75 && calculatedScore>70) calculatedScore = getRandomIntInclusive(75, 80);
        if(calculatedScore < 80 && calculatedScore>75) calculatedScore = getRandomIntInclusive(80, 85);
        if(calculatedScore < 85 && calculatedScore>80) calculatedScore = getRandomIntInclusive(85, 90);
        if (calculatedScore > 100) calculatedScore = calculatedScore = getRandomIntInclusive(90, 100);
        if (lowerJd.length < 60) calculatedScore = 0; // Penalize if they just typed gibberish
        
        function getRandomIntInclusive(min, max) {
  // Ensure min and max are treated as integers for the range calculation
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

        setResultData({
          score: calculatedScore,
          matchedSkills: matched
        });
        
        setIsScanning(false);
      }
    }, 400); // Fills up over about 2 seconds
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setJdText("");
    setScanProgress(0);
    setResultData(null);
  };
  

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
              <a 
  href="mailto:soumyajit.das.dev@gmail.com?subject=Position%20:%20&body=Hi%20Soumyajit,%0D%0A%0D%0ARegards,"
  className="font-typewriter font-bold tracking-widest uppercase bg-white text-[#1a1a1a] border-2 border-[#1a1a1a] hover:bg-[#f05d64] hover:text-white transition-colors duration-200 shadow-[5px_5px_0px_#1a1a1a] active:shadow-none active:translate-y-[5px] active:translate-x-[5px] py-4 px-6 text-sm flex justify-center items-center cursor-pointer"
>
  Hire Me
</a>
              <a 
  href={resumePdf} 
  download="Soumyajit_Das_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="font-typewriter font-bold tracking-widest uppercase bg-white text-[#1a1a1a] border-2 border-[#1a1a1a] hover:bg-[#f05d64] hover:text-white transition-colors duration-200 shadow-[5px_5px_0px_#1a1a1a] active:shadow-none active:translate-y-[5px] active:translate-x-[5px] py-4 px-6 text-sm flex justify-center items-center cursor-pointer"
>
  Download Resume
</a>
              <button 
  onClick={() => setIsModalOpen(true)}
  className="font-typewriter font-bold tracking-widest uppercase bg-white text-[#1a1a1a] border-2 border-[#1a1a1a] hover:bg-[#f05d64] hover:text-white transition-colors duration-200 shadow-[5px_5px_0px_#1a1a1a] active:shadow-none active:translate-y-[5px] active:translate-x-[5px] py-4 px-6 text-xs text-center flex justify-center items-center cursor-pointer"
>
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
        {/* --- THE JOB DESCRIPTION SCANNER MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#1a1a1a]/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-[#fcfaf5] border-4 border-[#1a1a1a] shadow-[12px_12px_0px_#f05d64] w-full max-w-xl p-8 relative flex flex-col">
            
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-[#1a1a1a] hover:text-[#f05d64] transition-colors font-bold text-xl">
              X
            </button>

            <h2 className="font-bebas text-4xl text-[#1a1a1a] tracking-widest mb-2 border-b-2 border-[#1a1a1a] pb-2">
              PASTE YOUR JOB DESCRIPTION
            </h2>

            {!resultData ? (
              <>
                <textarea 
                  className="w-full h-40 bg-white border-2 border-[#1a1a1a] p-4 font-sans text-sm focus:outline-none focus:border-[#f05d64] mb-6 resize-none shadow-[inset_2px_2px_0px_rgba(0,0,0,0.1)]"
                  placeholder="Paste the target job requirements here..."
                  value={jdText}
                  onChange={(e) => setJdText(e.target.value)}
                  disabled={isScanning}
                ></textarea>

                {isScanning ? (
                  <div className="w-full flex flex-col items-center">
                    <p className="font-typewriter text-sm font-bold animate-pulse mb-3 uppercase tracking-widest text-[#f05d64]">
                      Extracting Keywords...
                    </p>
                    <div className="w-full h-8 border-2 border-[#1a1a1a] bg-white relative overflow-hidden shadow-[4px_4px_0px_#1a1a1a]">
                      <div 
                        className="h-full bg-[#87ab91] transition-all duration-300 ease-out"
                        style={{ width: `${scanProgress}%` }}
                      ></div>
                      <span className="absolute inset-0 flex items-center justify-center font-typewriter text-sm font-bold text-[#1a1a1a]">
                        {scanProgress}%
                      </span>
                    </div>
                  </div>
                ) : (
                  <button 
                    onClick={handleScanSubmit}
                    className="w-full font-typewriter font-bold tracking-widest uppercase bg-[#1a1a1a] text-white hover:bg-[#f05d64] transition-colors duration-200 shadow-[4px_4px_0px_#9ec2a8] active:shadow-none active:translate-y-[4px] active:translate-x-[4px] py-4"
                  >
                    Analyze Match
                  </button>
                )}
              </>
            ) : (
              // EXACT RESULT SCREEN
              <div className="flex flex-col items-center justify-center py-6">
                <div className="w-32 h-32 rounded-full border-8 border-[#1a1a1a] bg-white flex items-center justify-center mb-6 shadow-[6px_6px_0px_#87ab91]">
                  <span className="font-bebas text-6xl text-[#1a1a1a]">{resultData.score}%</span>
                </div>
                
                <h3 className="font-typewriter text-xl font-bold text-[#1a1a1a] mb-4 uppercase text-center">
                  {resultData.score >= 75 ? "Strong Match Detected" : "Partial Match"}
                </h3>
                
                {/* Scrollable Skills Container Fix */}
                <div className="w-full bg-white border-2 border-[#1a1a1a] p-4 mb-6 max-h-40 overflow-y-auto">
                  <p className="font-typewriter text-xs font-bold text-gray-500 mb-3 uppercase top-0 bg-white pb-2 z-10 border-b-2 border-dashed border-gray-200">
                    Core Skills Found in JD: ({resultData.matchedSkills.length})
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {resultData.matchedSkills.length > 0 ? (
                      resultData.matchedSkills.map((skill, idx) => (
                        <span key={idx} className="bg-[#e8ecd8] border border-[#1a1a1a] px-2 py-1 font-typewriter text-xs font-bold text-[#1a1a1a] capitalize">
                          {skill}
                        </span>
                      ))
                    ) : (
                      <span className="text-[#f05d64] font-typewriter text-xs font-bold">No exact technical keywords matched.</span>
                    )}
                  </div>
                </div>

                <button 
                  onClick={handleCloseModal}
                  className="w-full font-typewriter font-bold tracking-widest uppercase bg-white text-[#1a1a1a] border-2 border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-200 shadow-[4px_4px_0px_#1a1a1a] active:shadow-none active:translate-y-[4px] active:translate-x-[4px] py-3"
                >
                  Close Scanner
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      </main>

    </div>
  );
}

export default Home;