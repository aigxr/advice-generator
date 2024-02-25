const button = document.querySelector("#button");
function fetchAdvice() {
    const adviceId = document.querySelector("#adviceId");
    const adviceText = document.querySelector("#adviceText");
    fetch("https://api.adviceslip.com/advice")
        .then((res) => {
            if (!res.ok) {
                throw new Error("Unable to find advice");
            } else {
                return res.json();
            }
        })
        .then(obj => {
            adviceId.innerHTML = obj.slip.id;
            adviceText.innerHTML = '"' + obj.slip.advice + '"';
        })
        .catch(error => adviceText.innerHTML = "Unable to find advice " + error);
}
window.addEventListener("load", fetchAdvice);
button.addEventListener("click", fetchAdvice);