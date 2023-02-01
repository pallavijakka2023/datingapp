import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  model: any = {}
  /**
   *
   */
  constructor(public accountService: AccountService, private router: Router,
    private toaster: ToastrService) { 
  }

  ngOnInint(){
    
  }


  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
        this.router.navigateByUrl("/members")
      },
      error : error => {
        this.toaster.error(error.error);
      console.log(error)
      }
    })
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
