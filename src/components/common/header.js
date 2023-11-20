

const Header = (props) => {
    return(
        <div className={props.bgClass}>
            <div  className="txt-content">
                <h1 className="header-title">{props.Title}</h1>
                {props.children}
            </div>
        </div>
    )

}

export default Header;