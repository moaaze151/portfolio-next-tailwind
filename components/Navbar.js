import Link from "next/link";
import { DiCssdeck } from "react-icons/di";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
export default function Navbar() {
  return (
    <header className="relative ">
      <div className="container fixed translate-x-[-50%] left-[50%] top-0 py-3 bg-black">
        <div className="grid grid-flow grid-cols-12 items-center gap-4 py-2">
          {/* logo */}
          <div className="col-span-5 md:col-span-3">
            <Link href="/">
              <a className="flex items-center text-white">
                <DiCssdeck className="text-3xl sm:text-5xl  sm:mr-1" />
                <span className="text-base font-semibold sm:text-xl">Portfolio</span>
              </a>
            </Link>
          </div>
          {/* list */}
          <div className="col-span-7 md:col-span-5">
            <ul className="text-gray-300 flex justify-end md:justify-start space-x-2 sm:space-x-8 
            md:space-x-12 lg:space-x-16 text-sm sm:text-base md:text-lg font-medium">
              <li>
                <Link href="#projects">
                  <a className="hoverLink">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="#technologies">
                  <a className="hoverLink">Technologies</a>
                </Link>
              </li>
              <li>
                <Link href="#about">
                  <a className="hoverLink">About</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* icons */}
          <div className="col-span-12 md:col-span-4 ">
            <ul className=" text-gray-200 w-full flex justify-center md:justify-end  space-x-8 lg:space-x-16">
              <li>
                <Link href="https://github.com/moaaze151">
                  <a className="" target="_blank">
                    <AiFillGithub className="hoverIcons text-3xl mr-2 cursor-pointer " />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/profile.php?id=100010236858522">
                  <a className="" target="_blank">
                    <AiOutlineFacebook className="hoverIcons text-3xl mr-2 cursor-pointer " />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/%D9%85%D8%B9%D8%A7%D8%B0-%D8%AC%D9%85%D8%A7%D9%84-42446b207/">
                  <a className="" target="_blank">
                    <AiOutlineLinkedin className="hoverIcons text-3xl  cursor-pointer " />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
