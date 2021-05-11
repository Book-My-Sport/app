import Image from 'next/image'


const Header = () => {
    return (
        <header>
            <a href="/">
                <Image
                    src="/images/logo.svg"
                    alt="logo Book My Sport"
                    width={50}
                    height={50}
                />
            </a>
                
            <a href="/">
                <p>Book My Sport</p>
            </a>
        </header>
    );
}

export default Header;