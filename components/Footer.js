import {
  AiFillGithub,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mt-16 p-6 border-t-2 border-gray-700">
      <div className="container ">
        <ul className="text-gray-200 w-full justify-evenly flex ">
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
    </footer>
  );
}
