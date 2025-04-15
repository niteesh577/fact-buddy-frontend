import React from 'react';

const Explore = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Empowering Truth in the Age of Misinformation</h1>
            <p className="text-lg mb-6 px-4">Discover how misinformation has impacted society and how our platform provides thorough fact-checking analyses to promote informed decisions.</p>
            <a href="#impact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">Learn More</a>
          </div>
        </div>
      </section>

      {/* Impact of Misinformation Section */}
      <section id="impact" className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">The Impact of Misinformation</h2>
          <div className="space-y-8">
            <div className="bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3">Health Scares</h3>
              <p className="text-gray-300">False information about health remedies has led to individuals avoiding vaccinations, resulting in the resurgence of preventable diseases.</p>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3">Election Interference</h3>
              <p className="text-gray-300">Spread of fake news during elections has influenced voter perceptions, undermining democratic processes and trust in institutions.</p>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3">Financial Fraud</h3>
              <p className="text-gray-300">Misinformation in financial markets has led to poor investment decisions, causing significant economic losses for individuals and businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Platform Helps Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How Our Platform Helps</h2>
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-blue-500 flex items-center justify-center rounded-full">
                {/* Replace with an appropriate icon */}
                <span className="text-2xl font-bold">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Comprehensive Analysis</h3>
                <p className="text-gray-300">Our platform conducts thorough investigations into claims, providing detailed reports with credible sources and evidence.</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-green-500 flex items-center justify-center rounded-full">
                {/* Replace with an appropriate icon */}
                <span className="text-2xl font-bold">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Source Verification</h3>
                <p className="text-gray-300">We evaluate the credibility of information sources, identifying potential biases and logical fallacies to ensure accurate assessments.</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-red-500 flex items-center justify-center rounded-full">
                {/* Replace with an appropriate icon */}
                <span className="text-2xl font-bold">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">User Education</h3>
                <p className="text-gray-300">Beyond fact-checking, we provide resources to help users develop critical thinking skills to discern misinformation independently.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in the Fight Against Misinformation</h2>
          <p className="text-lg mb-6">Be part of a community dedicated to promoting truth and transparency. Explore our platform and contribute to a more informed society.</p>
          <a href="/veritext" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">Get Started</a>
        </div>
      </section>
    </div>
  );
}

export default Explore;
