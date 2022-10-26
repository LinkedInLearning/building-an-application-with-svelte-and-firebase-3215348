import App from './App.svelte';
import { initializeApp } from "firebase/app";
import { getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYFNE9DEY2_6YtT0B3mi8iHmAwwiv0A7s",
  authDomain: "hello-world-7d887.firebaseapp.com",
  projectId: "hello-world-7d887",
  storageBucket: "hello-world-7d887.appspot.com",
  messagingSenderId: "104946554944",
  appId: "1:104946554944:web:5f6515249378cc065d67a5"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const auth = getAuth()

//signup form
const usignUp = document.querySelector('.signup')
usignUp.addEventListener('submit', (e) => {
	e.preventDefault()


	const email = usignUp.email.value
	const pass = usignUp.password.value

	createUserWithEmailAndPassword(auth, email, pass)
	.then((cred) => {
		console.log('this user has been created:', cred.user)
		usignUp.reset()
	})
	.catch((err) => {
		console.log(err.message)
	})
})



//login and logout function

const ulogout = document.querySelector('.logout')
ulogout.addEventListener('click', () => {
	signOut(auth)
	.then(() => {
		console.log('Thank you for using our service today')
	})
	.catch((err) => {
		console.log(err.message)
	})

})

const ulogin = document.querySelector('.login')
ulogin.addEventListener('submit', (e) => {
	e.preventDefault()

	const umail = ulogin.email.value
	const upass = ulogin.password.value

	signInWithEmailAndPassword(auth, umail, upass)
		.then((cred) => {
			console.log('This user logged in', cred.user)
		})
		.catch((err) => {
			console.log(err.message)
		})
})
