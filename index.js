const resposta = document.querySelector("#Resposta");
const buttonAnterior = document.querySelector("#buttonAnterior");
const buttonProximo = document.querySelector("#buttonProximo");
let PaginaRecente = 1
Dados ();
function Dados() { 
    axios.get(`http://localhost:3000/recados?page=${PaginaRecente}`)
        .then((response) => {
            resposta.innerHTML = ""; // Limpa o conteúdo anterior
            const jsonData = response.data; // Dados da resposta
            const jsonString = JSON.stringify(jsonData,null, 2); // Converte para JSON formatado
            resposta.innerHTML = `<pre>${jsonString}</pre>`; // Exibe os dados JSON formatados
        });
}

function proximo() {
    PaginaRecente++;
    Dados();
}

function anterior() {
    if (PaginaRecente > 1) {
        PaginaRecente--;
        Dados();
    }
}