import React, { useState } from "react";

interface CertificationsProps {
  onSubmit: (data: { title: string; issuer: string; date: Date }) => void;
}

const Certifications: React.FC<CertificationsProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [issuer, setIssuer] = useState("");
  const [date, setDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, issuer, date: date! });
    // Clear form after submission
    setTitle("");
    setIssuer("");
    setDate(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg"
    >
      <label className="block mb-2 font-bold text-gray-700">
        Certifications Title
      </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded mb-4"
        placeholder="Enter certifications title"
        required
      />

      <label className="block mb-2 font-bold text-gray-700">Issuer</label>
      <input
        type="text"
        value={issuer}
        onChange={(e) => setIssuer(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded mb-4"
        placeholder="Enter issuer"
        required
      />

      <label className="block mb-2 font-bold text-gray-700">Date</label>
      <input
        type="date"
        value={date?.toISOString().split("T")[0] || ""}
        onChange={(e) => setDate(new Date(e.target.value))}
        className="w-full px-3 py-2 border border-gray-300 rounded mb-4"
        required
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Certifications
      </button>
    </form>
  );
};

export default Certifications;
