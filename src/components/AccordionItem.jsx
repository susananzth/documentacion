function AccordionItem({id, title, children}) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" 
                    data-bs-toggle="collapse" data-bs-target={`#${id}`} 
                    aria-expanded="false" aria-controls={id}>
                    {title}
                </button>
            </h2>
            <div className="accordion-collapse collapse" id={id}>
                <div className="accordion-body">
                    <ul className="list-unstyled accordion-body">
                        {children}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AccordionItem
