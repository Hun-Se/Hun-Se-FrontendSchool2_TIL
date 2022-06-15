import { useContext } from "react";
import { DarkMode } from "./context/darkmode"
import HelloLicatFour from "./HelloLicatThree"

const HelloLicatThree = () => {
    const mode = useContext(DarkMode);
    return (
        <div>
            {/* bloean이라서 ''를 붙인다. */}
            <h2>{mode + ''}</h2> 
            <HelloLicatFour/>
        </div>
    )
}

export default HelloLicatThree