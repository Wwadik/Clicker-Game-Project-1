let counter = 0;
let intervalHndl;
function closeMsgBox() {
  const msgBox = document.querySelector('#msgBox');
  msgBox.style.display = 'none';
}

function evilClick() {
  const timeOut = 2000;
  counter++;
  const msgBox = document.querySelector('#msgBox');
  let msg = '';
  if (counter == 2) {
    msg = 'you failed my test of not clicking this button.';
  } else if (counter == 4) {
    msg = 'now you can leave.';
  } else if (counter == 6) {
    msg = 'there is nothing else for you here';
  } else if (counter >= 8) {
    msg = 'Please Stop';
  }
  if (counter > 10) for (let i = 10; i < counter; i++) msg += ' STOP!';
  if (msg) {
    msgBox.innerHTML = msg;
    msgBox.style.display = 'flex';
    if (intervalHndl) clearInterval(intervalHndl);
    intervalHndl = setInterval(closeMsgBox, timeOut);
  }
}
