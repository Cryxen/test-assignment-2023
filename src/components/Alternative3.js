import { useState } from "react"

const Alternative3 = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const checkEmailInput = () => {
        if(email.indexOf("@") !== -1)
            return true
        else
            return false
    }

    const checkNameInput = () => {
        if(name.length > 2 && name.indexOf(" ") !== -1)
            return true
        else
            return false
    }

    const handleSubmit = (event) => {
        console.log("E-post: " + email + ", Navn: " + name)
        console.log(checkEmailInput())
        console.log(checkNameInput())
        event.preventDefault()
    }

    return(
        <>
        <h1>Opprett bruker:</h1>
        <form onSubmit={handleSubmit}>
            <label>Navn:</label>
            <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
            <label>E-post:</label>
            <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="submit" name="submit" />
        </form>
        </>
    )
}
export default Alternative3