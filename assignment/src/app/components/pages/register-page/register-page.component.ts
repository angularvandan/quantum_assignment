import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  registerForm!: FormGroup;
  loading:boolean=false;

  constructor(private fb: FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
    if(this.userService.currentUser.token){
      this.router.navigate(['user-details']);
    }
  }

  register() {
    this.loading=true;
    if (this.registerForm.valid) {
      console.log('Registration data:', this.registerForm.value);
      this.userService.register(this.registerForm.value).subscribe((data:any)=>{
        console.log(data);
        this.loading=false;
        this.router.navigate(['user-details']);
        
      },err=>{
        this.loading=false;
      });
    }
  }
  
}

