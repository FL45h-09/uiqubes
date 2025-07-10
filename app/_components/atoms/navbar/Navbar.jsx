import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const pathName = usePathname();
    const menuItems = [
        {navTitle: "Home", navLink: "/", navIcon: "HomeIcon"},
        {navTitle: "Brix", navLink: "/brix", navIcon: "AboutIcon"},
        {navTitle: "Designs", navLink: "/designs", navIcon: "DesignIcon"},
        {navTitle: "Contributors", navLink: "/contributors", navIcon: "ProjectIcon"},
        {navTitle: "About Us", navLink: "/about-us", navIcon: "AboutIcon"},
        // {navTitle: "Contact Us", navLink: "/contact-us", navIcon: "ContactIcon"},
    ]
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
