import { postNewUser } from "./fetch";
import { errorMessage } from "./error.ts";

type NewUser = {
    username: string,
    password: string,
    userImage: string
}


let profileImage = ''; //global variabel för att spara bilden

const chooseProfilePicture = document.querySelector('.profile-images') as HTMLElement;
const signupPElement = document.querySelector('.signupPElement') as HTMLParagraphElement;
const chickenImg = document.querySelector('.chick-profile') as HTMLDivElement;
const cowImg = document.querySelector('.cow-profile') as HTMLDivElement;
const pigImg = document.querySelector('.pig-profile') as HTMLDivElement;

chooseProfilePicture.addEventListener('click', (event) => {
    if (event.target == chickenImg) {
        chickenImg.style.border = '3px solid rgb(115, 168, 115)';
        chickenImg.style.boxSizing = 'border-box';
        cowImg.style.border = 'none';
        pigImg.style.border = 'none';
        console.log('chicken')
    } else if (event.target == cowImg) {
        cowImg.style.border = '3px solid rgb(115, 168, 115)';
        cowImg.style.boxSizing = 'border-box';
        pigImg.style.border = 'none';
        chickenImg.style.border = 'none';
        console.log('cow')
    } else if (event.target === pigImg) {
        pigImg.style.border = '3px solid rgb(115, 168, 115)';
        pigImg.style.boxSizing = 'border-box';
        cowImg.style.border = 'none';
        chickenImg.style.border = 'none';
        console.log('pig');
    }
})

const signUpForm = document.querySelector('#signup-form') as HTMLFormElement;
signUpForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const userInput = document.querySelector('#createUsername-form') as HTMLInputElement;
    const passwordInput = document.querySelector('#createPassword-form') as HTMLInputElement;

    const userInputValue = userInput.value;
    console.log(userInputValue)
    const passwordInputValue = passwordInput.value;
    console.log(passwordInputValue)

    const newUser: NewUser = {
        username: userInputValue,
        password: passwordInputValue,
        userImage: profileImage
    }

    console.log(newUser)

    let signUpSuccessful = false;
    const createNewUser = await postNewUser(newUser);
    console.log(newUser)
    window.location.href = "http://localhost:1234/home.html";


    if (signUpSuccessful) {
        console.log('Successful signup!');

    } else {
        console.log('Signup failed');
        errorMessage('Signup failed, please try again!')
    }
    signUpForm.reset();
});

const displayChickenImage = document.querySelector('.selected-chick') as HTMLElement;
const displayCowImage = document.querySelector('.selected-cow') as HTMLElement;
const displayPigImage = document.querySelector('.selected-pig') as HTMLElement;

chickenImg.addEventListener('click', () => {
    displayChickenImage.style.display = 'block';
    displayCowImage.style.display = 'none';
    displayPigImage.style.display = 'none';
    signupPElement.style.display = 'none';
    profileImage = 'chicken'; //sparar värdet i globala variabeln när man trycker på en bild
})

cowImg.addEventListener('click', () => {
    displayCowImage.style.display = 'block';
    displayPigImage.style.display = 'none';
    displayChickenImage.style.display = 'none';
    signupPElement.style.display = 'none';
    profileImage = 'cow';
})

pigImg.addEventListener('click', () => {
    displayPigImage.style.display = 'block';
    displayCowImage.style.display = 'none';
    displayChickenImage.style.display = 'none';
    signupPElement.style.display = 'none';
    profileImage = 'pig';
})
