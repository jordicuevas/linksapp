import { LinkMessages } from './../../../../../../core/messages/en.links.message';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.scss'],
})
export class LinksListComponent implements OnInit {
  @Input() links: Array<any> | undefined;

  constructor() {}
  linkmsg = LinkMessages;
  ngOnInit(): void {}

  removeItem(item: any) {
    this.links?.splice(
      this.links?.findIndex((element) => element.url === item.url),
      1
    );

    console.log(this.links);
  }
}
