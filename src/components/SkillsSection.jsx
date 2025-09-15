import { useState } from "react";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 50, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },

  // Backend
  { name: "Node.js", level: 0, category: "backend" },
  { name: "Express", level: 0, category: "backend" },
  { name: "MongoDB", level: 0, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 50, category: "tools" },
  { name: "AI", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="container py-16">
      <h2 className="text-3xl font-bold mb-8 text-primary text-center">
        Skills
      </h2>
      <div className="flex justify-center mb-8 space-x-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-card text-foreground"
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="bg-card p-4 rounded-lg shadow card-hover"
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium text-foreground">{skill.name}</span>
              <span className="text-primary">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
