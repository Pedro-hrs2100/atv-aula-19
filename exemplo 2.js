import React, { useState, useEffect } from "react";

const BackgroundColorChanger = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count % 2 === 0) {
            document.body.style.backgroundColor = "lightblue";
        } else {
            document.body.style.backgroundColor = "lightcoral";
        }
    }, [count]); // O efeito roda sempre que 'count' mudar.

    return ( <
        div >
        <
        h2 > Contador < /h2> <
        p > Valor: { count } < /p> <
        button onClick = {
            () => setCount(count + 1) } > Aumentar < /button> <
        /div>
    );
};

export default BackgroundColorChanger;