import useDarkMode from "../../hooks/dark-mode";
export default function Navbar() {
  const { dark, toggleDarkMode } = useDarkMode();
  return (
    <div className="w-full sticky top-0 ">
      <div className="absolute w-full p-8 bg-black -z-10 opacity-50 dark:bg-white backdrop-blur-lg"></div>
      <div className="flex p-4  dark:text-white gap-8 ">
        <div className="">Logo</div>
        <div className="">Skills</div>
        <div>Projects</div>
        <div>Articles</div>
        <div>Contact Me</div>
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </div>
    </div>
  );
}
