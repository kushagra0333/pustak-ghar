"use client";
import React from "react";

const studyMaterials = [
  {
    subject: "Hindi Literature",
    topic: "Kabir's Couplets",
    description:
      "Collection of Kabir's dohas that reflect philosophy, devotion, and social reform.",
  },
  {
    subject: "Hindi Literature",
    topic: "Premchand's Short Stories",
    description:
      "Famous realistic stories by Premchand such as 'Idgah', 'Kafan', and 'Poos Ki Raat'.",
  },
  {
    subject: "Poetry",
    topic: "Mahadevi Verma's Poems",
    description:
      "Poems highlighting compassion, sensitivity, and beauty in human emotions.",
  },
  {
    subject: "Drama",
    topic: "Jaishankar Prasad — Skandagupta",
    description:
      "A historical play reflecting patriotism and the spirit of sacrifice.",
  },
  {
    subject: "Novel",
    topic: "Godaan — Premchand",
    description:
      "One of Premchand's most celebrated novels depicting farmer life and social realities.",
  },
];

const StudyMaterial = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-rose-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-900 mb-12 text-center">
          📚 Study Material
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {studyMaterials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-amber-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
            >
              <h2 className="text-xl font-bold text-rose-800">{item.subject}</h2>
              <h3 className="text-lg font-semibold text-amber-700 mt-1">
                {item.topic}
              </h3>
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                {item.description}
              </p>

              <div className="mt-4 flex space-x-3">
                <button className="px-4 py-2 text-sm font-medium text-white bg-amber-600 rounded-lg hover:bg-amber-700 transition-colors">
                  Download
                </button>
                <button className="px-4 py-2 text-sm font-medium text-rose-700 border border-rose-400 rounded-lg hover:bg-rose-50 transition-colors">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyMaterial;
