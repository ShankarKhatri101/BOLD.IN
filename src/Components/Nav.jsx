import DiscountDiv from "./DiscountDiv"
import MainNav from "./MainNav"
import Style from "./Style"
function Nav() {
    return (
        <div>
            <div className="navTop">
                <div className="signUpWraper">
                    <samp>Help</samp><div className="spanLine"></div>
                    <span>Sing Up</span><div className="spanLine"></div>
                    <span>Log In</span>
                </div>
            </div>
            <MainNav/>
            <DiscountDiv/>
            <Style/>
        </div>
    )
}

export default Nav