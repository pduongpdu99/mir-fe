import "./index.css";

/**
 * 
 * @param {{title: string}} props 
 * @returns 
 */
function HeaderComponent(props) {
    const { title } = props;
    return (
        <div className="header-component">{title}</div>
    )
}

export default HeaderComponent;