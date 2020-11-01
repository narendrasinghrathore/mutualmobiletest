import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { APIResponseModified } from 'src/models/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean = false;

  search = '';

  data: APIResponseModified[] = [];

  get list(): APIResponseModified[] {
    return this.data.filter(item => item.name.toLowerCase().indexOf(this.search) > -1).slice();
  }

  weekNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  constructor(private coreService: CoreService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  /**
   * Http call from service to get list 
   */
  getData() {
    this.loading = true;
    this.coreService.getRestuarants().subscribe(data => {
      this.data = data.map(item => {
        return {
          name: item["Kushi Tsuru"],
          time: item["Mon-Sun 11:30 am - 9 pm"]
        } as APIResponseModified
      });
    }, error => {
      this.loading = false;
      console.log(JSON.stringify(error))
    }, () => {
      this.loading = false;
    });
  }

  /**
   * Will filter our list based on search term entered by user
   * @param event HtmlInputElement Key up event
   */
  searchList(event: Event) {
    this.search = (event.target as HTMLInputElement).value.toLowerCase() || '';
  }

}
