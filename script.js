async function enviarPrompt() {
  const prompt = document.getElementById("prompt").value;

  // Envia o prompt para o backend
  const response = await fetch("http://localhost:3000/processar-prompt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: prompt }),
  });

  const data = await response.json(); // Recebe a resposta do servidor
  mostrarResposta(data.resposta); // Exibe a resposta na página
}
