import Link from "next/link";
import { usePathname } from "next/navigation";

export const menuItems = [
    {pageTitle: "Home", navTitle: "Home", navLink: "/", navIcon: "HomeIcon"},
    {pageTitle: "Ui Bricks", navTitle: "Bricks", navLink: "/bricks", navIcon: "AboutIcon"},
    {pageTitle: "Ui Designs", navTitle: "Designs", navLink: "/designs", navIcon: "DesignIcon"},
    {pageTitle: "Hall Of Fame", navTitle: "Hall Of Fame", navLink: "/contributors", navIcon: "ProjectIcon"},
    {pageTitle: "What is Ui Brix", navTitle: "About Us", navLink: "/about-us", navIcon: "AboutIcon"},
    // {navTitle: "Contact Us", navLink: "/contact-us", navIcon: "ContactIcon"},
]

export const Navbar = () => {
    const pathName = usePathname();
  return (
    <nav className="mainmenu">
        <ul className="unset flex justify-center gap-7">
            {menuItems?.map((item, index)=>(
                <li key={index}><Link className={`text-[14px] font-normal pb-3 relative hover:text-[var(--color-primary)] ${pathName === item.navLink ? "text-gray-50" : ""}`} href={item.navLink}>{item.navTitle}</Link></li>
            ))}
        </ul>
    </nav>
  )
}
