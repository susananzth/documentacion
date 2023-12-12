function Code({language = 'javascript', children}) {
    return (
        <pre className="my-1">
            <code className={`rounded ${language}`}>
                {children}
            </code>
        </pre>
    )
}

export default Code
