<script>
import { 
    getAuth 
} from 'firebase/auth'


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

</script>


<main>
    <h2>Firebase Authentication</h2>
<form class="signup">
	<label for="email">Email:</label>
	<input type="email" name="email">
	<label for="password">Password:</label>
	<input type="password" name="password">
	<button>Signup</button>
</form>
</main>

<style>

</style>