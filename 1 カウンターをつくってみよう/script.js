var count = 0;

window.onload = () => {
    document.getElementById("counter").innerText = count;
};

function handleClicked() {
    count++;
    document.getElementById("counter").innerText = count;
}
