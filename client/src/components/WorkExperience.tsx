import React, { useState } from "react";

interface WorkExperienceProps {
  onSubmit: (data: {
    company: string;
    position: string;
    startDate: Date;
    endDate?: Date;
  }) => void;
}

const WorkExperience = ({ onSubmit }: WorkExperienceProps) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      company,
      position,
      startDate: startDate!,
      endDate: endDate || undefined,
    });
    // Clear form after submission
    setCompany("");
    setPosition("");
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Company</label>
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />

      <label>Position</label>
      <input
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
      />

      <label>Start Date</label>
      <input
        type="date"
        value={startDate?.toISOString().split("T")[0] || ""}
        onChange={(e) => setStartDate(new Date(e.target.value))}
        required
      />

      <label>End Date</label>
      <input
        type="date"
        value={endDate?.toISOString().split("T")[0] || ""}
        onChange={(e) => setEndDate(new Date(e.target.value))}
      />

      <button type="submit">Add Work Experience</button>
    </form>
  );
};

export default WorkExperience;
