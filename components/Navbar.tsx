// import Link from "next/link"
// import Image from "next/image"
// import { NAV_LINKS } from "@/constants"
// import Button from "./Button"
// const Navbar = () => {
//   return (
//     <nav className="flexBetween max-container padding-container relative z-30 py-5">
//       {/* for logo */}
//         <Link href="/">
//        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}/>
//            </Link>
//            {/* for links */}
//          <ul className="hidden h-full gap-12 lg:flex">
//          {NAV_LINKS.map((link) => (
//             <Link href={link.href} key={link.key} 
//             className=
//             "regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
//                  {link.label}
//             </Link>
//          ))}
//          </ul>
//          {/* for login btn we make a component because we have to reuse it several times */}
//          <div className="lg:flexCenter hidden">
//           {/* for different btn we use props so it knows how should it behave */}
//             <Button 
//             type="button"
//             title="Login"
//             icon="/user.svg"
//             variant="btn_dark_green"
//             />
//          </div>
        
//         <Image 
//         src="menu.svg"
//         alt="menu"
//         height={32}
//         width={32}
//         className="inline-block cursor-pointer lg:hidden"
//         />

//     </nav>
//   )
// }

// export default Navbar

"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; // Import useState for managing the menu's open/close state
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  // State to manage the menu visibility on small screens
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      {/* Logo */}
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* Links for large screens */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Login button for large screens */}
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* Hamburger menu icon for small screens */}
      <Image
        src="/menu.svg"
        alt="menu"
        height={32}
        width={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu} // Toggle the menu on click
      />

      {/* Menu for small screens */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 bg-white shadow-md py-5 px-4 w-full lg:hidden">
          <ul className="flex flex-col items-start gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="text-gray-700 pb-1.5 transition-all hover:font-bold"
                onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
              >
                {link.label}
              </Link>
            ))}
          </ul>
          {/* Login button for small screens */}
          <div className="mt-4">
            <Button
              type="button"
              title="Login"
              icon="/user.svg"
              variant="btn_dark_green"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
