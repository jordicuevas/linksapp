import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../../../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public avatar: string = '';
  userprofile: any = '';
  constructor() {}

  ngOnInit(): void {
    this.avatar = `${environment.imageSrc}avatar-app.png`;
    this.userprofile = JSON.parse(localStorage.getItem('userprofile')!);
    console.log(this.userprofile.fullname);
  }
}
