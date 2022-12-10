<script>
	import Todos from "./todos.svelte";
</script>

<h1>Todo Application, Using Svelte and Firebase</h1>
	<div class="card">
		<ol>
			<Todos />
		</ol>
	</div>

<style>
	.card {
        box-shadow: 0 4px 8px 0 #4472c4;
        transition: 0.3s;
		margin: 40px;
		padding: 20px;
		width: 55%;
        }

        .card:hover {
        box-shadow: 0 8px 16px 0 #4472c4;
        }

</style>