import Navbar from "../components/Navbar";
import Questionnaire from "../components/Questionnaire";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const MainLayout = ({ selectedLanguage, onLanguageChange }: any) => {
  return (
    <div>
      <Navbar
        selectedLanguage={selectedLanguage}
        onLanguageChange={onLanguageChange}
      />
      <Questionnaire selectedLanguage={selectedLanguage} />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
