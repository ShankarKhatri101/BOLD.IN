
function CloseBtn({setTurncart}) {
    function handleClick(){
        setTurncart(false)
    }
    return (
        <button onClick={handleClick} className="CloseBtn">
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinecap="round" />
            </svg>
        </button>
    )
}
export default CloseBtn