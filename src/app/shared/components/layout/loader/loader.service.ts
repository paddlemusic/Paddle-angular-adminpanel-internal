import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderState } from './loader.state';
@Injectable({
	providedIn: 'root'
})
export class LoaderService {
	private loaderSubject = new BehaviorSubject<LoaderState>({ show: false });
	loaderState = this.loaderSubject.asObservable();
	constructor() { }
	show() {
		console.log('showing.......');
		this.loaderSubject.next(<LoaderState>{ show: true });
	}
	hide() {
		console.log('hiding.......');

		this.loaderSubject.next(<LoaderState>{ show: false });
	}

	
}
