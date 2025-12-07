import React from 'react';

const OurTeam = () => {
  const teamMembers = [
    { name: 'Dr. Sarah Johnson', role: 'Chief Physician', image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=400&fit=crop&crop=face' },
    { name: 'Dr. Michael Chen', role: 'Cardiologist', image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop' },
    { name: 'Dr. Emily Davis', role: 'Pediatrician', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=face' },
    { name: 'Dr. Robert Wilson', role: 'Orthopedic Surgeon', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face' },
  ];

  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Team</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Meet our qualified doctors, specialists, and medical staff dedicated to your health.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-red-200">
              <div className="relative mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto bg-gray-300 object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-red-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-red-600 transition-colors duration-300">{member.name}</h3>
              <p className="text-red-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
