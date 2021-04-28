import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { LinkMessages } from '../../../../../../core/messages/en.links.message';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent implements OnInit {
  public avatar: string = '';
  urlForm: FormGroup;
  formMessages = LinkMessages;
  linksArray: Array<any> = [];

  constructor(private _fb: FormBuilder) {
    const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

    this.urlForm = this._fb.group({
      urlPath: ['', [Validators.required, Validators.pattern(urlRegex)]],
      urlName: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  addItem() {
    if (this.urlForm.valid) {
      this.linksArray.push({
        url: this.urlForm.get('urlPath')?.value,
        name: this.urlForm.get('urlName')?.value,
      });
    }
  }
}
