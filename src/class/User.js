// import { API_ROOT } from "../Infos"
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

                email: input.email.value,
                password: input.pass.value,
            })
        }).then(function(response) {
            return response.json()
        }).then(function(data) {

            return data

        })

        return data
    }



    static session = () => {
        let data = fetch("https://bf-gest.rylize.dev/auth/refresh-tokens", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                id: localStorage.getItem('id'),
                token: localStorage.getItem('token')
            })
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            console.log(data)

            return data

        })

        return data
    }

    static connected = async(setSession, setMe) => {

        if (localStorage.getItem('id') !== undefined && localStorage.getItem('token') !== undefined) {

            const results = await this.session()

            if (!results.success) {

                localStorage.removeItem('id')
                localStorage.removeItem('token')
                localStorage.removeItem('firstName')
                localStorage.removeItem('lastName')
                localStorage.removeItem('email')


                setSession(false)

            } else {
                setSession(true)
                setMe(results.user)
            }

            return results.success

        } else {

            return false
        }
    }


    // static getAllUserInfos = async(setUserAllInfos, user = false) => {

    //     if (!user) user = localStorage.getItem('id')

    //     fetch("https://bf-gest.rylize.dev/users?search=admin&role=admin", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({

    //             id: localStorage.getItem('id'),
    //             token: localStorage.getItem('token'),

    //         })
    //     }).then(function(response) {
    //         return response.json()
    //     }).then(function(data) {

    //         if (data.success) {
    //             setUserAllInfos(data.data)
    //         }

    //     })

    // }


}
export default User