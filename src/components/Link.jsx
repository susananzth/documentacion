function Link({href, target = "_blank", children}) {
    return (
        <a href={href} target={target} rel="noopener noreferrer">
            {children}
        </a>
    )
}

export default Link
