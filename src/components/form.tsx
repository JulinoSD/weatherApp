
interface UserProps {
    name: string,
    email: string,
    password: string,
}

export default function register() {
    return (
        <form>
           <label htmlFor="name">Nome</label>
           <input type="text" name="name" /> 
           <label htmlFor="email">E-mail</label>
           <input type="email" name="email" id="email" />
           <label htmlFor="password">Password</label>
           <input type="password" name="password" id="password" />

           <button type="submit">Enviar</button>
        </form>
    )
}