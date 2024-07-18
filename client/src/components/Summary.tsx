import React, { useState } from "react";

interface SummaryProps {
  onSubmit: (data: { summary: string }) => void;
}

const Summary: React.FC<SummaryProps> = ({ onSubmit }) => {
  const [summary, setSummary] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ summary });
    // Clear form after submission
    setSummary("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Summary</label>
      <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        required
      />

      <button type="submit">Save Summary</button>
    </form>
  );
};

export default Summary;
