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
    subject: "",
    message: ""
  })

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
        subject: "",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 animate-gradient" />

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-soft-light"
        style={{
          backgroundImage: `url('/images/noise.png')`,
          backgroundRepeat: 'repeat'
        }}
      />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(to right, #6366F1 1px, transparent 1px),
                           linear-gradient(to bottom, #6366F1 1px, transparent 1px)`,
          backgroundSize: '2rem 2rem'
        }}
      />

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-purple-400/30 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-indigo-400/30 rounded-full blur-3xl animate-float-slow" />
      </div>

      {/* Wave effect */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 200">
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#6366F1" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#A855F7" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              d="M 0 30 Q 300 0, 600 30 T 1200 30 V 200 H 0 Z"
              fill="url(#wave-gradient)"
              className="animate-wave"
            />
          </svg>
        </div>
      </div>

      {/* Animated dots overlay */}
      <div className="absolute inset-0 opacity-[0.08] hero-pattern animate-float" />

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Glass morphism card */}
        <div className="backdrop-blur-2xl bg-white/70 dark:bg-gray-800/70 rounded-2xl shadow-2xl overflow-hidden border border-white/30 dark:border-white/10">
          <div className="p-8 sm:p-10 relative">
            {/* Inner glass effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-800/50 dark:to-gray-800/30 pointer-events-none" />
            
            <form 
              ref={formRef}
              onSubmit={handleSubmit} 
              className="space-y-6 relative"
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Name
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
                    aria-label="Your name"
                    className="w-full px-4 py-2 bg-white/60 dark:bg-gray-700/60 border border-gray-200/80 dark:border-gray-600/80 rounded-lg 
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                    hover:border-blue-400 dark:hover:border-blue-500
                    disabled:opacity-60 disabled:cursor-not-allowed
                    transition-all duration-200 ease-in-out
                    backdrop-blur-sm"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Email
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
                    aria-label="Your email address"
                    className="w-full px-4 py-2 bg-white/60 dark:bg-gray-700/60 border border-gray-200/80 dark:border-gray-600/80 rounded-lg 
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                    hover:border-blue-400 dark:hover:border-blue-500
                    disabled:opacity-60 disabled:cursor-not-allowed
                    transition-all duration-200 ease-in-out
                    backdrop-blur-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                  disabled={isSubmitting}
                  aria-label="Message subject"
                  className="w-full px-4 py-2 bg-white/60 dark:bg-gray-700/60 border border-gray-200/80 dark:border-gray-600/80 rounded-lg 
                  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                  hover:border-blue-400 dark:hover:border-blue-500
                  disabled:opacity-60 disabled:cursor-not-allowed
                  transition-all duration-200 ease-in-out
                  backdrop-blur-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  disabled={isSubmitting}
                  rows={8}
                  aria-label="Your message"
                  className="w-full px-4 py-2 bg-white/60 dark:bg-gray-700/60 border border-gray-200/80 dark:border-gray-600/80 rounded-lg 
                  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                  hover:border-blue-400 dark:hover:border-blue-500
                  disabled:opacity-60 disabled:cursor-not-allowed
                  transition-all duration-200 ease-in-out
                  backdrop-blur-sm resize-none"
                />
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-label={isSubmitting ? "Sending message..." : "Send message"}
                  className="relative px-8 py-3 text-white rounded-lg overflow-hidden
                    disabled:opacity-60 disabled:cursor-not-allowed
                    min-w-[160px] font-medium group
                    before:absolute before:inset-0 
                    before:bg-gradient-to-r before:from-blue-600 before:via-indigo-600 before:to-purple-600
                    hover:before:scale-[1.2] focus:before:scale-[1.2]
                    active:before:scale-[1.1]
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                    before:transition-transform before:duration-500 before:ease-out
                    shadow-lg hover:shadow-xl transition-shadow"
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