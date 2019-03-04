import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import { SubscriptionUser } from './subscription-user';
import { SubscriptionUserService } from './subscription-user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-subscription-user',
  templateUrl: './subscription-user.component.html',
  styleUrls: ['./subscription-user.component.scss']
})
export class SubscriptionUserComponent implements OnInit {

  regiForm: FormGroup;
  regiFormFirst:FormGroup;
  regiFormInfoPersoFrist :FormGroup;
  regiFormInfoPersoSecond :FormGroup;
  regiFormInfoPersoThird:FormGroup;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  subscriptionUserModel = new SubscriptionUser();

  step:number;
  FirstName:string='';
  LastName:string='';
  Address:string='';
  DOB:Date=null;
  Gender:string='';
  Blog:string='';
  Email:string='';
  isWomen:boolean=false;
  pwForm:string='';
  pwFormConfim:string='';
  urlTwitter:string='';
  shortBio:string='';
  Skills:string='';
  isWoman:string='';
  ask:string='';
  offer:string='';

  SkillsList: any[] = [{name:''}];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  ageRange = ['20-30', '30-40', '40-50', '>50'];
  ageControl = new FormControl('', [Validators.required]);
  Levels=['CEO','Co-founder','C-Level','VP','Director','Manager','Associate','Operator','Freelance','Other'];
  profilType = [{titre: 'Entrepreneur', value: 'Entrepreneur'}, {titre: 'Investor', value: 'Investor'},
  {titre: 'Corporate', value: 'Corporate'}, {titre: 'Accelerator / Incubator', value: 'Accelerator / Incubator'},
  {titre: 'Expert', value: 'Expert'}, {titre: 'Other', value: 'Other'}];

  constructor(private fb: FormBuilder, private subscriptionUserService: SubscriptionUserService) {
    this.step = 0;
    this.regiFormFirst = fb.group({
      'Email': [null, Validators.compose([Validators.required,Validators.email])],
      'pwForm': ['', [Validators.required, Validators.minLength(6)]],
      'pwFormConfim': ['', Validators.required]}, {
      'validator': MustMatch('pwForm', 'pwFormConfim')}
      );

    this.regiFormInfoPersoFrist = fb.group({
      'FirstName' : [null, Validators.required],
      'LastName' : [null, Validators.required],
      'ageControl': [null, Validators.required]
      });

   this.regiFormInfoPersoSecond = fb.group({
      'profilType' : [null, Validators.required],
      'levelControl' : [null, Validators.required],
      'title' : [null, Validators.required],
      'postalCode' : [null, Validators.required],
      'State' : [null, Validators.required],
      'City' : [null, Validators.required],
    });

    this.regiFormInfoPersoThird = fb.group({
      'urlTwitter' : [null, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(280)])],
      'shortBio' : [null, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(280)])],
      'Skills' : [null, null],
      'isWomen' : [null, null],
      'ask' : [null, Validators.required],
      'offer' : [null, Validators.required],

    });

  }

  ngOnInit() {
  }

  public nextStep(form: NgForm) {

    switch (this.step) {
      case 0:
          this.subscriptionUserService.postInfo(this.subscriptionUserModel)
          .pipe(first())
          .subscribe(
              data => {
                  console.log('je suis la')
              },
              error => {
               console.log('erreur');
              });
      this.step++;
      break;
      case 1:
      this.step++;

      console.log(form);

      break;
      case 2:
      this.step++;

      console.log(form);
      break;
      case 3:
      this.step++;

      console.log(form);
      break;
      case 4:

      console.log(form);
      break;
    }
  }


  // On Change event of Toggle Button
  onChange(event: any) {
    this.isWomen = event.checked;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.SkillsList.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(skills: any): void {
    const index = this.SkillsList.indexOf(skills);

    if (index >= 0) {
      this.SkillsList.splice(index, 1);
    }
  }
}


export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
