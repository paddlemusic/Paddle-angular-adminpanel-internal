import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from "@angular/cdk/collections";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, finalize, map } from 'rxjs/operators';
import { RequestService } from '@app/shared/services/request.service';
import { apiUrls } from '@app/shared/constants/apiUrls';
import { environment } from '@env/environment';
import { UserModel } from './models/user.model';

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
  userList : any;
  userListData : any;

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild('searchInput', { static: true }) searchInput: ElementRef;
 

  constructor(private requestService : RequestService,
    public _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
   
    this.getUserList(true)
    this.searchFilter();
  }

 

  getUserList(resiterpagination:boolean): void {
    
    let url : string = environment.baseUrl + apiUrls.userProfile;
    let params : any = {
      page : this.pageIndex,
      pageSize : this.pageSize,
      name : this.searchKey
    }
    console.log("params are:", params)
this.requestService.get(url , params).subscribe((res:any)=>{
  if(res.status_code == 200 ){
    this.totalCount = res.data.count;
    this.userListData = res.data.rows;
    this.paginator = new MatPaginator(this.paginator._intl, this._cdr)
    this.setDataSource(this.userListData, resiterpagination);
    
    // this.dataSource.paginator = this.paginator;

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


 
  changeUserStatus(is_active:any) {
    console.log("shdgsh", this.selection.selected.length)
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
