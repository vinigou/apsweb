//SCRIPT HTML DO HEADER

class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
    <header>
    <nav class="nav-bar">
        <div class="logo">
            <h1>Smart Health</h1>
        </div>
        <div class="nav-list">
            <ul>
                <li class="nav-item"><a href="index-inicio.html" class="nav-link">Início</a></li>
                <li class="nav-item"><a href="index-imc.html" class="nav-link">IMC</a></li>
                <li class="nav-item"><a href="index-sobre.html" class="nav-link"> Sobre</a></li>
            </ul>
        </div>
        <div id="Sair" class="login-button">
            <button><a href="index.html">Sair</a></button>
        </div>

        <div class="mobile-menu-icon">
            <button onclick="menuShow()"><img class="icon" src="assets/img/menu_white_36dp.svg" alt=""></button>
        </div>
    </nav>
    <div class="mobile-menu">
        <ul>
            <li class="nav-item"><a href="index-inicio.html" class="nav-link">Início</a></li>
            <li class="nav-item"><a href="index-imc.html" class="nav-link">IMC</a></li>
            <li class="nav-item"><a href="index-sobre.html" class="nav-link">Sobre</a></li>
        </ul>

        <div id="Sair" class="login-button">
            <button><a href="index.html">Sair</a></button>
        </div>
    </div>
</header>
<br>
      `;
    }
  }
  customElements.define('main-header', Header);
