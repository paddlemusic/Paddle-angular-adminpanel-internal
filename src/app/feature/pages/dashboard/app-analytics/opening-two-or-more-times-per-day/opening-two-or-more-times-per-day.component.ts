import { ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';
import { apiUrls } from '@app/shared/constants/apiUrls';
import { MEDIATYPES, MEDIA_TYPES, MONTH, MONTHS, YEARS } from '@app/shared/constants/common';
import { RequestService } from '@app/shared/services/request.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-opening-two-or-more-times-per-day',
  templateUrl: './opening-two-or-more-times-per-day.component.html',
  styleUrls: ['./opening-two-or-more-times-per-day.component.scss']
})
export class OpeningTwoOrMoreTimesPerDayComponent implements OnInit, OnChanges {

  @Input('universityListData') universityListData:any;



  searchKey: string = '';
  typeId:any = 2;
  universityId :any = 0;
  mediaTypeId : any = 1;
  year:any;
  monthId :any;

  // universityListData: any = [];
  MEDIA_TYPES:MEDIATYPES[] = MEDIA_TYPES;
  MONTHS : MONTH[] = MONTHS;
  YEARS = YEARS;

  // totalAppData:any;
  // monthAppData :any;
  appData1:any
  appData2:any
  appData3:any;

  // streamData : any;
  // dataSource: MatTableDataSource<StreamModel>;

  constructor(private requestService: RequestService,
    public _cdr: ChangeDetectorRef) { }

    ngOnChanges(){
      this.universityListData = this.universityListData;
      console.log("chnages calls:", this.universityListData)
     }
  ngOnInit(): void {
    this.monthId = this.getDate().month + 1;
    this.year = this.getDate().year;
    this.getMonthlyAppOpening2OrMoreTimesPerDayData(true);
    this.getMonthlyAppOpeningAtLeastOnceDayData(true)
    this.getWeeklyAppOpenData(true);
  }



 
 /**
  * Gets monthly app opening2 or more times per day data
  * @param resiterpagination 
  */
 getMonthlyAppOpening2OrMoreTimesPerDayData(resiterpagination:boolean){
  let params = {
    // page : this.pageIndex,
    // pageSize : this.pageSize,
    university_id : this.universityId,
    month : this.monthId,
    // media_type : 1, // song
    year : this.year,
    open_time : 2, 

  }
    let url:string = environment.baseUrl + apiUrls.getAppOpenData
  this.requestService.get(url , params).subscribe((res:any)=>{
    if(res.status_code == 200 ){
      console.log("REspons is:", res)
      // this.totalCount = res.data.count;
      this.appData1 = res.data;
      // this.paginator = new MatPaginator(this.paginator._intl, this._cdr)
      // this.setDataSource(this.monthAppData, resiterpagination);
      
  
      // console.log("Data source:", this.dataSource);
    }
  },(err)=>{
    console.log("Error is:", err);
  })
  
  }
   /**
  * Gets monthly app opening2 or more times per day data
  * @param resiterpagination 
  */
  getWeeklyAppOpenData(resiterpagination:boolean){
  let params = {
    university_id : this.universityId,
    month : this.monthId,
    year : this.year,
  }
    let url:string = environment.baseUrl + apiUrls.getWeeklyAppOpenData
  this.requestService.get(url , params).subscribe((res:any)=>{
    if(res.status_code == 200 ){
      console.log("REspons is:", res)
      this.appData3 = res.data;
      
    }
  },(err)=>{
    console.log("Error is:", err);
  })
  
  }




  /**
  * Gets monthly app opening2 or more times per day data
  * @param resiterpagination 
  */
 getMonthlyAppOpeningAtLeastOnceDayData(resiterpagination:boolean){
  let params = {
    // page : this.pageIndex,
    // pageSize : this.pageSize,
    university_id : this.universityId,
    month : this.monthId,
    // media_type : 1, // song
    year : this.year,
    open_time : 1, 

  }
    let url:string = environment.baseUrl + apiUrls.getAppOpenData
  this.requestService.get(url , params).subscribe((res:any)=>{
    if(res.status_code == 200 ){
      console.log("REspons is:", res)
      // this.totalCount = res.data.count;
      this.appData2 = res.data;
      // this.paginator = new MatPaginator(this.paginator._intl, this._cdr)
      // this.setDataSource(this.monthAppData, resiterpagination);
      
  
      // console.log("Data source:", this.dataSource);
    }
  },(err)=>{
    console.log("Error is:", err);
  })
  
  }

 


 

  /**
   * Selects university
   */
  selectUniversity(event:any){
    this.universityId = undefined;
     console.log("Event is:", event.target.value)
     if(event.target.value){
     this.universityId = event.target.value
     }
  }


  getFilterData(){
      this.getMonthlyAppOpening2OrMoreTimesPerDayData(false);
      this.getMonthlyAppOpeningAtLeastOnceDayData(false);
      this.getWeeklyAppOpenData(false);    
    }
    
  
  




 /**
  * Selects year
  * @param event 
  */
 selectYear(event:any){
  //  this.year = undefined;
  console.log("Event is:", event.target.value)
  if(event.target.value){
  this.year = event.target.value
  }
}

selectMonth(event:any){
  // this.monthId = undefined;
 console.log("Event is:", event.target.value)
 if(event.target.value){
 this.monthId = event.target.value
 }
}





/**
 * Gets date
 * @returns  
 */
getDate(){
 let today =  new Date();
 let month = today.getMonth();
 let year = today.getFullYear();
 return {
   month : month,
   year : year
 }
}

/**
 * Pages change
 * @param page 
 */
// pageChange(page:any) {
//   this.pageIndex = page.pageIndex;
//   this.getTotalAppData(false);
//   this.getMonthlyAppData(false);
// }





}
