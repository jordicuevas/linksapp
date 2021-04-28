import { LinkMessages } from './../../../../../../core/messages/en.links.message';
import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.scss'],
})
export class LinksListComponent implements OnInit {
  @Input() links: Array<any> | undefined;

  constructor(private toastr: ToastrService) {}
  linkmsg = LinkMessages;
  ngOnInit(): void {}

  removeItem(item: any) {
    this.links?.splice(
      this.links?.findIndex((element) => element.url === item.url),
      1
    );
    this.toastr.success(this.linkmsg.linkremoved);
  }
}
