import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    // Pale sage background matching the rest of the site
    <div className="min-h-screen bg-[#e8ecd8] text-[#1a1a1a] font-sans overflow-x-hidden pb-24 flex flex-col">
      
      {/* Back to Home Navigation */}
      <div className="p-6 md:px-12 pt-8">
        <Link to="/" className="inline-flex items-center font-typewriter text-sm font-bold hover:text-[#f05d64] transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" /> 
          BACK TO HOME
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center w-full">
        
        {/* Header */}
        <h1 className="text-6xl md:text-[5.5rem] font-extrabold tracking-tighter mb-12 text-[#1a1a1a] text-center md:text-left">
          Let's <span className="text-[#f05d64]">Connect</span>
        </h1>

        {/* The Digital Business Card (Split Layout) */}
        <div className="flex flex-col md:flex-row w-full shadow-[10px_10px_0px_#1a1a1a] border-2 border-[#1a1a1a] bg-white group">
          
          {/* Left Side: Dark Green Welcome Message */}
          <div className="w-full md:w-[40%] bg-[#87ab91] p-10 md:p-14 border-b-2 md:border-b-0 md:border-r-2 border-[#1a1a1a] flex flex-col justify-between relative overflow-hidden">
            
            {/* Background decorative pattern */}
            <div className="absolute top-[-50px] right-[-50px] opacity-20 pointer-events-none">
              <Send className="w-64 h-64 text-[#fcfaf5]" strokeWidth={0.5} />
            </div>

            <div className="relative z-10">
              <h2 className="font-bebas text-5xl md:text-6xl text-[#fcfaf5] tracking-wide leading-none mb-6">
                READY TO BUILD SOMETHING GREAT?
              </h2>
              <p className="font-typewriter text-white text-sm leading-relaxed font-bold">
                Whether it's a microservices architecture, a complex React SPA, or just a friendly chat about Java and Spring Boot, my inbox is always open.
              </p>
            </div>
            
            <div className="mt-12 relative z-10">
               {/* A status badge showing you are ready for work */}
               <span className="inline-block bg-[#fcfaf5] text-[#1a1a1a] font-typewriter text-xs font-bold px-4 py-2 border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a]">
                 ● OPEN TO OPPORTUNITIES
               </span>
            </div>
          </div>

          {/* Right Side: Contact Details */}
          <div className="w-full md:w-[60%] p-10 md:p-14 flex flex-col justify-center bg-[#fcfaf5]">
            
            <h3 className="font-bebas text-5xl text-[#1a1a1a] tracking-wide mb-2">
              SOUMYAJIT DAS
            </h3>
            <p className="font-typewriter text-sm tracking-[0.2em] uppercase font-bold text-[#f05d64] mb-10">
              Java Full Stack Developer
            </p>

            {/* Interactive Contact Links */}
            <div className="flex flex-col space-y-6">
              
              {/* Email Link */}
              <a 
                href="mailto:soumyajit.das.dev@gmail.com" 
                className="flex items-center p-4 border-2 border-transparent hover:border-[#1a1a1a] hover:bg-white hover:shadow-[4px_4px_0px_#1a1a1a] transition-all duration-300 -ml-4 rounded-sm"
              >
                <div className="bg-[#1a1a1a] p-3 text-white mr-6">
                  <Mail strokeWidth={1.5} className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-typewriter text-xs font-bold text-gray-500 mb-1 uppercase tracking-widest">Email</p>
                  <p className="font-sans font-bold text-lg md:text-xl text-[#1a1a1a] break-all">soumyajit.das.dev@gmail.com</p>
                </div>
              </a>

              {/* Phone Link */}
              <a 
                href="tel:+918617246368" 
                className="flex items-center p-4 border-2 border-transparent hover:border-[#1a1a1a] hover:bg-white hover:shadow-[4px_4px_0px_#1a1a1a] transition-all duration-300 -ml-4 rounded-sm"
              >
                <div className="bg-[#1a1a1a] p-3 text-white mr-6">
                  <Phone strokeWidth={1.5} className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-typewriter text-xs font-bold text-gray-500 mb-1 uppercase tracking-widest">Phone</p>
                  <p className="font-sans font-bold text-lg md:text-xl text-[#1a1a1a]">+91-8617246368</p>
                </div>
              </a>

              {/* LinkedIn Link */}
              <a 
                href="https://www.linkedin.com/in/soumyajit-das-3b89311b3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 border-2 border-transparent hover:border-[#1a1a1a] hover:bg-white hover:shadow-[4px_4px_0px_#1a1a1a] transition-all duration-300 -ml-4 rounded-sm group"
              >
                <div className="bg-[#1a1a1a] p-3 text-white mr-6 group-hover:bg-[#0077b5] transition-colors">
                  <Linkedin strokeWidth={1.5} className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-typewriter text-xs font-bold text-gray-500 mb-1 uppercase tracking-widest">LinkedIn</p>
                  <p className="font-sans font-bold text-lg md:text-xl text-[#1a1a1a] break-all">linkedin.com/in/soumyajit-das...</p>
                </div>
              </a>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}