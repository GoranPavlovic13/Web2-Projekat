import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './user/register/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { RouterModule } from '@angular/router';
import { appRoutes} from './routes';

@NgModule({
  declarations: [		
    AppComponent,
      HeaderComponent,
      HomeComponent,
      RegisterComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
