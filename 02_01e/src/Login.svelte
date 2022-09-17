<script>
import {
	signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'



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
</script>



<main>
    <h2>Login</h2>
    <form class="login">
        <label for="email">Email:</label>
        <input type="email" name="email">
        <label for="password">Password:</label>
        <input type="password" name="password">
        <button>Login</button>
    </form>
    <button class="logout">Logout</button>
</main>




<style>

</style>