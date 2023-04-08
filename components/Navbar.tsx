import Link from "next/link";
import React from "react";

const links = [
  {
    link: "",
    label: "Наши услуги",
  },
  {
    link: "",
    label: "О компании",
  },
  {
    link: "",
    label: "Контакты",
  },
  {
    link: "",
    label: "Что вы получаете",
  },
];

const Navbar = () => {
  return (
    <nav className="py-6 z-[1300] bg-white mt-2 rounded-full px-8">
      <div className="container">
        <div>
          <ul className="flex items-center">
            <li className="mr-4">
              <Link href={"/"} className="">
                <img
                  src="https://stepform.io/main/style/assets/img/brand/logo/logo-dark.svg"
                  alt="logo"
                  className="max-w-[137px] min-w-[137px]"
                />
              </Link>
            </li>
            {links.map(({ label, link }, i) => (
              <li key={i} className="">
                <a
                  href={link}
                  className="px-6 py-[14px] hover:bg-lightBlue inline-block transition-all hover:text-blue hover:opacity-100 rounded-[13px] font-medium opacity-75"
                  style={{
                    fontWeight: 600,
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ul></ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
