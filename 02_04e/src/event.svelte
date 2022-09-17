<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()

    function mySecondEvent(){
        dispatch('message', {
            text: 'I am a dispatched Event, can you see me?'
        });
    }
    
    // function myFirstEvent() {
    // 	alert('Hey, my first event!')
	// }
</script>



<!-- <button on:click={myFirstEvent}>Click Here</button> -->
<button on:click={mySecondEvent}>Click Here</button>