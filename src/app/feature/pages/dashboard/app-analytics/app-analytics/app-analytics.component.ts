import { Component, OnInit } from "@angular/core";
import { apiUrls } from "@app/shared/constants/apiUrls";
import { RequestService } from "@app/shared/services/request.service";
import { environment } from "@env/environment";


@Component({
  selector: 'app-app-analytics',
  templateUrl: './app-analytics.component.html',
  styleUrls: ['./app-analytics.component.scss']
})
export class AppAnalyticsComponent implements OnInit {
  searchKey : string = '';
  universityListData :any;
  constructor(private requestService : RequestService) { }

  ngOnInit(): void {
    this.getUniverityList();
  }

    /**
   * Gets univerity list
   */
     getUniverityList(): void {

      let url: string = environment.baseUrl + apiUrls.getUniversities;
      let params: any = {
        name: this.searchKey
      }
      console.log("params are:", params)
      this.requestService.get(url, params).subscribe((res: any) => {
        if (res.status_code == 200) {
          console.log("REspons is:", res)
          this.universityListData = res.data.rows;
          console.log("Data source:", this.universityListData);
        }
      }, (err) => {
        console.log("ERror is:", err)
      })
    }

 
}
