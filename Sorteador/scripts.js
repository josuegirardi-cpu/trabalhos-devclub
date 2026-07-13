function generateNumber() {

    const min = Math.ceil(Number(document.querySelector(".input-min").value));
    const max = Math.floor(Number(document.querySelector(".input-max").value));

    if (min >= max) {
        alert("O número mínimo deve ser menor que o número máximo.");
        return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result);
}