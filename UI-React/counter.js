function Conter(){
    let counter = 0;
    const counterUI = document.createElement('div');
    function handleClick(){
        counter++;
        counterUI.innerText = counter;
    }
    counterUI.innerText = counter;
    counterUI.onclick = handleClick;
    return counterUI;
}
const root = document.getElementById('root');
root.appendChild(Conter())