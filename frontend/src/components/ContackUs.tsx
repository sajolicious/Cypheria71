import axios from 'axios'
import { useState, ChangeEvent, FormEvent } from 'react'
import { FaWhatsapp, FaTelegram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface FormData {
  name: string
  email: string
  phone_number: string
  message: string
}

const ContactUs: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
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

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()

    try {
      setLoading(true)
      setError(null)

      await axios.post('http://127.0.0.1:8000/api/contactus/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      setSuccess(true)
    } catch (error) {
      setError('Error submitting the form. Please try again later')
    } finally {
      setLoading(false)
    }
    console.log('Form Data Submitted', formData)
  }

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <div className="md:w-1/2 p-10 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Ready to turn your idea into reality?</h1>
        <p className="mb-4">Get in touch with our expert tech consultants to vet your idea/project in depth.</p>
        <p className="mb-4">
          Let's brainstorm on potential solutions with a precise estimate and then you decide if we're a match.
        </p>
        <p className="text-lg font-bold mb-4">Contact us on:</p>
        <div className="flex space-x-4">
          <Link to="/" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-4xl text-green-500 hover:text-green-700 cursor-pointer" />
          </Link>
          <Link to="/" target="_blank" rel="noopener noreferrer">
            <FaTelegram className="text-4xl text-blue-500 hover:text-blue-700 cursor-pointer" />
          </Link>
        </div>
      </div>

      <div className="md:w-1/2 p-10 bg-white ">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 font-semibold mb-4">
            Form submitted successfully. We'll get in touch with you soon!
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 justify-center">
          <label className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2"
            />
          </label>
          <label className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2"
            />
          </label>

          <label className="flex flex-col">
            <input
              type="tel"
              name="phone_number"
              placeholder="Phone Number"
              value={formData.phone_number}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2"
            />
          </label>

          <label className="flex flex-col">
            <textarea
              name="message"
              placeholder="Tell us about your company and your plan"
              value={formData.message}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2"
            />
          </label>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
