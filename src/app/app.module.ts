import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {RouterModule, Routes} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { OrdersComponent } from './orders/orders.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';

const appRoutes: Routes = [{path:'myOrders', component:MyOrdersComponent},
                          {path:'orders', component:OrdersComponent},
                          {path:'',component:HomeComponent},
                          {path:'withdraw',component:WithdrawComponent},
                          ];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CategoryDialogComponent,
    MyOrdersComponent,
    OrdersComponent,
    WithdrawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    NgxPaginationModule,
    MatTabsModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes)

  ],
  entryComponents: [CategoryDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
