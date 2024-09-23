// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  const skills = [
    'IBM Cloud',
    'watsonx',
    'Langchain',
    'Milvus',
    'Generative AI',
    'RAG',
    'DevOps',
    'Docker',
    'Postgresql',
    'SQL',
    'REST APIs',
    'Microservices',
    'Python',
    'Java',
    'Node.js',
    'MongoDB',
    'Git/GitHub',
    'Agile',
    'React',
  ];

  return (
    <section id="skills" className="px-4 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Key Skills</h2>
        <ul className="flex flex-wrap">
          {skills.map((skill, idx) => (
            <li
              key={idx}
              className="bg-gray-200 text-gray-800 px-4 py-2 m-2 rounded"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
