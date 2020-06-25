import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef
} from '@angular/core';
import {IconName} from '../icon/iconType';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() page: number;
  @Input() maxPage: number;

  pages: number[];
  leftIcon: IconName = IconName.chevronLeft;
  rightIcon: IconName = IconName.chevronRight;
  dots = IconName.dots;
  @Output() onPageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(private cd: ChangeDetectorRef) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('maxPage' in changes) {
      this.getPages()
    }
  }


  ngOnInit(): void {
    this.getPages()
  }

  onPageClick(page: number) {
    if (page > 0) {
      console.log(page)
      this.page = page;
      console.log(this.page)
      this.getPages()
      this.onPageChange.emit(page);
    }
  }


  getPages(): void {
    if (this.page < 1) this.page = 1;
    if (this.page > this.maxPage) this.page = this.maxPage;

    let arr = [1, this.page - 1, this.page, this.page + 1, this.maxPage];

    if (this.page === 1)
      arr.push(3);
    if (this.page === this.maxPage)
      arr.push(this.maxPage - 2);


    arr = arr.filter((element, index, arr) => {
      return element > 0 && arr.indexOf(element) === index && element <= this.maxPage
    })

    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] + 2 < arr[i + 1]) {
        arr.splice(i + 1, 0, 0)
        i++
      } else if (arr[i] + 2 === arr[i + 1]) {
        arr.splice(i + 1, 0, arr[i] + 1)
        i++
      }
    }

    this.pages = arr;
    this.cd.detectChanges();
  }

}
