import { subscribeToHellfireClub } from "./firebase/hellfire-club.js";

const txtName = window.document.getElementById('txtName');
const txtEmail = window.document.getElementById('txtEmail');
const txtLevel = window.document.getElementById('txtLevel');
const txtCharacter = window.document.getElementById('txtCharacter');
const btnSubscribe = window.document.getElementById('btnSubscribe');

//Uma AÇÃO em js é uma função

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    // Salvar no Firebase(DataBase)

    const subscriptionId = await subscribeToHellfireClub(subscription);
    console.log(`Inscrito com sucesso: ${subscriptionId}`)
})