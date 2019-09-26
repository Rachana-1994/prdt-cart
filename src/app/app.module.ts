import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { IndexComponent } from './index/index.component';
import { CartComponent } from './cart/cart.component';
import { routing } from './app-routing.module';
import { ProductService } from './product.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MyTableComponent } from './my-table/my-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MenuComponent } from './menu/menu.component';
import { NewRegisterComponent } from './new-register/new-register.component';
import { ConfirmEqualValidatorDirective } from './shared/required-validator.directive';
import { FormsModule } from '@angular/forms';
import { MenuService } from './menu.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    IndexComponent,
    CartComponent,
    MyNavComponent,
    MyDashboardComponent,
    MyTableComponent,
    AdminLoginComponent,
    CustomerLoginComponent,
    HeaderComponent,
    LoginPageComponent,
    MenuHeaderComponent,
    MenuComponent,
    NewRegisterComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatTabsModule 
  ],
 // providers: [ProductService],
 
 exports: [RouterModule],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
