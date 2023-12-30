import { useState, ChangeEvent } from 'react'
import { FaWhatsapp, FaTelegram } from 'react-icons/fa'

interface FormData {
  name: string
  email: string
  phone_number: string
  message: string
}
const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone_number: '',
    message: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  return (
    <div className="flex flex-row h-full w-full">
      <div className="flex flex-col w-1/2 p-10">
        <h1 className="text-4xl font-bold">Ready to turn your idea into reality?</h1>
        <p>Get in touch with our expert tech consultants to vet your idea/project in depth.</p>
        <p>Let's brainstorm on potential solutions with a precise estimate and then you decide if we're a match.</p>
        <p className="text-lg font-bold mb-4">Contact us on:</p>
        <div className="flex space-x-4">
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-4xl text-green-500 hover:text-green-700 cursor-pointer" />
          </a>
          <a href="https://t.me/your_telegram_username" target="_blank" rel="noopener noreferrer">
            <FaTelegram className="text-4xl text-blue-500 hover:text-blue-700 cursor-pointer" />
          </a>
        </div>
      </div>

      <div className="flex flex-col w-1/2 items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">Cpntact Us</h1>
        <form className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
