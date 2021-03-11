import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { apiUrls } from '@app/shared/constants/apiUrls';
import { RequestService } from '@app/shared/services/request.service';
import { environment } from '@env/environment';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { SongModel } from './song-listing.model';

@Component({
  selector: 'app-song-listing',
  templateUrl: './song-listing.component.html',
  styleUrls: ['./song-listing.component.scss']
})
export class SongListingComponent implements OnInit {
  // selection = new SelectionModel<any>(true, []);
	dataSource: MatTableDataSource<SongModel>;
  totalCount: number = 0;
	pageIndex = 0;
	pageSize = 10;
  searchKey:string = '';
  songList : any;
  songListData : any; 
  universityListData :any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild('searchInput', { static: true }) searchInput: ElementRef;

  constructor(private requestService:RequestService,
    private _cdr : ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getSongList(true)
    this.searchFilter()
    this.getUniverityList()
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
   * Gets song list
   * @param resiterpagination 
   */
  getSongList(resiterpagination:boolean): void {
    
    let url : string = environment.baseUrl + apiUrls.getSongList;
    let params : any = {
      page : this.pageIndex,
      pageSize : this.pageSize,
      name : this.searchKey
    }
    console.log("params are:", params)
this.requestService.get(url , params).subscribe((res:any)=>{
  if(res.status_code == 200 ){
    this.totalCount = res.data.count;
    this.songListData = res.data.rows;
    this.paginator = new MatPaginator(this.paginator._intl, this._cdr)
    this.setDataSource(this.songListData, resiterpagination);
    

    // console.log("Data source:", this.dataSource);
  }
},(err)=>{
console.log("ERror is:", err)
})
  }


  /**
   * Searchs filter
   */
  searchFilter(){
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
			map((event: any) => {
				if (this.searchInput.nativeElement.value.trim() === '') {
					this.searchKey = '';
					// this.selection.clear();
					this.getSongList(true);
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
			this.getSongList(true)
		});
  }


 
 

 

 


  setDataSource(userData:any, resiterpagination:boolean){
    this.songListData = this.fillUser(userData);
		this.dataSource = new MatTableDataSource<SongModel>(this.songListData);
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
		this.getSongList(false);
	}

}
