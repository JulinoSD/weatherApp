interface UserProps {
    name: string,
    email: string,
    password: string,
}

export default function Auth() {
    return (
        <>
            <form style={{display: 'flex', flexDirection:'column', margin: '0px 20px', minHeight: '100vh'}} className="form flex justify-center">
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" />
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />

                <button type="submit" className="bg-indigo-700 mt-5 rounded uppercase h-8">Enviar</button>
            </form>
        </>
    )
}