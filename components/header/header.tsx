import NavItem from "./NavItem";

export default function Header() {
  return (
    <header className="w-full h-[100%] relative px-[40px]">
      <nav>
        <ul className="flex gap-1 items-center">
          <NavItem item="about">About</NavItem>
          <NavItem item="experience">Experience</NavItem>
          <NavItem item="projects">Projects</NavItem>
          <NavItem item="contact">Contact</NavItem>
        </ul>
      </nav>
    </header>
  );
}
