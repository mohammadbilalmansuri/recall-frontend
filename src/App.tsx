import { useEffect } from "react";
import Button from "./components/ui/Button";

const App = () => {
  // useEffect(() => {
  //   document.documentElement.classList.toggle(
  //     "dark",
  //     localStorage.currentTheme === "dark" ||
  //       (!("theme" in localStorage) &&
  //         window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   );
  // }, []);

  return (
    <div>
      <Button as="link" to="/about" text="About" variant="primary" />
      <Button as="navlink" to="/contact" text="Contact" variant="secondary" />
    </div>
  );
};

export default App;
