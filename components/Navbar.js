import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <Link href="/"><a>Invoicing</a></Link>
            <Link href="/savings_calc"><a>Savings Calculator</a></Link>
        </nav>
    );
}

export default Navbar;