import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarMessages } from '../../../../../../core/messages/en.navbar.message';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public logoutTextButton: string = '';
  @Input() links: Array<any> | undefined;

  constructor(private router: Router) {
    this.logoutTextButton = NavbarMessages.logoutButtonText;
  }

  ngOnInit(): void {}
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }
}
