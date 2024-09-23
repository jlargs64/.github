import React from 'react';

const Timeline = () => {
  const experiences = [
    {
      role: 'Technical Architect',
      company: 'IBM, United States',
      duration: '12/2023 - Present',
      details:
        "Spearheaded development and integration of AskiCDNet for IBM Client Delivery Network (iCDNet). Implemented generative AI-powered RAG Q&A feature with Langchain, Milvus, watsonx.data and watsonx.ai. Led migration from Java monolith to Python-based microservices, improving scalability and maintainability. Ensured compliance with IBM's security principles. Designed scalable IBM Cloud architectures for the implementation of digital workers across IBM Consulting. Mentored peers in development best practices.",
    },
    // ... other experiences
  ];

  return (
    <section id="timeline" className="px-4 py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8">
              <div className="absolute left-0 top-1 w-2 h-2 bg-blue-500 rounded-full"></div>
              <h3 className="text-xl font-semibold">
                {exp.role} at {exp.company}
              </h3>
              <span className="text-gray-600">{exp.duration}</span>
              <p className="mt-2 text-gray-700">{exp.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
