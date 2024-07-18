import React, { useState } from "react";

interface WebsiteProps {
  onSubmit: (data: { website: string }) => void;
}

const Website: React.FC<WebsiteProps> = ({ onSubmit }) => {
  const [website, setWebsite] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ website });
    // Clear form after submission
    setWebsite("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Website</label>
      <input
        type="url"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        required
      />

      <button type="submit">Save Website</button>
    </form>
  );
};

export default Website;
