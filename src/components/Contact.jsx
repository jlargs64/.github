import React from 'react';

const Contact = () => (
  <section id="contact" className="px-4 py-16 bg-gray-50">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg mb-6">
        Feel free to reach out via email or connect with me on LinkedIn.
      </p>
      <ul className="space-y-4">
        <li>
          Email:{' '}
          <a
            href="mailto:justinlargo7@gmail.com"
            className="text-blue-600 hover:underline"
          >
            justinlargo7@gmail.com
          </a>
        </li>
        <li>
          LinkedIn:{' '}
          <a
            href="https://linkedin.com/in/justin-largo-70b01a127"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/justin-largo
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default Contact;
