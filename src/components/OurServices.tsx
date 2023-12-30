import React from 'react'

const ServiceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="bg-gray-900 p-10 m-4 rounded-lg h-full shadow-md hover:bg-gray-700 transition-all duration-300 ease-in-out">
      <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

const OurServices: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-full text-center">
        <h2 className="text-6xl font-bold mb-8 text-gray-900">Our Services</h2>
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
      <div className="justify-end items-end text-right">See More</div>
    </div>
  )
}

export default OurServices
