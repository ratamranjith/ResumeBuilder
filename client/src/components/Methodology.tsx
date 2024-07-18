import React, { useState } from "react";

interface MethodologyProps {
  onSubmit: (data: { methodology: string }) => void;
}

const Methodology: React.FC<MethodologyProps> = ({ onSubmit }) => {
  const [methodology, setMethodology] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ methodology });
    // Clear form after submission
    setMethodology("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Methodology</label>
      <textarea
        value={methodology}
        onChange={(e) => setMethodology(e.target.value)}
        required
      />

      <button type="submit">Save Methodology</button>
    </form>
  );
};

export default Methodology;
