function User({image,text}) {
    const cursorStyle={
        cursor: "pointer",          
    }
    return (
        <div className="user-main" >
                <img className="user-image" src={image} />
            
            <p className="user-name">
                {text}
            </p>
        </div>
    )
}

export default User
