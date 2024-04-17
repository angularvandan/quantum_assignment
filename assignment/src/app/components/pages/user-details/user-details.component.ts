import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  userData:any[]=[
    {name:'vanddan',date:'06/05/1999',role:'Admin',status:'Active'},
    {name:'chandan',date:'08/04/1998',role:'Publisher',status:'In Active'},
    {name:'ayush',date:'01/07/1999',role:'Admin',status:'Active'},
    {name:'anurag',date:'07/03/1999',role:'Regiwer',status:'Active'},
    {name:'aniket',date:'04/09/1999',role:'Admin',status:'Active'},
  ];
  constructor(private userService:UserService){
    
  }
  onLogout(){
    this.userService.logOut();
  }

}
