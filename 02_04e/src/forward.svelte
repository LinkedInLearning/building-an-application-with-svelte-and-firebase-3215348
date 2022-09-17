
<script>
	import Event from './event.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function forward(event) {
		dispatch('message', event.detail);
	}
</script>

<Event on:message={forward}/>



<!-- 
    below is a short hand for the code above. which will still works normal as the code above will do 

    you can comment out the code above and uncomment the code below, it will still work perfectly. This explain the event forwarding in svelte js.
-->


<!-- 
<script>
	import Event from './Event.svelte';
</script>

<Event on:message/> -->