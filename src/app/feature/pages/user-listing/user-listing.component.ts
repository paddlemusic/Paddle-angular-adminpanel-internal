import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from "@angular/cdk/collections";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { RequestService } from '@app/shared/services/request.service';
import { apiUrls } from '@app/shared/constants/apiUrls';
import { environment } from '@env/environment';
import { UserModel } from './models/user.model';
import { ModalService } from '@app/shared/services/modal.service';
import { CommonService } from '@app/shared/services/common.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {
	selection = new SelectionModel<any>(true, []);
	dataSource: MatTableDataSource<UserModel>;
  totalCount: number = 0;
	pageIndex = 0;
	pageSize = 10;
  searchKey:string = '';
  searchUniKey :string = '';
  userList : any;
  universityId : any = 0;
  userListData : any;
  universityListData : string[] =[];

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild('searchInput', { static: true }) searchInput: ElementRef;
	@ViewChild('searchInputUni', { static: true }) searchInputUni: ElementRef;


  constructor(private requestService : RequestService,
    public _cdr: ChangeDetectorRef,
    private commonService : CommonService,
    private modalService : ModalService) { }

  ngOnInit(): void {
   
    this.getUserList(true)
    this.searchFilterByName();
    this.getUniverityList();
    // this.searchFilterByUniversityName();
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


  /**
   * Selects university
   */
 selectUniversity(event:any){
  // this.universityId = undefined;
   console.log("Event is:", event.target.value)
   if(event.target.value){
   this.universityId = event.target.value;
   this.getUserList(false);
  //  if(this.universityId == 0){
  //   this.getSongList(false)
  //  }else{
  //    this.getDataViaUniversity(false)
  //  }
   
   }
}
 

  getUserList(resiterpagination:boolean): void {
    
    let url : string = environment.baseUrl + apiUrls.userProfile;
    let params : any = {
      page : this.pageIndex,
      pageSize : this.pageSize,
      name : this.searchKey,
      universityId : this.universityId
    }
    console.log("params are:", params)
this.requestService.get(url , params).subscribe((res:any)=>{
  if(res.status_code == 200 ){
    this.totalCount = res.data.count;
    this.userListData = res.data.rows;
    this.paginator = new MatPaginator(this.paginator._intl, this._cdr)
    this.setDataSource(this.userListData, resiterpagination);
    

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

  searchFilterByName(){
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
			map((event: any) => {
				if (this.searchInput.nativeElement.value.trim() === '') {
					this.searchKey = '';
					this.selection.clear();
					this.getUserList(true);
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
			this.getUserList(true)
		});
  }
  // searchFilterByUniversityName(){
  //   fromEvent(this.searchInputUni.nativeElement, 'keyup').pipe(
	// 		map((event: any) => {
	// 			if (this.searchInputUni.nativeElement.value.trim() === '') {
	// 				this.searchUniKey = '';
	// 				this.selection.clear();
	// 				this.getUserList(true);
	// 			} else {
	// 				return event.target.value;
	// 			}
	// 		}),
	// 		filter(res => {
  //      console.log("filter res is:", res);
  //       return res?.length > 0 && res.trim() !== ''
  //     }),
	// 		debounceTime(300)
	// 		, distinctUntilChanged()
	// 	).subscribe((text: string) => {
	// 		this.searchUniKey = text.trim();
	// 		this.getUserList(true)
	// 	});
  // }


 
  changeUserStatus(is_active:any) {
    const ids = this.selection.selected.map((s) => s.id);
    console.log("shdgsh", ids)
     

    let url:string = environment.baseUrl + apiUrls.blockUnblock + '/'+is_active;
    let params:any = {
      ids : ids
    }
    this.requestService.post(url, params ).subscribe((res:any)=>{
      if (res.status_code == 200) {
        // this._layoutService.showActionNotification(
        //   resp.message, MessageType.Create, 3000, true, false, 3000, "bottom"
        // );
        this.modalService.showAlert({
          title: 'Success!',
          text: res.message,
          icon: 'success',
          allowOutsideClick: false
        })
        this.searchKey = '';
        this.searchInput.nativeElement.value = ''
        this.selection.clear();
        this.pageIndex = 0;
        this.getUserList(true);
      }
    })

  }

  navigate(userId:any){
    const extras = {
        queryParams: { 
          id: userId 
        } 
    }
    this.commonService.navigate('/pages/user/user-details', extras)
    // routerLink="user-details"
  }

  isAllSelected() {
    // console.log("isAllSelected", this.selection.selected.length)

		const numSelected = this.selection.selected.length;
    // console.log("source:", this.dataSource)
		const numRows = this.dataSource ? this.dataSource.data.length : 0;
		return numSelected === numRows;
	}

  masterToggle() {
    // console.log("masterToggle", this.selection.selected.length)
		if (this.isAllSelected()) {
			this.selection.clear();
		} else if (this.dataSource) {
			this.dataSource.data.forEach((row:any) => this.selection.select(row));
		}
	}
  checkboxLabel(row?: any): string {
		
		if (!row) {
			return `${this.isAllSelected() ? "select" : "deselect"} all`;
		}
		return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${
			row.userId + 1
			}`;
	}


  setDataSource(userData:any, resiterpagination:boolean){
    this.userListData = this.fillUser(userData);
		this.dataSource = new MatTableDataSource<UserModel>(this.userListData);
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
			// data.position = index + 1;
			data.phone_number = data.phone_number == null ? 'NA' : data.phone_number
				});
		}
		return userList;
	  }


  pageChange(page:any) {
		this.pageIndex = page.pageIndex;
		this.getUserList(false);
	}
}
