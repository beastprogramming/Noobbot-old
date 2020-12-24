import TopMenu from "./TopMenu";
import MainMenu from "./MainMenu";

function Header() {
    return (
        <>
        <header className="nb-sticky nb-top-0 nb-z-10 nb-bg-white">
            <TopMenu />
            <MainMenu />
        </header>
        </>
    )
}

export default Header;