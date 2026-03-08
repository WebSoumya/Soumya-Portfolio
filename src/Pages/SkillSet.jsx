import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Here is all your data beautifully organized.
const skillCategories = [
  {
    title: "Programming",
    skills: ["Java", "Java 8", "Java 17", "Collections", "Multithreading", "Exception Handling"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Spring Boot", "Spring Security", "Hibernate", "Spring Data JPA", "Spring JDBC", "RestClient", "Spring Profiles"]
  },
  {
    title: "Microservices",
    skills: ["Spring Cloud", "Feign Client", "Config Server", "API Gateway", "Service Discovery", "Docker", "Kubernetes"]
  },
  {
    title: "Cloud",
    skills: ["AWS EC2", "AWS RDS", "AWS S3", "AWS ECS", "AWS EKS", "AWS Secrets Manager"]
  },
  {
    title: "Message Broker",
    skills: ["Kafka"]
  },
  {
    title: "Front-end Technologies",
    skills: ["HTML", "CSS", "React"]
  },
  {
    title: "Databases",
    skills: ["OracleSQL", "MySQL", "PostgreSQL"]
  },
  {
    title: "Caching, Logging & Resiliency",
    skills: ["Redis", "SLF4J", "Resilience4j"]
  },
  {
    title: "AI-Paired Programming",
    skills: ["GitHub Copilot"]
  },
  {
    title: "Build & Version Control",
    skills: ["Git", "GitHub", "Bitbucket", "Maven", "SourceTree"]
  },
  {
    title: "Methodologies & Patterns",
    skills: ["Agile", "OOPs", "REST APIs", "Factory", "Builder", "SAGA"]
  },
  {
    title: "Testing, IDEs & Tools",
    skills: ["JUnit", "Mockito", "Postman", "Eclipse", "STS", "VS Code", "Jira"]
  }
];

export default function SkillSet() {
  return (
    // Same pale sage background
    <div className="min-h-screen bg-[#e8ecd8] text-[#1a1a1a] font-sans overflow-x-hidden pb-20">
      
      {/* Back to Home Navigation */}
      <div className="p-6 md:px-12 pt-8">
        <Link to="/" className="inline-flex items-center font-typewriter text-sm font-bold hover:text-[#f05d64] transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" /> 
          BACK TO HOME
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Massive Bold Header */}
        <h1 className="text-6xl md:text-[5.5rem] font-extrabold tracking-tighter mb-16 text-[#1a1a1a]">
          Skills & <span className="text-[#f05d64]">Technologies</span>
        </h1>

        {/* Masonry-style Grid for Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col">
              
              {/* Category Subheading */}
              <h2 className="font-bebas text-2xl tracking-widest text-[#1a1a1a] mb-4 border-b-2 border-[#c4cec0] pb-2">
                {category.title}
              </h2>
              
              {/* The Floating Bubbles Container */}
              <div className="flex flex-wrap gap-3 mt-2">
                {category.skills.map((skill, skillIndex) => {
                  
                  // Logic to alternate bubble colors perfectly
                  const isGreen = skillIndex % 2 === 0;

                  return (
                    <span
                      key={skillIndex}
                      className={`
                        px-4 py-2 font-typewriter text-xs md:text-sm font-bold rounded-full 
                        border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] 
                        transition-all duration-300 hover:-translate-y-2 hover:shadow-[6px_8px_0px_#1a1a1a] cursor-default
                        ${isGreen ? 'bg-[#87ab91] text-white' : 'bg-white text-[#1a1a1a]'}
                      `}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}