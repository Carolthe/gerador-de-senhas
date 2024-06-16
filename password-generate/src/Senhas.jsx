import { useState } from "react"

export default function Senhas (){
    const [password, setPassword] = useState ("")

    function gerar (){
        const characters = 'qwertyuiopasdfghjklçzxcvbnm7894561230'
        const length = 10
        let newPassword = ""
        for (let i = 0; i < length; i++) {
            const position = Math.floor(Math.random() * characters.length)
            newPassword += characters[position]
        }
        setPassword(newPassword)
    }
    return(
        <div>
            <h1 className="text-4xl font-bold">Gerador de Senhas</h1>
            <button onClick={gerar} className="bg-slate-800 text-white w-24 h-10 mr-20 mt-10" >Gerar</button>
            <button className="bg-slate-800 text-white w-24 h-10">Copiar</button>
            <div className="text-black mt-10 text-2xl font-semibold "> {password} </div>
        </div>
    )
}