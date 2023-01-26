function LoginPage({login}){
    return (
        <div>
            <form onSubmit={login("ran","1234")}>
                <input type="text" name="username" placeholder="Enter Username" />
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="submit"/>
            </form>
        </div>
    )
}

export default LoginPage
