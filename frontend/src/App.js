const lerDados = () => {
  fetch('/api').then(resultado => {
    console.log('dados do backend', resultado)
  })
}

function App() {
  return (
    <div>
      {lerDados()}
      Bem vindo ao Front End
    </div>
  )
}

export default App
