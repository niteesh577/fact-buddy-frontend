"use client";
import React, { useState } from 'react';
import axios from 'axios';

const VeriText = () => {
  const [claim, setClaim] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await axios.post('http://127.0.0.1:5000/fact-check', { claim });
      setResponse(res.data);
    } catch (err) {
      setError('An error occurred while fetching the data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Fact Checker</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="claim" className="block text-gray-700 font-semibold mb-2">
            Enter your claim:
          </label>
          <input
            type="text"
            id="claim"
            value={claim}
            onChange={(e) => setClaim(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded-md text-gray-400"
            required 
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
          disabled={loading}
        >
          {loading ? 'Checking...' : 'Submit'}
        </button>
      </form>

      {error && (
        <div className="w-full max-w-md bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
          {error}
        </div>
      )}

      {response && (
        <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-bold mb-4">Fact-Check Result</h2>
          <p className="mb-2">
            <span className="font-semibold">Verdict:</span> {response.verdict}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Confidence Level:</span> {response.confidence}
          </p>
          <div className="mb-4">
            <span className="font-semibold">Summary:</span>
            <p>{response.summary}</p>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Key Findings:</span>
            <ul className="list-disc list-inside">
              {response.key_findings.map((finding, index) => (
                <li key={index} className="mb-2">
                  <p>
                    <span className="font-semibold">Finding:</span> {finding.finding}
                  </p>
                  <p>
                    <span className="font-semibold">Relevance:</span> {finding.relevance}
                  </p>
                  <p>
                    <span className="font-semibold">Source:</span>{' '}
                    <a href={finding.source} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                      {finding.source}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-semibold">Sources:</span>
            <ul className="list-disc list-inside">
              {response.sources.map((source, index) => (
                <li key={index} className="mb-2">
                  <p>
                    <span className="font-semibold">Reliability:</span> {source.reliability}
                  </p>
                  <p>
                    <span className="font-semibold">Trust Score:</span> {source.trust_score}
                  </p>
                  <p>
                    <span className="font-semibold">URL:</span>{' '}
                    <a href={source.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                      {source.url}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default VeriText;

