import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Experience() {
  return (
    // Pale sage background to match the reference image
    <div className="min-h-screen bg-[#e8ecd8] text-[#1a1a1a] font-sans overflow-x-hidden">
      
      {/* Back to Home Navigation */}
      <div className="p-6 md:px-12 pt-8">
        <Link to="/" className="inline-flex items-center font-typewriter text-sm font-bold hover:text-[#f05d64] transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" /> 
          BACK TO HOME
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        
        {/* Massive Bold Header mimicking the reference image */}
        <h1 className="text-6xl md:text-[5.5rem] font-extrabold tracking-tighter mb-10 text-[#1a1a1a]">
          Experience
        </h1>

        {/* Company Info Row - Flexbox to push left and right */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end font-typewriter text-sm md:text-base text-gray-700 space-y-4 md:space-y-0">
          <div className="flex flex-col space-y-1">
            <span className="font-bold text-xl text-[#1a1a1a]">LTIMindtree (L&T Group)</span>
            <span>Consultant – Software Engineer (Java/ Spring Boot)</span>
          </div>
          <div className="flex flex-col md:text-right space-y-1">
            <span className="font-bold text-[#1a1a1a] uppercase tracking-widest">July 2022 - Current</span>
            <span>India</span>
          </div>
        </div>

        {/* The thin divider line */}
        <hr className="border-[#c4cec0] my-10" />

        {/* Stylish Project Heading */}
        <div className="mb-8 max-w-4xl">
          <h2 className="font-bebas text-4xl md:text-5xl text-[#f05d64] tracking-wide mb-3 leading-none">
            INTELLIGENT PAYMENT INTEGRATION PLATFORM FOR INSURANCE SYSTEMS
          </h2>
          <p className="font-typewriter text-xs md:text-sm text-gray-600 uppercase tracking-widest font-bold">
            Java, Spring Boot, Spring JDBC, REST Client, AWS, Kafka, Redis, Stripe API, React, SQL
          </p>
        </div>

        {/* The Split Boxes (Left Dark Green, Right White) with our Techie Border Design */}
        <div className="flex flex-col lg:flex-row w-full shadow-[8px_8px_0px_#1a1a1a] border-2 border-[#1a1a1a]">
          
          {/* Box 1: Left Dark Green */}
          <div className="w-full lg:w-1/2 bg-[#87ab91] p-8 md:p-12 lg:border-r-2 border-[#1a1a1a]">
            <ul className="space-y-6 list-none font-sans text-[15px] leading-relaxed text-[#fcfaf5]">
              <li className="relative pl-6">
                <span className="absolute left-0 top-[2px] text-[#f05d64] font-bold">▹</span>
                Engineered a microservices based payment platform covering Validation, Core Payment Processing, Status management and built seamless Stripe integration with PSP API integration for session creation, retrieval, expiration using Java and Spring Boot, utilizing Spring REST Client for seamless communication with the Stripe API and Spring Cloud features for inter-service communication to manage core processing and the complete session lifecycle.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-[2px] text-[#f05d64] font-bold">▹</span>
                Structured core business logic using a Factory Design Pattern to dynamically route and process 5 distinct payment statuses before persisting data via Spring JDBC and optimized SQL queries for high-performance idempotent transaction logging to Oracle Databases with integrated Redis caching to accelerate payment session retrieval.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-[2px] text-[#f05d64] font-bold">▹</span>
                Implemented Kafka-powered asynchronous messaging to decouple components for real-time status notifications, backed by a database-driven reconciliation process to automatically detect and retry failed message deliveries.
              </li>
            </ul>
          </div>

          {/* Box 2: Right White */}
          <div className="w-full lg:w-1/2 bg-white p-8 md:p-12 border-t-2 lg:border-t-0 border-[#1a1a1a]">
            <ul className="space-y-6 list-none font-sans text-[15px] leading-relaxed text-[#1a1a1a]">
              <li className="relative pl-6">
                <span className="absolute left-0 top-[2px] text-[#f05d64] font-bold">▹</span>
                Developed AI-augmented Global Exception Handling frameworks using Controller-Advice and Spring AI, integrating OpenAI LLMs using OpenAI API for automated triage, context-aware root cause analysis, and intelligent, easily human readable error-response generation.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-[2px] text-[#f05d64] font-bold">▹</span>
                Applied Resilience4j circuit breakers to prevent cascading system failures, triggering fallback methods to queue pending transactions and maintain stability during external Stripe API outages and implemented Spring Security for stateless JWT validation at the validation service layer.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-[2px] text-[#f05d64] font-bold">▹</span>
                Deployed the highly available payment infrastructure on AWS using Amazon EKS for scalable container orchestration, integrating API Gateway for secure routing, Amazon RDS for persistent data storage, S3 for centralized log archiving, and Secrets Manager for credential management.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-[2px] text-[#f05d64] font-bold">▹</span>
                Developed an enterprise-grade React Single Page Application (SPA) utilizing centralized state management, implementing optimized API polling for real-time payment status updates, and securely managing JWT-based authentication flows for session lifecycle management.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}