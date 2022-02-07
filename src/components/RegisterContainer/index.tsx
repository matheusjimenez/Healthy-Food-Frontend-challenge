import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";

import './styles.css';

interface Adress{
    bairro: string;
    cep: string;
    localidade: string;
    logradouro: string;
    uf: string;
}

const RegisterContainer = () =>{
    const [uf, setUf] = useState<string>("")
    const [logradouro, setLogradouro] = useState<string>("")
    const [localidade, setLocalidade] = useState<string>("")

    async function handleCEP(event: React.ChangeEvent<HTMLInputElement>){
        const CEP_LENGHT = 8;
        if(event.target.value.length >= CEP_LENGHT){
            const responseData = await (await getAdress(event.target.value)).data as Adress
            setUf(responseData.uf);
            setLogradouro(responseData.logradouro);
            setLocalidade(responseData.localidade);
        }
    }

    async function getAdress(cep: string){
        return await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    }

    return(
        <div className="app__registerContainer_overlay">
            <p>Nome</p>
            <input placeholder="Matheus Jimenez Falzetta"></input>

            <p>Data de nascimento</p>
            <input placeholder="22/11/1996"></input>

            <p>CPF</p>
            <input placeholder="999.999.999-99"></input>

            <p>CEP</p>
            <input placeholder="14802000" onChange={(e)=>{handleCEP(e)}}></input>

            <p>Cidade</p>
            <input value={localidade} disabled></input>

            <p>Estado</p>
            <input value={uf} disabled></input>

            <p>Rua</p>
            <input value={logradouro} disabled></input>
        </div>
    );
}

export { RegisterContainer }