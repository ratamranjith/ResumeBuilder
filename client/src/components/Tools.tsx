import React, { useState } from "react";

interface ToolsProps {
  onSubmit: (data: { tools: string[] }) => void;
}

const Tools: React.FC<ToolsProps> = ({ onSubmit }) => {
  const [tools, setTools] = useState<string[]>([]);
  const [currentTool, setCurrentTool] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ tools });
    // Clear form after submission
    setTools([]);
    setCurrentTool("");
  };

  const addTool = () => {
    if (currentTool && !tools.includes(currentTool)) {
      setTools([...tools, currentTool]);
      setCurrentTool("");
    }
  };

  const removeTool = (index: number) => {
    const updatedTools = [...tools];
    updatedTools.splice(index, 1);
    setTools(updatedTools);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Tools</label>
      <div>
        {tools.map((item, index) => (
          <div key={index}>
            {item}{" "}
            <button type="button" onClick={() => removeTool(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={currentTool}
        onChange={(e) => setCurrentTool(e.target.value)}
      />
      <button type="button" onClick={addTool}>
        Add Tool
      </button>

      <button type="submit">Save Tools</button>
    </form>
  );
};

export default Tools;
