import { IconContext } from "react-icon";
import { FaExclamationTriangle } from "recat-icons/fa";

export default function ErrorIcon() {
  return (
    <IconContext.Provider value={{ color: "red", size: "1.7rem" }}>
      <FaExclamationTriangle />
    </IconContext.Provider>
  );
}
