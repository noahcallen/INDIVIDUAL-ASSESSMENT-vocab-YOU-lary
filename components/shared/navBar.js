import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
        <a class="navbar-brand title" href="#">Vocab</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="allVocab">
                All Vocab <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="javaScript">JavaScript</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="html">HTML</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="css">CSS</a>
            </li>
          </ul>
          <span class="navbar-text">
            <div id="logout-button"></div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
