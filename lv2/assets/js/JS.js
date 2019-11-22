function setmessage() {
    let message_board = document.querySelector('div');
    let message = prompt("请在此留言", "部长女装");
    let newmessage = document.createElement("p");
    newmessage.setAttribute("class", "nm");
    newmessage.innerHTML = message;
    message_board.appendChild(newmessage)
}