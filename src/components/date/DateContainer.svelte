<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	interface Props extends HTMLAttributes<HTMLDivElement> {
		value: number;
		label?: string;
	}
	let { value, label, ...rest }: Props = $props();
</script>

<div class="flex flex-col items-center gap-1">
	<span>{label}</span>
	<div
		class="bg-card flex aspect-square w-20 items-center justify-center rounded-lg border"
		{...rest}
	>
		<p class="p-2 text-2xl font-bold">
			{value}
		</p>
	</div>
</div>
