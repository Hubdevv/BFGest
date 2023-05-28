import { API_ROOT } from "../Infos"
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

                login: input.email.value,
                password: input.pass.value,
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