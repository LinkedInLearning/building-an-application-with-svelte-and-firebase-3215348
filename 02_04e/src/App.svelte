<script>
	import Login from "./Login.svelte";
	import { onMount, setContext } from "svelte";
	import Event from "./event.svelte";
	import Forward from "./forward.svelte";

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

	function handleMessage(event){
		alert(event.detail.text)
	}
</script>


<h1>An event Listener, click the button below</h1>
<!-- <Event on:message={handleMessage} /> -->
<Forward on:message={handleMessage} />

<!-- <button on:click={ e => { alert('I am an Inline Event') } }>
    Click Here
</button> -->

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

  
