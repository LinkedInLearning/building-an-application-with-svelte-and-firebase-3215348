import App from './App.svelte';
import { initializeApp } from "firebase/app";
import {
	getAuth, 
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signOut, 
	signInWithEmailAndPassword,
	onAuthStateChanged
} from 'firebase/auth'
import {
	getFirestore,
	collection,
	getDocs
} from 'firebase/firestore'





const app = new App({
	target: document.body,
	props: {
		name: 'Ayodele'
	}
});

export default app;



// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCZBcum0ffRU2ts5OIYTQUMskpUFwXcwoo",
	authDomain: "hello-world-c4df0.firebaseapp.com",
	projectId: "hello-world-c4df0",
	storageBucket: "hello-world-c4df0.appspot.com",
	messagingSenderId: "1051254886575",
	appId: "1:1051254886575:web:f41b4733db330ffc9cc45a"
  };

initializeApp(firebaseConfig);
/* firebase configuration ends here */

//firebase firestore configuration
const db = getFirestore() //initilization
const colRef = collection(db, 'cars') //collection reference
getDocs(colRef)  //get collection reference
  .then((snapshot) => {
	let cars = []
	snapshot.docs.forEach((doc) => {
		cars.push({...doc.data(), id: doc.id})
	})
	console.log(cars)
  })
  .catch(err => {
	console.log(err.message)
  })

// firebase authentication initialization
const auth = getAuth()



//signup form

const usignUp = document.querySelector('.signup')
usignUp.addEventListener('submit', (e) => {
	e.preventDefault()


	const email = usignUp.email.value
	const pass = usignUp.password.value

	createUserWithEmailAndPassword(auth, email, pass)
	.then((cred) => {
		//console.log('this user has been created:', cred.user)
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
		//console.log('Thank you for using our service today')
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
			//console.log('This user logged in', cred.user)
		})
		.catch((err) => {
			console.log(err.message)
		})
})

//Authentication state change

onAuthStateChanged(auth, (user) => {
	console.log('User status changed:', user)
})

//login with google
