import NavBar from "./components/NavBar.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Projects from "./components/Projects.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {

  const handleDownloadCV = () => {
    //create an invisible <a> tag in memory (like temporary download button, but user can't see)
    const link = document.createElement('a');
    //where to find CV
    link.href = '/CV_Luca_Airaghi.pdf';
    //download of CV
    link.download = 'CV_Luca_Airaghi.pdf';
    //simulate click on the link
    document.body.appendChild(link);
    //trigger download browser behavior
    link.click();
    //remove the link from memory
    document.body.removeChild(link);
  }

  return (
    <div>
      <NavBar 
        name="Luca"
        surname="Airaghi"
        profession="Software and Data Engineer"
        githubLink="https://github.com/24luca24"
        linkedinLink="https://linkedin.com/in/lucaairaghi"
        email="luca.airaghi24@gmail.com"
        downloadCVButton={handleDownloadCV}
      />
      <AboutMe 
        imageLink="/images/profile.jpg" 
        insubriaLink="www.uninsubria.it" 
        usiLink="www.usi.ch"
        />
      <Projects />
      <Footer 
        city="Gorla Minore, VA, Italy"
        address="Via Monte Berico 9"
        phoneNumber="+39 3475925080"
      />
    </div>
  );
}
