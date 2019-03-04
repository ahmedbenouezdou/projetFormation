import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  favoriteSeason: string;
  profilType = [{titre: 'Entrepreneur', value: 'Entrepreneur'}, {titre: 'Investor', value: 'Investor'},
  {titre: 'Corporate', value: 'Corporate'}, {titre: 'Accelerator / Incubator', value: 'Accelerator / Incubator'},
  {titre: 'Expert', value: 'Expert'}, {titre: 'Other', value: 'Other'}];
  
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }


  public sendRequest():void{
console.log('je suis la')
  }

  goToRegistration() {
    this.router.navigate(['/subscription']);
  }
}
