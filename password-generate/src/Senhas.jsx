import { useState } from "react"

export default function Senhas (){
    const [password, setPassword] = useState ("")
    const [copy, setCopy] = useState ("Copiar")
    const [passwordSize, setPasswordSize] = useState ("5")

    function copyText (){
        window.navigator.clipboard.writeText(password)
        setCopy("Copiado!")
    }

    function gerar (){
        const characters = 'qwertyuiopasdfghjklçzxcvbnm7894561230'
        let newPassword = ""
        for (let i = 0; i < passwordSize; i++) {
            const position = Math.floor(Math.random() * characters.length)
            newPassword += characters[position]
        }
        setPassword(newPassword)
    }
    return(
        <div>
            <h1 className="text-4xl font-bold">Gerador de Senhas</h1>
            <div>
                <label className="p-2" htmlFor="passwordSize">Tamanho:</label>
                <input className="bg-slate-800 border-2 text-white w-72 h-8 mt-10 p-3" 
                type="number"
                id="passwordSize" 
                min={1} 
                value={passwordSize}
                onChange={(ev) => setPasswordSize (ev.target.value)}
                />
            </div>

            <button onClick={gerar} className="bg-slate-800 text-white w-56 h-10 mr-20 mt-10" >Gerar senha de {passwordSize} caracteres</button>
            <button onClick={copyText} className="bg-slate-800 text-white w-24 h-10">{copy}</button>
            <div className="text-black mt-10 text-2xl font-semibold "> {password} </div>
        </div>
    )
}