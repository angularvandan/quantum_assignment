import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm!: FormGroup;
  loading:boolean=false;

  constructor(private fb: FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    if(this.userService.currentUser.token){
      this.router.navigate(['user-details']);
    }
  }

  login() {
    this.loading=true;
    if (this.loginForm.valid) {
      // Here, you can implement the login logic, such as sending the data to a server.
      console.log('Login data:', this.loginForm.value);
      this.userService.login(this.loginForm.value).subscribe((data:any)=>{
        console.log(data);
        this.loading=false;
        this.router.navigate(['user-details']);
      },err=>{
        this.loading=false;
      });

    } else {
      // Mark all fields as touched to display validation messages
    }
  }
}
