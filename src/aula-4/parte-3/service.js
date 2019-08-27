function exibirMensagem(codigo) {
    if(codigo === 401) {
        alert('Faça login para continuar')
    }
    if(codigo === 404) {
        alert('Recurso não encontrado.')
    }
    if(codigo === 500) {
        alert('Erro interno de servidor.')
    }
}

export const fetchCientistas = () => {
    fetch('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras')
      .then(response => response.json())
      .then(data => {
        setCientistas(data)
      })
      .catch(error => {
        exibirMensagem(error.code);
      });
}