const p = document.querySelector("p")
const input = document.querySelector("input")

const contacts = [
    { name: "Rodolfo", number: "(19) 94343-3434" },
    { name: "Paulo", number: "(12) 93443-3434" },
    { name: "Aline", number: "(13) 94566-3434" },
    { name: "Maria", number: "(14) 94343-3436" }
]

function search() {

    let contactFound = false

    for (let i = 0; i < contacts.length; i++) {

        if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {

            p.innerHTML = `
                Contato Encontrado <br>
                Nome: ${contacts[i].name} <br>
                Telefone: ${contacts[i].number}
            `

            contactFound = true
            break
        }
    }

    if (contactFound === false) {
        p.innerHTML = "Contato não encontrado. Tente novamente."
    }

}