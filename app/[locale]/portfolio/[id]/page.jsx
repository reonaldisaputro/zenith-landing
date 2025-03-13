'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { use } from 'react';

const portfolioData = [
  {
    id: 1,
    title: 'Website Lorem Ipsum',
    category: 'Website',
    client: 'Lap.On Indonesia',
    projectDate: '1 March 2025',
    uiProject: 'https://catchegpthdhjaxbd',
    image: '/portfolio1.png',
    description: `We focus at every stage on effective communication and collaboration between the client and ensuring that the final design meets the client's objectives and expectations.`
  },
  {
    id: 2,
    title: 'Mobile App Design',
    category: 'Mobile app',
    client: 'Tech Solutions',
    projectDate: '15 March 2025',
    uiProject: 'https://designproject.com',
    image: '/portfolio1.png',
    description: 'Another example project description...'
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    category: 'Website',
    client: 'Shopping Corp',
    projectDate: '20 March 2025',
    uiProject: 'https://ecommerce-project.com',
    image: '/portfolio1.png',
    description: 'A modern e-commerce platform with advanced features...'
  },
  {
    id: 4,
    title: 'Fitness Tracking App',
    category: 'Mobile app',
    client: 'Health First',
    projectDate: '25 March 2025',
    uiProject: 'https://fitness-app.com',
    image: '/portfolio1.png',
    description: 'A comprehensive fitness tracking application...'
  },
  {
    id: 5,
    title: 'Corporate Website',
    category: 'Website',
    client: 'Business Inc',
    projectDate: '30 March 2025',
    uiProject: 'https://corporate-site.com',
    image: '/portfolio1.png',
    description: 'A professional corporate website with modern design...'
  },
  {
    id: 6,
    title: 'Social Media App',
    category: 'Mobile app',
    client: 'Connect Social',
    projectDate: '5 April 2025',
    uiProject: 'https://social-app.com',
    image: '/portfolio1.png',
    description: 'An innovative social media platform...'
  }
];

export default function PortfolioDetail({ params }) {
  const [projectInfo, setProjectInfo] = useState(null);
  const unwrappedParams = use(params);

  useEffect(() => {
    // Mencari data portfolio berdasarkan ID dari params
    const project = portfolioData.find(item => item.id === parseInt(unwrappedParams.id));
    if (project) {
      setProjectInfo(project);
    }
  }, [unwrappedParams.id]);

  if (!projectInfo) {
    return <div className="container mx-auto px-4 py-16">Loading...</div>;
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">{projectInfo.title}</h1>

      {/* Main Project Image */}
      <div className="relative w-full aspect-[16/9] mb-16">
        <Image
          src={projectInfo.image}
          alt={projectInfo.title}
          fill
          className="object-cover rounded-3xl"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:max-w-[90%] mx-auto">
        {/* Project Description */}
        <div>
          <h2 className="text-4xl font-semibold mb-6">is an example of portfolio details</h2>
          <p className="text-gray-600 whitespace-pre-line">{projectInfo.description}</p>
        </div>

        {/* Project Information */}
        <div>
          <div className="bg-[#BBFF4D] rounded-3xl p-8" style={{boxShadow: "2px 2px 1px 3px black"}}>
            <h3 className="text-2xl font-semibold mb-6">Project Information</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Category</p>
                <p className="text-gray-600">{projectInfo.category}</p>
              </div>
              <div>
                <p className="font-medium">Client</p>
                <p className="text-gray-600">{projectInfo.client}</p>
              </div>
              <div>
                <p className="font-medium">Project Date</p>
                <p className="text-gray-600">{projectInfo.projectDate}</p>
              </div>
              <div>
                <p className="font-medium">UI Project</p>
                <a 
                  href={projectInfo.uiProject} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:underline"
                >
                  {projectInfo.uiProject}
                </a>
              </div>
              <button className="bg-white text-black px-6 py-2 rounded-full mt-4">
                Visit web
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}