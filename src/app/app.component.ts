import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { CoreService } from './services/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mutualmobiletest';

  constructor(private coreService: CoreService) {
    // fromEvent(window, 'offline').subscribe(data => {
    //   console.log('offline')
    // });

    // // Add event listener offline to detect network loss.
    // window.addEventListener("offline", (e) => {
    //   console.log('offline')
    //   this.coreService.offOn.next(false);
    // });

    // // Add event listener online to detect network recovery.
    // window.addEventListener("online", (e) => {
    //   console.log('online')
    //   this.coreService.offOn.next(true);
    // });
  }


  ngOnInit(): void {


  }
}
