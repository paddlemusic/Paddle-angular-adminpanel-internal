import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from "@angular/cdk/collections";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, finalize, map } from 'rxjs/operators';
import { RequestService } from '@app/shared/services/request.service';
import { apiUrls } from '@app/shared/constants/apiUrls';
import { environment } from '@env/environment';

import { ModalService } from '@app/shared/services/modal.service';
import { CommonService } from '@app/shared/services/common.service';
import { UniversityModel } from '../models/university.model';

@Component({
  selector: 'app-university-listing',
  templateUrl: './university-listing.component.html',
  styleUrls: ['./university-listing.component.scss']
})
export class UniversityListingComponent implements OnInit {

  selection = new SelectionModel<any>(true, []);
	dataSource: MatTableDataSource<UniversityModel>;
  totalCount: number = 0;
	pageIndex = 0;
	pageSize = 10;
  searchKey:string = '';
  universityList : any;
  universityListData : any;

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild('searchInput', { static: true }) searchInput: ElementRef;
 

  constructor(private requestService : RequestService,
    public _cdr: ChangeDetectorRef,
    private commonService : CommonService,
    private modalService : ModalService) { }

  ngOnInit(): void {
   
    this.getUniverityList(true)
    this.searchFilter();
  }

 

  getUniverityList(resiterpagination:boolean): void {
    
    let url : string = environment.baseUrl + apiUrls.getUniversity;
    let params : any = {
      page : this.pageIndex,
      pageSize : this.pageSize,
      name : this.searchKey
    }
    console.log("params are:", params)
this.requestService.get(url , params).subscribe((res:any)=>{
  if(res.status_code == 200 ){
    console.log("REspons is:", res)
    this.totalCount = res.data.count;
    this.universityListData = res.data.rows;
    this.paginator = new MatPaginator(this.paginator._intl, this._cdr)
    this.setDataSource(this.universityListData, resiterpagination);
    

    // console.log("Data source:", this.dataSource);
  }
},(err)=>{
console.log("ERror is:", err)
})
  }

 
  


  getUserSearch(resiterpagination:boolean){
    let url: string = environment.baseUrl + apiUrls.userSearch;
    let params:any = {
      page : 0,
      pageSize : 10,
      name : this.searchKey
    }
    this.requestService.get(url, params).subscribe((res:any)=>{
      console.log("response is:", res);
      this.dataSource =  res.data
    })
  }

  searchFilter(){
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
			map((event: any) => {
				if (this.searchInput.nativeElement.value.trim() === '') {
					this.searchKey = '';
					this.selection.clear();
					this.getUniverityList(true);
				} else {
					return event.target.value;
				}
			}),
			filter(res => {
       console.log("filter res is:", res);
        return res?.length > 0 && res.trim() !== ''
      }),
			debounceTime(100)
			, distinctUntilChanged()
		).subscribe((text: string) => {
			this.searchKey = text.trim();
			this.getUniverityList(true)
		});
  }


  deleteUni(row:any){
    let url = environment.baseUrl + apiUrls.deleteUniversity + '/' + row.id;

    this.requestService.delete(url , {}).subscribe((res:any)=>{
      console.log("resp is:", res)
      if(res.status_code == 200){
        this.universityListData = this.dataSource.data.filter(item => item.id !== row.id);
      this.totalCount = this.universityListData.length;
  
      this.setDataSource(this.universityListData, false);
      }

    })
  }
 
  /**
   * Activates university listing component
   * @param uniId 
   */
  activate(uniId:number | undefined ){

  }

  /**
   * Deactivates university listing component
   * @param uniId 
   */
  deactivate(uniId : number | undefined){

  }

  /**
   * Navigates university listing component
   * @param uniId 
   */
  navigate(uniId:any){
    const extras = {
        queryParams: { 
          id: uniId 
        } 
    }
    this.commonService.navigate('/pages/university/edit-university', extras)
    // routerLink="user-details"
  }

 


  


  setDataSource(userData:any, resiterpagination:boolean){
    this.universityListData = this.fillUser(userData);
		this.dataSource = new MatTableDataSource<UniversityModel>(this.universityListData);
    // this._cdr.markForCheck();
    if (resiterpagination) {
			this.dataSource.paginator = this.paginator;
			console.log("length is:",this.paginator.length);

		}
    console.log("DAtasource is:",	this.dataSource);
  }
  

  fillUser(userList:any) {
		if (userList.length > 0) {
		  userList.forEach((data:any, index:number) => {
			data.position = index + 1;
			// data.phone_number = data.phone_number == null ? 'NA' : data.phone_number
				});
		}
		return userList;
	  }


  pageChange(page:any) {
		this.pageIndex = page.pageIndex;
		this.getUniverityList(false);
	}

}
