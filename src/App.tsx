import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>Igor Reis</h1>
        <nav>
          <a href="#about">Sobre</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>

      <main>
        <section id="about">
          <h2>Sobre mim</h2>
          <p>Escreva um breve resumo sobre quem você é, sua experiência e interesses.</p>
        </section>

        <section id="projects">
          <h2>Projetos</h2>
          <p>Aqui você pode listar alguns projetos importantes com links para o GitHub.</p>
        </section>

        <section id="contact">
          <h2>Contato</h2>
          <p>Email: <a href="mailto:contato.igors.reis@gmail.com">contato.igors.reis@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/igor-reis-167832149/" target="_blank">linkedin.com/in/igor-reis-167832149</a></p>
        </section>
      </main>

      <footer>
        <small>© {new Date().getFullYear()} Seu Nome</small>
      </footer>
    </>
  )
}

export default App
