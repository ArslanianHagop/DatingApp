import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Observable, of } from "rxjs";

import { AccountService } from "../_services/account.service";
import { User } from "../_models/user";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  @ViewChild("loginForm") loginForm: NgForm | undefined;
  model: any = {};

  constructor(public accountService: AccountService,
              private router: Router,
              private toastr: ToastrService) {}

  ngOnInit(): void {

  }

  login() {
    this.accountService.login(this.model)
      .subscribe({
        next: _ => this.router.navigateByUrl("/members"),
      });

    this.loginForm?.reset();
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl("/");
  }
}
