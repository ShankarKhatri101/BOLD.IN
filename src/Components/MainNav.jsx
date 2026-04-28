
import Logo from "./Logo"
import SearchContainer from "./SearchContainer"
import Sections from "./Sections"

function MainNav() {
    return (
        <div className="MainNav">
            <Logo />
            <Sections/>
            <SearchContainer/>
        </div>
    )
}

export default MainNav