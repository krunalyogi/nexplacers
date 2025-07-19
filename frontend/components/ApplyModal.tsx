"use client"

import type React from "react"

import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface ApplyModalProps {
  isOpen: boolean
  onClose: () => void
  role: string
}

export default function ApplyModal({ isOpen, onClose, role }: ApplyModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    message: "",
  })

  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setResumeFile(file)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (!resumeFile) {
      alert("Please upload your resume (PDF only)")
      setLoading(false)
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      alert("Application submitted successfully! We'll get back to you within 24 hours.")
      setFormData({ name: "", email: "", linkedin: "", message: "" })
      setResumeFile(null)
      onClose()
    } catch (error) {
      alert("Submission failed. Please try again.")
    }

    setLoading(false)
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="scale-95 opacity-0"
              enterTo="scale-100 opacity-100"
              leave="ease-in duration-200"
              leaveFrom="scale-100 opacity-100"
              leaveTo="scale-95 opacity-0"
            >
              <Dialog.Panel className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg relative border border-gray-100">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>

                <Dialog.Title className="text-2xl font-bold text-navy-900 mb-2">Apply for {role}</Dialog.Title>
                <p className="text-gray-600 mb-8">Join our elite team and help transform careers worldwide</p>

                <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">LinkedIn Profile</label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">Upload Resume (PDF only) *</label>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      required
                      className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-gold focus:outline-none transition-colors bg-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gold file:text-navy-900 file:font-semibold hover:file:bg-gold/90"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">
                      Why do you want to join Nexplacers™?
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your motivation and what you can bring to our team..."
                      rows={4}
                      className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-gold focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onClose}
                      className="flex-1 py-4 border-2 hover:bg-gray-50 bg-transparent"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="flex-1 bg-gradient-to-r from-gold to-yellow-400 text-navy-900 hover:from-gold/90 hover:to-yellow-400/90 font-bold py-4 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-navy-900 border-t-transparent mr-2"></div>
                          Submitting...
                        </span>
                      ) : (
                        "Submit Application"
                      )}
                    </Button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
