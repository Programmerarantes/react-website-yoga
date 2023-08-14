
const Navbar = ({show}) => {
    return (
        <>
            <div className={show ?'sidenav active' : 'sidenav'}>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="/">About</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default Navbar