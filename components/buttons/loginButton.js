import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh;">
      <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 20px;">Welcome to Vocab-YOU-lary!</h1>
      <button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>
    </div>`;
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
