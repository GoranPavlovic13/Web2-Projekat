import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  model: any = {};
  submitted = false;
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.submitted = true;
    if (this.authService.formModel.invalid){
      return;
    }
    this.authService.register(this.model).subscribe(() => {
      // console.log('Registration Successfull');
      alert('Registration Successfull');
    }, error => {
      console.log(error);
    });
  }

  get fval(){
    return this.authService.formModel.controls;
  }

  cancel(){
    console.log('cancelled');
  }

}
