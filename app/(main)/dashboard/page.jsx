"use client"
import React from 'react';
import { motion } from 'framer-motion';

function Dashboard() {
  // Define a common animation: fade in and slide up.
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-black text-white px-12 py-16">
      {/* Hero Section */}
      <motion.header {...fadeInUp} className="mb-24 text-center">
        <h1 className="text-6xl font-semibold mb-4 tracking-tight">
          Fact-Check Dashboard
        </h1>
        <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
          Empower your decisions with unbiased, evidence-based analysis.
          Our innovative multi-agent system combats misinformation and champions critical thinking.
        </p>
      </motion.header>

      {/* About Section */}
      <motion.section {...fadeInUp} className="mb-24">
        <div className="max-w-4xl mx-auto bg-gray-8000 rounded-lg p-10 shadow-lg">
          <h2 className="text-4xl font-medium mb-6 text-center">The Power of Fact-Checking</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            In today’s digital era, discerning truth from falsehood is essential. Our platform leverages advanced AI and collaborative agents to verify claims with precision, ensuring you receive accurate, unbiased information.
          </p>
        </div>
      </motion.section>

      {/* Multi-Agent Approach Section */}
      <motion.section {...fadeInUp} className="mb-24">
        <div className="max-w-4xl mx-auto bg-gray-8000 rounded-lg p-10 shadow-lg">
          <h2 className="text-4xl font-medium mb-6 text-center">Our Multi-Agent Approach</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Our system deploys specialized agents to:
            <br className="sm:hidden" />
            break down claims, retrieve high-quality evidence, assess credibility, detect bias, and synthesize comprehensive summaries.
            This structured, collaborative process ensures every fact is rigorously verified.
          </p>
        </div>
      </motion.section>

      {/* Transparency & References Section */}
      <motion.section {...fadeInUp} className="mb-24">
        <div className="max-w-4xl mx-auto bg-gray-8000 rounded-lg p-10 shadow-lg">
          <h2 className="text-4xl font-medium mb-6 text-center">Transparency & References</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            We believe in complete transparency. Each fact-check is accompanied by clear references and citations from reputable sources, empowering you to independently verify the information.
          </p>
        </div>
      </motion.section>

      {/* Call-to-Action Section */}
      <motion.section {...fadeInUp} className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-medium mb-6">Join the Movement</h2>
          <p className="text-xl text-gray-300 mb-10">
            Discover the future of fact-checking—where critical thinking meets cutting-edge AI, ensuring every claim is scrutinized and verified.
          </p>
          <button className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
            Explore
          </button>
        </div>
      </motion.section>
    </div>
  );
}

export default Dashboard;
