import mylogo from "./Images/myLogo.png"

function Logo({size}) {
    // const styles={
    //     size: `${size}px`,
    // }
    return (
        <div>
            <img src={mylogo} className="logo-style" />
        </div>
    )
}

export default Logo
