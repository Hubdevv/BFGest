class Logout {
    static session(context, navigate) {

        if ((context.session !== true)) navigate('/')
    }




    static logout = (context, navigate) => {

        context.setSession(false)

        localStorage.removeItem('id');
        localStorage.removeItem('email');
        localStorage.removeItem('token');
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
        console.log('navigate');
        navigate('/');

    }
}
export default Logout