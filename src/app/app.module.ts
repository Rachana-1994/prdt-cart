import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { IndexComponent } from './index/index.component';
import { CartComponent } from './cart/cart.component';
import { routing } from './app-routing.module';
import { ProductService } from './product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    IndexComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    routing
   
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
