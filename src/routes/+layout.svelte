<script lang="ts">
	import '@/styles/app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Deuda</title>
</svelte:head>
<main class="flex min-h-screen w-full flex-col items-center justify-center">
	{@render children()}
</main>
