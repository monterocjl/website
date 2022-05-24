import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const useLanguage = () => useContext(LanguageContext);

export default useLanguage;
