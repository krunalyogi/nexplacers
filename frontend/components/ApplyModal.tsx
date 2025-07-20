// components/ApplyModal.tsx
"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  role: string;
}

// Change backend here via env (preferred) or fallback to deployed URL
const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "") ||
  "https://nexplacers.onrender.com";

const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose, role }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null as File | null,
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    if (formData.resume) data.append("resume", formData.resume);
    data.append("role", role); // pass selected role

    try {
      const response = await fetch(`${API_BASE}/api/apply`, {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        const msg = await response.text();
        throw new Error(`HTTP ${response.status}: ${msg}`);
      }

      setSuccessMessage("Application submitted successfully!");
      setFormData({ name: "", email: "", phone: "", resume: null });

      setTimeout(() => {
        setSuccessMessage("");
        onClose();
      }, 4000);
    } catch (error: any) {
      alert("Error submitting form: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-10 rounded-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Apply Now</h2>

        {successMessage && (
          <div className="bg-green-100 border border-green-300 text-green-800 px-6 py-4 mb-6 rounded-lg text-center">
            {successMessage}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full p-4 border border-gray-300 rounded-lg"
          />

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Upload Resume (PDF only)</span>
            <input
              type="file"
              name="resume"
              accept=".pdf"
              onChange={handleChange}
              required
              className="block w-full mt-2"
            />
          </label>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-luxury-gold text-black font-semibold py-4 text-lg rounded-lg"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent mr-3"></div>
                Sending
              </span>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" /> Submit Application
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyModal;
