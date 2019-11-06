import { Component, OnInit } from '@angular/core';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faArtstation} from '@fortawesome/free-brands-svg-icons';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  faTwitter = faTwitter;
  faLinkedinIn = faLinkedinIn;
  faEnvelope = faEnvelope;
  faArtstation = faArtstation;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  public formFilling = true;

  hideForm(): void {
    setTimeout(function() {
        this.formFilling = false;
    }.bind(this), 6000);
   }

   checkStep(event) {
    if(event.selectedIndex == 2){
      this.hideForm();
    }
  }

}
