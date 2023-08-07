class User {
    static login = (input) => {
        console.log(input.email.value)
        console.log(input.pass.value)

        let data = fetch("https://bf-gest.rylize.dev/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                Authorization: 'Bearer' + localStorage.getItem('access'),
                email: input.email.value,
                password: input.pass.value,
            })
        }).then(function(response) {
            return response.json()
        }).then(function(data) {

            // localStorage.setItem('access', data.tokens.access.token)
            // localStorage.setItem('refresh', data.tokens.refresh.token)


            return data

        })

        return data
    }

    // static session(context, navigate) {

    //     if ((context.session !== true)) navigate('/login')

    // }

    // static saveSession(data, setSession) {

    //     localStorage.setItem('id', data.user.id)
    //     localStorage.setItem('email', data.user.email);
    //     localStorage.setItem('token', data.tokens.refresh.token);
    //     localStorage.setItem('firstName', data.user.firstName);
    //     localStorage.setItem('lastName', data.user.lastName);


    //     setSession(true)

    // }



    // static connected = async(setSession) => {

    //     if (localStorage.getItem('id') !== undefined && localStorage.getItem('token') !== undefined) {

    //         const results = await this.session()

    //         if (!results) {

    //             localStorage.removeItem('id')
    //             localStorage.removeItem('token')
    //             localStorage.removeItem('firstName')
    //             localStorage.removeItem('lastName')
    //             localStorage.removeItem('email')

    //             setSession(false)

    //         } else {

    //             setSession(true)

    //         }

    //         return results.success

    //     } else {

    //         return false
    //     }
    // }


    static getAllUserInfos = async(setAllUser) => {

        // if (!user) user = localStorage.getItem('id')

        fetch("https://bf-gest.rylize.dev/users", {
            method: "POST",
            headers: {

                "Content-Type": "application/json",

            },
            body: JSON.stringify({

                Authorization: 'Bearer' + localStorage.getItem('access')
            })
        }).then(function(response) {
            return response.json()

        }).then(function(data) {
            console.log(data);
            setAllUser(data)

            // localStorage.setItem('token', data)

            // // console.log(localStorage);
            // if (data) {
            //     setAllUser(data.user)
            // }

        })

    }

    static fetchInfo = async(setData) => {
        return fetch("https://bf-gest.rylize.dev/users", {
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({

                    Authorization: 'Bearer' + localStorage.getItem('access')
                })
            })
            .then((res) => res.json())
            .then((d) => setData(d))


    }

    static home = () => {

        let data = fetch("https://bf-gest.rylize.dev/users?search=admin&role=admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Authorization: 'Bearer' + localStorage.getItem('access'),
            })

        }).then(function(response) {
            return response.json()
        }).then(function(data) {

            return data

        })

        return data

    }


}
export default User