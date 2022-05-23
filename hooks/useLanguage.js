import { useContext } from "react";
import LanguageContext from "../context/languageContext";

const useLanguage = () => useContext(LanguageContext);

export default useLanguage;
