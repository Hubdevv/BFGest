import axios from 'axios'

export default axios.create({
    baseURL: 'https://bf-gest.rylize.dev/auth/login'
})