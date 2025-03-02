"use client"

import { useState, useRef } from "react"
import { useToastHelpers } from "@/contexts/ToastContext"
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline"

export default function ContactForm() {
  const { success, error: showError } = useToastHelpers()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    investmentType: "",
    investmentAmount: "",
    referralSource: "",
    message: ""
  })

  const investmentTypes = [
    "Real Estate",
    "Private Equity",
    "Venture Capital",
    "Fixed Income",
    "Other"
  ]

  const investmentAmounts = [
    "Under $100,000",
    "$100,000 - $500,000",
    "$500,000 - $1,000,000",
    "$1,000,000 - $5,000,000",
    "Over $5,000,000"
  ]

  const referralSources = [
    "Search Engine",
    "Social Media",
    "Professional Referral",
    "Friend/Family",
    "Other"
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const form = e.currentTarget
    if (!form.checkValidity()) {
      showError("Please fill in all required fields correctly", {
        icon: <XCircleIcon className="w-5 h-5 text-red-600" />,
        duration: 3000
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Here you would typically send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      console.log("Form submitted:", formData)
      
      success("Your message has been sent successfully! We'll get back to you soon.", {
        icon: <CheckCircleIcon className="w-5 h-5 text-green-600" />,
        duration: 5000
      })
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        investmentType: "",
        investmentAmount: "",
        referralSource: "",
        message: ""
      })
      formRef.current?.reset()
    } catch (err) {
      showError("Failed to send message. Please try again later.", {
        icon: <XCircleIcon className="w-5 h-5 text-red-600" />,
        duration: 5000
      })
      console.error("Form submission error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const inputClasses = "w-full px-4 py-2 bg-white/60 dark:bg-gray-700/60 border border-gray-200/80 dark:border-gray-600/80 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 dark:hover:border-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 ease-in-out backdrop-blur-sm"

  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 animate-gradient" />
      <div className="absolute inset-0 opacity-30 mix-blend-soft-light" style={{ backgroundImage: `url('/images/noise.png')`, backgroundRepeat: 'repeat' }} />
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `linear-gradient(to right, #6366F1 1px, transparent 1px), linear-gradient(to bottom, #6366F1 1px, transparent 1px)`, backgroundSize: '2rem 2rem' }} />

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-purple-400/30 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-indigo-400/30 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        <div className="backdrop-blur-2xl bg-white/70 dark:bg-gray-800/70 rounded-2xl shadow-2xl overflow-hidden border border-white/30 dark:border-white/10">
          <div className="p-8 sm:p-10 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-800/50 dark:to-gray-800/30 pointer-events-none" />
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                    className={inputClasses}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                    className={inputClasses}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                    disabled={isSubmitting}
                    className={inputClasses}
                  />
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    disabled={isSubmitting}
                    className={inputClasses}
                  />
                </div>

                {/* Investment Type */}
                <div className="space-y-2">
                  <label htmlFor="investmentType" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Investment Interest *
                  </label>
                  <select
                    id="investmentType"
                    name="investmentType"
                    value={formData.investmentType}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className={inputClasses}
                  >
                    <option value="">Select investment type</option>
                    {investmentTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Investment Amount */}
                <div className="space-y-2">
                  <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Investment Amount *
                  </label>
                  <select
                    id="investmentAmount"
                    name="investmentAmount"
                    value={formData.investmentAmount}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className={inputClasses}
                  >
                    <option value="">Select amount range</option>
                    {investmentAmounts.map(amount => (
                      <option key={amount} value={amount}>{amount}</option>
                    ))}
                  </select>
                </div>

                {/* Referral Source */}
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    How did you hear about us?
                  </label>
                  <select
                    id="referralSource"
                    name="referralSource"
                    value={formData.referralSource}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={inputClasses}
                  >
                    <option value="">Select source</option>
                    {referralSources.map(source => (
                      <option key={source} value={source}>{source}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your investment goals..."
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative px-8 py-3 text-white rounded-lg overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed min-w-[160px] font-medium group before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-600 before:via-indigo-600 before:to-purple-600 hover:before:scale-[1.2] focus:before:scale-[1.2] active:before:scale-[1.1] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 before:transition-transform before:duration-500 before:ease-out shadow-lg hover:shadow-xl transition-shadow"
                >
                  <span className="relative">
                    {isSubmitting ? (
                      <>
                        <span className="opacity-0">Send Message</span>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        </div>
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}