let tabuada; result = ""
tabuada = Number(prompt("Qual tabuada que você quer?"))

    for(let i = 1;  i <= 10; i ++){
        result += tabuada + "X" + i + "=" + (i * tabuada) + "\n"

    }
    alert("tabuada do 5:" + "\n" + result)