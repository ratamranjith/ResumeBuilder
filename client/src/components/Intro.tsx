import React, { useState } from "react";

interface IntroProps {
  onSubmit: (data: { intro: string }) => void;
}

const Intro: React.FC<IntroProps> = ({ onSubmit }) => {
  const [intro, setIntro] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ intro });
    // Clear form after submission
    setIntro("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Introduction</label>
      <textarea
        value={intro}
        onChange={(e) => setIntro(e.target.value)}
        required
      />

      <button type="submit">Save Introduction</button>
    </form>
  );
};

export default Intro;
