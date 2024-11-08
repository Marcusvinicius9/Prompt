function enviarPrompt() {
  // Captura o valor do prompt digitado
  const prompt = document.getElementById("prompt").value;

  // Simula uma resposta com base no prompt (no futuro, aqui você faria uma chamada para uma API ou backend)
  const resposta = "Você digitou: " + prompt;

  // Exibe a resposta na página
  mostrarResposta(resposta);
}

function mostrarResposta(resposta) {
  // Atualiza o conteúdo do parágrafo com a id "resposta"
  document.getElementById("resposta").innerText = resposta;
}
