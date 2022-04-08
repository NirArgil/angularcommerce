import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  formGroup = new FormGroup({
    firstName: new FormControl(undefined, [Validators.required]),
    lastName: new FormControl(undefined, [Validators.required]),
    email: new FormControl(undefined, [Validators.required]),
    textArea: new FormControl(undefined, [Validators.required]),
    // password: new FormControl(
    //   undefined,
    //   Validators.compose([Validators.required, Validators.minLength(4)])
    // ),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
