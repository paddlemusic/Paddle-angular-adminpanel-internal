import {  Component, Input, OnInit } from '@angular/core';
import { apiUrls } from '@app/shared/constants/apiUrls';
import { MEDIATYPES, MEDIA_TYPES, MONTH, MONTHS, YEARS } from '@app/shared/constants/common';
import { RequestService } from '@app/shared/services/request.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-app-signup',
  templateUrl: './app-signup.component.html',
  styleUrls: ['./app-signup.component.scss']
})
export class AppSignupComponent implements OnInit {

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

 
  appData:any
 

  constructor(private requestService: RequestService) { }

    ngOnChanges(){
      // this.universityListData = this.universityListData;
      console.log("chnages calls:", this.universityListData)
     }
  ngOnInit(): void {
    this.monthId = this.getDate().month + 1;
    this.year = this.getDate().year;
    this.getFilterData()
    // this.getUniverityList()
    
  }



 /**
  * Gets monthly app data
  * @param resiterpagination 
  */
 getMonthlyAppData(resiterpagination:boolean){
  let params = {
    
    university_id : this.universityId,
    month : this.monthId,
    year : this.year,
    time_span : 2, 

  }
    let url:string = environment.baseUrl + apiUrls.getSignupAnalytics
  this.requestService.get(url , params).subscribe((res:any)=>{
    if(res.status_code == 200 ){
      console.log("REspons is:", res)
      this.appData = res.data;
     
    }
  },(err)=>{
    console.log("Error is:", err);
  })
  
  }

 
   /**
    * Gets total app data
    * @param resiterpagination 
    */
   getTotalAppData(resiterpagination:boolean){
    let params = {
      university_id : this.universityId,
    time_span : 1, 

    }
      let url:string = environment.baseUrl + apiUrls.getSignupAnalytics
      this.requestService.get(url , params).subscribe((res:any)=>{
        if(res.status_code == 200 ){
          console.log("REspons is:", res)
          this.appData = res.data;
         
        }
      },(err)=>{
      console.log("ERror is:", err)
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




  /**
   * Selects type
   * @param event 
   */
  selectType(event:any){
    // this.typeId = undefined;
    if(event.target.value){
      // this.year = '';
      // this.monthId = '';
      this.typeId = event.target.value;
   
    }
    console.log("Event is:", event.target.value)
  }

  getFilterData(){
    if(this.typeId == 1){
      this.getMonthlyAppData(true);
    }
    else if(this.typeId == 2){
      this.getTotalAppData(true)
    }
  }

  /**
   * Selects media type
   * @param event 
   */
  selectMediaType(event:any){
    console.log("Event is:", event.target.value)
    if(event.target.value){
    this.mediaTypeId = event.target.value
    }
 }

 /**
  * Selects year
  * @param event 
  */
 selectYear(event:any){
  // console.log("Event is:", event.target.value)
  if(event.target.value){
  this.year = event.target.value
  }
}

selectMonth(event:any){
//  console.log("Event is:", event.target.value)
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






}
