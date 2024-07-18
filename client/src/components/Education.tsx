import React, { useState } from "react";

interface EducationProps {
  onSubmit: (data: {
    institution: string;
    degree: string;
    startDate: Date;
    endDate?: Date;
  }) => void;
}

const Education: React.FC<EducationProps> = ({ onSubmit }) => {
  const [institution, setInstitution] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      institution,
      degree,
      startDate: startDate!,
      endDate: endDate || undefined,
    });
    // Clear form after submission
    setInstitution("");
    setDegree("");
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg"
    >
      <label className="block mb-2 font-bold text-gray-700">Institution</label>
      <input
        type="text"
        value={institution}
        onChange={(e) => setInstitution(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded mb-4"
        placeholder="Enter institution"
        required
      />

      <label className="block mb-2 font-bold text-gray-700">Degree</label>
      <input
        type="text"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded mb-4"
        placeholder="Enter degree"
        required
      />

      <label className="block mb-2 font-bold text-gray-700">Start Date</label>
      <input
        type="date"
        value={startDate?.toISOString().split("T")[0] || ""}
        onChange={(e) => setStartDate(new Date(e.target.value))}
        className="w-full px-3 py-2 border border-gray-300 rounded mb-4"
        required
      />

      <label className="block mb-2 font-bold text-gray-700">End Date</label>
      <input
        type="date"
        value={endDate?.toISOString().split("T")[0] || ""}
        onChange={(e) => setEndDate(new Date(e.target.value))}
        className="w-full px-3 py-2 border border-gray-300 rounded mb-4"
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Education
      </button>
    </form>
  );
};

export default Education;
