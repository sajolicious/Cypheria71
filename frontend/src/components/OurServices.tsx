import React from 'react'

const ServiceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="bg-gray-900 p-6 m-2 rounded-lg h-full border border-gray-800 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}

const OurServices: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 h-screen w-full">
      <div className="col-span-full text-center">
        <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
      </div>

      <ServiceCard
        title="Service 1 Title"
        description="Concise description of Service 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <ServiceCard
        title="Service 2 Title"
        description="Concise description of Service 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <ServiceCard
        title="Service 3 Title"
        description="Concise description of Service 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      <div className="col-span-full text-right">
        <button className="text-gray-600 hover:text-gray-400 transition-colors duration-300 ease-in-out">
          See More
        </button>
      </div>
    </div>
  )
}

export default OurServices
