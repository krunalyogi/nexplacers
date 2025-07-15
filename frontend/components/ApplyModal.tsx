'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Button } from '@/components/ui/button'

interface ApplyModalProps {
  isOpen: boolean
  onClose: () => void
  role: string
}

export default function ApplyModal({ isOpen, onClose, role }: ApplyModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    message: '',
  })

  const [resumeFile, setResumeFile] = useState<File | null>(null)

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

    if (!resumeFile) {
      alert("Please upload your resume (PDF only)")
      return
    }

    const data = new FormData()
    data.append('name', formData.name)
    data.append('email', formData.email)
    data.append('linkedin', formData.linkedin)
    data.append('message', formData.message)
    data.append('role', role)
    data.append('resume', resumeFile)

      const res = await fetch('http://localhost:5000/api/apply', {
      method: 'POST',
      body: data,
    })

    if (res.ok) {
      alert('Application submitted successfully!')
      setFormData({ name: '', email: '', linkedin: '', message: '' })
      setResumeFile(null)
      onClose()
    } else {
      alert('Submission failed. Try again.')
    }
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
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
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
              <Dialog.Panel className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg">
                <Dialog.Title className="text-xl font-semibold mb-4">
                  Apply for {role}
                </Dialog.Title>

                <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full border p-2 rounded"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full border p-2 rounded"
                  />
                  <input
                    type="text"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="LinkedIn Profile URL"
                    className="w-full border p-2 rounded"
                  />
                  <div>
                    <label className="block text-sm font-medium mb-1 text-navy-900">
                      Upload Your Resume (PDF only)
                    </label>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      required
                      className="w-full border p-2 rounded bg-white"
                    />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full border p-2 rounded"
                  ></textarea>

                  <div className="flex justify-end gap-4 mt-4">
                    <Button type="button" variant="ghost" onClick={onClose}>
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-navy-900 text-white hover:bg-navy-800">
                      Submit
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
