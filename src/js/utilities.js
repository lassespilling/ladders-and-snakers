let q = (query) => document.querySelector(query);
let qAll = (query) => document.querySelectorAll(query);
let create = (tag) => document.createElement(tag);
const showModal = ({
  children,
  callback,
  delay = 0,
  answer,
  confirm = '👍',
  cancel = '👎',
  header = null,
}) => {
  setTimeout(() => {
    // Create elements
    let modal = create('div');
    let modalHeader = create('div');
    let modalBox = create('div');
    let content = create('div');
    let ui = create('div');
    // Add classes
    modalHeader.classList.add('modal__header');
    modal.classList.add('modal');
    modalBox.classList.add('modal-box');
    content.classList.add('modal__content');
    ui.classList.add('modal__ui');

    // Add content and event listeners
    if (cancel) {
      let cancelBtn = create('button');
      cancelBtn.classList.add('modal__cancel');
      cancelBtn.innerText = cancel;
      cancelBtn.addEventListener('click', () => {
        callback('failure');
        document.body.removeChild(modal);
      });
      ui.appendChild(cancelBtn);
    }
    if (confirm) {
      let confirmBtn = create('button');
      confirmBtn.innerText = confirm;
      confirmBtn.classList.add('modal__confirm');
      confirmBtn.addEventListener('click', () => {
        callback('success');
        document.body.removeChild(modal);
      });
      ui.appendChild(confirmBtn);
    }
    content.innerHTML = children;
    modalHeader.innerHTML = header;

    // Append
    modalBox.appendChild(modalHeader);
    modalBox.appendChild(content);
    if (answer) {
      let answerDiv = create('button');
      answerDiv.classList.add('modal__answer');
      answerDiv.innerText = 'Avslør fasit';
      answerDiv.addEventListener('click', (e) => {
        e.target.innerHTML = answer;
      });
      modalBox.appendChild(answerDiv);
    }
    modalBox.appendChild(ui);
    modal.appendChild(modalBox);
    document.body.appendChild(modal);
  }, [delay]);
};
