import React, { useState } from "react";

interface TechnicalExpertiseProps {
  onSubmit: (data: { expertise: string[] }) => void;
}

const TechnicalExpertise: React.FC<TechnicalExpertiseProps> = ({
  onSubmit,
}) => {
  const [expertise, setExpertise] = useState<string[]>([]);
  const [currentExpertise, setCurrentExpertise] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ expertise });
    // Clear form after submission
    setExpertise([]);
    setCurrentExpertise("");
  };

  const addExpertise = () => {
    if (currentExpertise && !expertise.includes(currentExpertise)) {
      setExpertise([...expertise, currentExpertise]);
      setCurrentExpertise("");
    }
  };

  const removeExpertise = (index: number) => {
    const updatedExpertise = [...expertise];
    updatedExpertise.splice(index, 1);
    setExpertise(updatedExpertise);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Technical Expertise</label>
      <div>
        {expertise.map((item, index) => (
          <div key={index}>
            {item}{" "}
            <button type="button" onClick={() => removeExpertise(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={currentExpertise}
        onChange={(e) => setCurrentExpertise(e.target.value)}
      />
      <button type="button" onClick={addExpertise}>
        Add Expertise
      </button>

      <button type="submit">Save Technical Expertise</button>
    </form>
  );
};

export default TechnicalExpertise;
