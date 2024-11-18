import { DEBT } from '@/constants/debt';
import { currentTime } from '@/stores/times';
import { writable, type Writable } from 'svelte/store';

class Debt {
	public seconds = writable(0);
	public minutes = writable(0);
	public hours = writable(0);
	public days = writable(0);
	// debt
	public mount: number = DEBT.mount;
	public cash: number = DEBT.cash;
	public interest = writable(0);
	//
	private unsuscribeTime: () => void;
	constructor() {
		this.unsuscribeTime = () => {};
	}
	private GetInterest(days: number) {
		const valueTax = this.mount * DEBT.interest;
		return valueTax * days;
	}
	private updateTracking(d: Date) {
		const initDate = new Date(2024, 10, 20, 0, 0, 0);
		const difference = d.getTime() - initDate.getTime();
		const totalSeconds = difference / 1000;
		const days = Math.floor(totalSeconds / (60 * 60 * 24));
		this.seconds.set(d.getSeconds());
		this.minutes.set(d.getMinutes());
		this.hours.set(d.getHours());
		this.days.set(days);
		//debt
		this.interest.set(this.GetInterest(days > 0 ? days : 0));
	}
	public startTracking(): void {
		this.unsuscribeTime = currentTime.subscribe((d) => {
			this.updateTracking(d);
		});
	}
}
export const time = new Debt();
