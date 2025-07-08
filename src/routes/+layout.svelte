<!-- <script>
	import '../app.css';
	
	let { children } = $props();
	</script>
	
	{@render children()} -->

<script>
  import "../app.css";
  import Sidebar from "$components/Sidebar.svelte";
</script>

<main class="min-h-screen bg-gray-50 text-gray-800">
  <Sidebar>
    <slot />
  </Sidebar>
</main>
