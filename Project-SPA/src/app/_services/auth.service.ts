import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

baseUrl = 'http://localhost:5000/api/auth/';
constructor(private http: HttpClient, private fb: FormBuilder) { }

formModel = this.fb.group({
  FirstName : ['', Validators.required],
  LastName : ['', Validators.required],
  Password : ['', Validators.required],
  confirmPassword : ['', Validators.required],
  Email : ['', [Validators.email, Validators.required]],
  City : ['', Validators.required],
  TelephoneNumber : ['', Validators.required]
});

register(model: any){
  model = {
    firstName: this.formModel.value.FirstName,
    lastName: this.formModel.value.LastName,
    password: this.formModel.value.Password,
    confirmPassword: this.formModel.value.confirmPassword,
    email: this.formModel.value.Email,
    city: this.formModel.value.City,
    telephoneNumber: this.formModel.value.TelephoneNumber
  };
  return this.http.post(this.baseUrl + 'register', model);
}

}
