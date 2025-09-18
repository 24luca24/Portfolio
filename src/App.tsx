import NavBar from "./components/NavBar.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Projects from "./components/Projects.tsx";

export default function App() {

  const handleDownloadCV = () => {
    window.open('/Luca_Airaghi_CV.pdf', '_blank');
  }

  return (
    <div>
      <NavBar 
        name="Luca"
        surname="Airaghi"
        profession="Software and Data Engineer"
        githubLink="https://github.com/24luca24"
        linkedinLink="https://linkedin.com/in/lucaairaghi"
        downloadCVButton={handleDownloadCV}
      />
      <AboutMe 
        imageLink="/images/profile.jpg" 
        insubriaLink="www.uninsubria.it" 
        usiLink="www.usi.ch"
        />
      <Projects />
    </div>
  );
}
