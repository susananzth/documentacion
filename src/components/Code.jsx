function Code({language = 'language-js', children}) {
    return (
        <pre className="m-0">
            <code className={`rounded ${language}`}>
                {children}
            </code>
        </pre>
    )
}

export default Code
