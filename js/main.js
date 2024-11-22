// add a close element to each li
let myLi = document.getElementsByTagName('li');
for (let i = 0; i < myLi.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00d7");
    span.setAttribute("class", "close");
    span.appendChild(txt);
    myLi[i].appendChild(span);
}
// Handle clicking on li
let myUl = document.querySelector("#my-ul");
myUl.addEventListener('click', (event) => {
    const target = event.target;

    // remove li when close button clicks
    if (target.classList.contains('close')) {
        target.parentElement.remove();
    }
    // add checked mark when click on list
    else if (target.tagName === 'LI') {
        target.classList.toggle('checked');
        target.style.textDecoration = target.classList.contains('checked') ? 'line-through' : 'none';
    }
});
// Add a new li when click on Add buttun
let addBtn = document.querySelector("#addBtn");
addBtn.onclick = () => {
    let input = document.querySelector('input[type="text"]').value;
    if (input === '') {
        window.alert("please enter text");
        return;
    }

    let newLi = document.createElement("li");
    newLi.textContent = input;

    // Add close button
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(txt);
    newLi.appendChild(span);

    myUl.appendChild(newLi);
    document.querySelector('input[type="text"]').value = '';
}