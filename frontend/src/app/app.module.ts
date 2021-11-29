import { DialogService } from './dialog.service';
import { AuthInterceptor } from './components/security/auth.interceptor';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedService } from "./services/shared.service"
//import { UserService } from './services/user.service';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/security/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './components/security/auth.guard';
import { UserNewComponent } from './components/user-new/user-new.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ListarProdutoComponent } from './components/listar-produto/listar-produto.component';
import { NovoProdutoComponent } from './components/novo-produto/novo-produto.component';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';
//import { JwtInterceptor } from './help/jwt.interceptor';
import { ErrorInterceptor } from './help/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    UserNewComponent,
    UserListComponent,
    ListarProdutoComponent,
    NovoProdutoComponent,
    EditarProdutoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routes,
    ReactiveFormsModule
  ],
  providers: [
    //UserService,
    SharedService,
    AuthGuard,
    UserNewComponent,
    DialogService,
    //{ provide : HTTP_INTERCEPTORS, useClass : JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
