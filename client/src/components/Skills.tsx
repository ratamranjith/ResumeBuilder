// client/src/components/SkillsForm.tsx

import React, { useState } from "react";

interface SkillsFormProps {
  onSubmit: (data: { name: string; proficiency: string }) => void;
}

const SkillsForm: React.FC<SkillsFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [proficiency, setProficiency] = useState("Intermediate"); // Default to Intermediate

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, proficiency });
    // Clear form after submission
    setName("");
    setProficiency("Intermediate");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Skill Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label>Proficiency</label>
      <select
        value={proficiency}
        onChange={(e) => setProficiency(e.target.value)}
        required
      >
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <button type="submit">Add Skill</button>
    </form>
  );
};

export default SkillsForm;
