import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token;
  }
  
  logout(){
    localStorage.removeItem('token');
    console.log('Logged out');
  }

}
