import { FunctionComponent, ReactNode } from "react";
import Link from 'next/link'

interface IProps {
    main: ReactNode;
}

const Layout: FunctionComponent<IProps> = ({ main }) => {
    const authenticated = false

    const logout = () => {
        return <div>Parser</div>
    }

    return (
        <div className="bg-black max-w-screen-1xl max-auto">
            <nav className="bg-gray-800 max-w-screen flex items-center justify-between " style={{ height: '64px' }}>
                <div className="p-6 flex items-center justify-between">
                    <input type="text"
                        name="search"
                        id="search"
                        placeholder="Local/Cidade/Estado"
                        style={{ width: '250px', borderRadius: '2px' }}
                    />
                    {authenticated ? <>
                        {/* <button onClick={() => { }}>Log out</button> */}
                        <button onClick={logout}>Log out</button>
                    </> : <>
                        <Link href="/auth">
                            <a>
                                Registre-se
                            </a>
                        </Link>
                    </>}
                </div>
            </nav>
            <main style={{ minHeight: "calc(100vh - 64px)" }}>
                {main}
            </main>
        </div>
    )
}

export default Layout