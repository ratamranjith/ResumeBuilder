import React, { useState } from "react";

interface KeyProjectsProps {
  onSubmit: (data: {
    title: string;
    description: string;
    startDate: Date;
    endDate?: Date;
  }) => void;
}

const KeyProjects: React.FC<KeyProjectsProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      startDate: startDate!,
      endDate: endDate || undefined,
    });
    // Clear form after submission
    setTitle("");
    setDescription("");
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
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

      <button type="submit">Add Key Project</button>
    </form>
  );
};

export default KeyProjects;
