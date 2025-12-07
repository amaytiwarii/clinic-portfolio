import React from 'react';

const GalleryPortfolio = ({ isPage = false }) => {
  const galleryItems = [
    {
      src: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop',
      alt: 'Modern clinic facility',
      title: 'State-of-the-Art Facility',
      description: 'Our modern clinic features advanced medical technology and comfortable patient spaces designed for optimal care.',
      category: 'Facilities',
      year: '2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      alt: 'Patient care room',
      title: 'Patient Care Rooms',
      description: 'Comfortable and private patient rooms equipped with the latest monitoring equipment and amenities.',
      category: 'Patient Care',
      year: '2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop',
      alt: 'Community health initiative',
      title: 'Community Health Program',
      description: 'Our outreach programs bring healthcare services directly to underserved communities in the region.',
      category: 'Community',
      year: '2022'
    },
    {
      src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop',
      alt: 'Medical equipment',
      title: 'Advanced Medical Equipment',
      description: 'Cutting-edge diagnostic and treatment equipment ensuring accurate and efficient patient care.',
      category: 'Equipment',
      year: '2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      alt: 'Medical staff',
      title: 'Expert Medical Team',
      description: 'Our dedicated healthcare professionals provide compassionate care with years of experience.',
      category: 'Staff',
      year: '2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop',
      alt: 'Health outreach program',
      title: 'Health Education Workshops',
      description: 'Regular workshops and seminars to educate the community on preventive healthcare and wellness.',
      category: 'Education',
      year: '2022'
    },
    {
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      alt: 'Dental care unit',
      title: 'Dental Care Center',
      description: 'Comprehensive dental services including preventive care, restorative procedures, and cosmetic dentistry.',
      category: 'Specialties',
      year: '2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      alt: 'Emergency room',
      title: '24/7 Emergency Department',
      description: 'Fully equipped emergency room staffed around the clock for urgent medical situations.',
      category: 'Emergency',
      year: '2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop',
      alt: 'Laboratory facilities',
      title: 'Advanced Laboratory',
      description: 'On-site laboratory with rapid testing capabilities for accurate diagnosis and treatment planning.',
      category: 'Diagnostics',
      year: '2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop',
      alt: 'Pharmacy counter',
      title: 'In-House Pharmacy',
      description: 'Convenient pharmacy services with expert pharmacists available to answer medication questions.',
      category: 'Pharmacy',
      year: '2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      alt: 'Reception area',
      title: 'Patient Reception',
      description: 'Welcoming reception area designed to make patients feel comfortable from the moment they arrive.',
      category: 'Facilities',
      year: '2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop',
      alt: 'Patient consultation',
      title: 'Patient Consultations',
      description: 'Private consultation rooms where doctors and patients discuss treatment plans and health concerns.',
      category: 'Patient Care',
      year: '2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      alt: 'Surgical suite',
      title: 'Surgical Suite',
      description: 'Sterile surgical facilities equipped for various procedures with the latest technology.',
      category: 'Surgery',
      year: '2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop',
      alt: 'Pediatric ward',
      title: 'Pediatric Care Unit',
      description: 'Specialized care for children with child-friendly environments and pediatric specialists.',
      category: 'Pediatrics',
      year: '2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop',
      alt: 'Radiology department',
      title: 'Radiology Department',
      description: 'Advanced imaging services including X-rays, MRI, and CT scans for comprehensive diagnostics.',
      category: 'Diagnostics',
      year: '2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      alt: 'Physical therapy room',
      title: 'Physical Therapy Center',
      description: 'Rehabilitation services with state-of-the-art equipment for recovery and wellness programs.',
      category: 'Therapy',
      year: '2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop',
      alt: 'Maternity ward',
      title: 'Maternity Ward',
      description: 'Dedicated maternity services providing prenatal care, delivery, and postpartum support.',
      category: 'Maternity',
      year: '2023'
    },
    {
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      alt: 'Cardiology unit',
      title: 'Cardiology Department',
      description: 'Specialized cardiac care with advanced monitoring and treatment for heart conditions.',
      category: 'Cardiology',
      year: '2023'
    }
  ];

  return (
    <section id="gallery" className={`${isPage ? 'pt-32' : 'py-16'} bg-white`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Gallery & Portfolio</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          View our facilities, patient care spaces, and community health initiatives.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-48 object-cover bg-gray-300 hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">{item.category}</span>
                  <span className="text-xs text-gray-500">{item.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPortfolio;
