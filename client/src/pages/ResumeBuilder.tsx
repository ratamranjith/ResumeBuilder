import { useEffect, useState } from "react";
import axios from "axios";
// import Intro from "../components/Intro";
// import Summary from "../components/Summary";
// import WorkExperience from "../components/WorkExperience";
// import TechnicalExpertise from "../components/TechnicalExpertise";
// import Skills from "../components/Skills";
// import Tools from "../components/Tools";
// import Methodology from "../components/Methodology";
// import KeyProjects from "../components/KeyProjects";
// import Certifications from "../components/Certifications";
// import Website from "../components/Website";
// import Education from "../components/Education";

const ResumeBuilder = () => {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("/api/resume", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setResume(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResume();
  }, []);

  if (!resume) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Resume Builder</h1>
      {/* <Intro />
      <Summary />
      <WorkExperience />
      <TechnicalExpertise />
      <Skills />
      <Tools />
      <Methodology />
      <KeyProjects />
      <Certifications />
      <Website />
      <Education /> */}
    </div>
  );
};

export default ResumeBuilder;
