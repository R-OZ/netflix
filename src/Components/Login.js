import User from "./User"
import adults from "./Images/adults.png"
import kids from "./Images/kids.png"
import teens from "./Images/teens.png"
import Logo from "./Logo"

function Login() {
return (
       <div className="login">
           <Logo />
           <div className="title">Who's watching?</div>
           <div className="login-main">
                <User image ={kids} text="Kids" />
                <User image ={teens} text="Teens" />
                <User image ={adults} text="Adults" />
           </div>
       </div>
    )
}

export default Login
