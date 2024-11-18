<script lang="ts">
	import DateContainer from '@/components/date/DateContainer.svelte';
	import Button from '@/components/ui/button/button.svelte';
	import Icon from '@iconify/svelte';
	import * as Card from '@/components/ui/card/index';
	import Separator from '@/components/ui/separator/separator.svelte';
	import { time } from '@/utils/main';
	const { seconds, minutes, hours, mount, cash, interest, days } = time;
	$effect(() => {
		time.startTracking();
	});
</script>

<section class="caret-destructive mb-3 rounded-lg bg-red-600 p-1 px-2">
	<h2>Inicio de aplicacion 20/11/2024</h2>
</section>
<section class="mb-3 flex gap-2">
	<DateContainer value={$days} label="Dias" />
	<DateContainer value={$hours} label="Horas" />
	<DateContainer value={$minutes} label="Minutos" />
	<DateContainer value={$seconds} label="Segundos" />
</section>
<section class="flex flex-col gap-2">
	<Card.Root>
		<Card.CardHeader>
			<Card.CardTitle>Deuda</Card.CardTitle>
		</Card.CardHeader>
		<Card.CardContent>
			<ul class="flex-col">
				<li class="flex justify-between gap-10">
					<h2>Monto de deuda:</h2>
					<span>S/.{mount}</span>
				</li>
				<li class="flex justify-between gap-10">
					<h2>Monto/copias:</h2>
					<span>S/.{cash}</span>
				</li>
				<li class="flex justify-between gap-10">
					<h2>Interes/Diario (1%):</h2>
					<span>S/.{$interest}</span>
				</li>
			</ul>
		</Card.CardContent>
		<Card.CardFooter class="flex-col">
			<Separator class="mb-2" />
			<div class="flex w-full justify-between gap-10">
				<h2>TOTAL:</h2>
				<span class="font-bold">S/.{mount + cash + $interest}</span>
			</div>
		</Card.CardFooter>
	</Card.Root>
	<Button class="w-full">Pagar</Button>
</section>
<section class="fixed right-5 top-5">
	<Button size="icon">
		<Icon icon="solar:sun-2-bold" />
	</Button>
</section>
