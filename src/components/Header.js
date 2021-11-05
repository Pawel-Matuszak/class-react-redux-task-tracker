import Buttton from "./Button"

const Header = ({title, toggleForm, formState}) => {
    return (
        <header className="Header">
            <h1>{title}</h1>
            <Buttton color={formState ? "#C7493A" : "#69e4c5"} content={formState ? "Close" : "Add"} onClick={toggleForm}/>
        </header>
    )
}

export default Header