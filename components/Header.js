import Image from 'next/image'


const Header = () => {
    return (
        <header>
            <Image
                src="/images/logo.svg"
                alt="logo Book My Sport"
                width={50}
                height={50}
            />
            <p>Book My Sport</p>
        </header>
    );
}

export default Header;