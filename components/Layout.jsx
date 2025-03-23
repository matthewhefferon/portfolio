import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";

export default function Layout({ children, darkMode, setDarkMode }) {
  return (
    <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
      <nav className="py-10 flex justify-between dark:text-white">
        <h1 className="font-burtons text-xl"> </h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/matthewhefferon/"
              passHref={true}
            >
              <div className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:brightness-95">
                Connect
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </main>
  );
} 