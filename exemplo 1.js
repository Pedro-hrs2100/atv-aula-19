import React, { useEffect } from "react";

const AlertOnLoad = () => {
    useEffect(() => {
        alert("Página carregada!");
    }, []); // O array vazio faz o efeito rodar apenas uma vez.

    return <h2 > Bem - vindo à página! < /h2>;
};

export default AlertOnLoad;