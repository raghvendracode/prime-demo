import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { Routes, RouterModule } from '@angular/router';

import { MyServiceService } from './my-service.service';
import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';
import {GalleriaModule} from 'primeng/galleria';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';






import { AppComponent } from './app.component';
import { MyprimeComponent } from './myprime/myprime.component';
import { Myprime1Component } from './myprime1/myprime1.component';
import { from } from 'rxjs';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerService } from './shared/customer.service';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { BootstarppComponent } from './bootstarpp/bootstarpp.component';

const customerRoutes: Routes = [  
   
  {path: 'about', component: AboutComponent},
  {path: 'bootstarpp', component: AboutComponent}      
];

@NgModule({
  declarations: [
    AppComponent,
    MyprimeComponent,
    Myprime1Component,
    CustomerComponent,
    CustomerListComponent,
    HeaderComponent,
    AboutComponent,
    BootstarppComponent,
    
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    CardModule,
    RadioButtonModule,
    TabViewModule,
    ToolbarModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ConfirmDialogModule,
    MenubarModule,
    NgbModule,
    GalleriaModule,
   RouterModule.forRoot(customerRoutes)

   

  ],
  providers: [MyServiceService, ConfirmationService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
