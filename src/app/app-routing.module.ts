import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { IndexComponent } from './index/index.component';
import { CartComponent } from './cart/cart.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NewRegisterComponent } from './new-register/new-register.component'; 
import { MyNavComponent } from './my-nav/my-nav.component';

const routes: Routes = [
	//{ path: '', component: ProductComponent },
	//{ path: '', redirectTo: '/customer', pathMatch: 'full' },
	{ path: 'customer', component: CustomerLoginComponent },
	{ path: 'admin', component: AdminLoginComponent },
	{ path: 'register', component: NewRegisterComponent },
	{ path: 'menu', component: MyNavComponent },
	{ path: 'products', component: ProductComponent },
	{ path: 'cart', component: CartComponent },
	{ path: '**', redirectTo: '' },

];

export const routing = RouterModule.forRoot(routes);
