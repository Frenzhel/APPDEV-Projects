import { useEffect } from "react";

export default function Home({ setIsEntered, isEntered }) {
  useEffect(() => {
    if (!isEntered) {
      const handleEnter = () => setIsEntered(true);

      // Add event listeners for keydown and click
      window.addEventListener("keydown", handleEnter);
      window.addEventListener("click", handleEnter);

      // Clean up event listeners
      return () => {
        window.removeEventListener("keydown", handleEnter);
        window.removeEventListener("click", handleEnter);
      };
    }
  }, [setIsEntered, isEntered]);

  if (!isEntered) {
    return (
      <div className="enter-screen">
        <h1>Press Any Key or Click to Enter</h1>
      </div>
    );
  }

  return (
    <div className="home-welcome">
      <h1>Welcome to my GameList!</h1>
      <p>This is a collection of games I have played fully.</p>
    </div>
  );
}
