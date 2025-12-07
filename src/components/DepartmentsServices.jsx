import React from 'react';

const DepartmentsServices = () => {
  const departments = [
    {
      name: 'Cardiology',
      description: 'Heart health and cardiovascular care',
      icon: '❤️'
    },
    {
      name: 'Pediatrics',
      description: 'Healthcare for children and adolescents',
      icon: '👶'
    },
    {
      name: 'Orthopedics',
      description: 'Bone and joint health services',
      icon: '🦴'
    },
    {
      name: 'Emergency Care',
      description: '24/7 emergency medical services',
      icon: '🚑'
    },
    {
      name: 'Dermatology',
      description: 'Skin care and treatment services',
      icon: '🧴'
    },
    {
      name: 'Radiology',
      description: 'Advanced imaging and diagnostics',
      icon: '🩻'
    },
  ];

  return (
    <section id="departments" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Departments & Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore specialized care areas such as cardiology, pediatrics, orthopedics, and more.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl mb-4 text-center">{dept.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 text-center hover:text-red-600 transition-colors duration-300">{dept.name}</h3>
              <p className="text-gray-600 leading-relaxed text-center">{dept.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsServices;
