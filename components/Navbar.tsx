// components/Navbar.tsx
import Link from 'next/link';
import '../app/globals.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navlist'>
        <li className='navItem'><Link href="/">Home</Link></li>
        <li className='navItem'><Link href="/about">About</Link></li>
        <li className='navItem'><Link href="/projects">Projects</Link></li>
        <li className='navItem'><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};


export default Navbar;
