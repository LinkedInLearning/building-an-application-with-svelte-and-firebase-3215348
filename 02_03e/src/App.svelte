<script>
	import Login from "./Login.svelte";
	import { onMount, setContext } from "svelte";
  
  import {
	key as userContextKey,
	initialValue as userContextInitialValue
  } from "./userContext";

 

  onMount(() => {
	setContext(userContextKey, userContextInitialValue);
  });

  const submit = ({ email, password }) =>
	new Promise((resolve, reject) => {
	  setTimeout(() => {
		setContext(userContextKey, {
		  name: "Ayo",
		  lastName: "Leom",
		  email: "ayo@leom.com"
		});
		resolve();
	  }, 1000);
	});
</script>

<section>
	<Login {submit} />
  </section>

<style>
	section {
	  height: 100vh;
	  width: 100%;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  background: url(https://res.cloudinary.com/leomiscoding/image/upload/v1657998692/hero-img-o.jpg);
	}

</style>

  
