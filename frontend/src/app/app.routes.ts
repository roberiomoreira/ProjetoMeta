import { ListarProdutoComponent } from './components/listar-produto/listar-produto.component';
import { UserNewComponent } from './components/user-new/user-new.component';
import { LoginComponent } from './components/security/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from "@angular/router";
/*neste trecho é importado da seguinte forma:
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
Para a versão atual do angular será utilizada a importação abaixo.
*/
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AuthGuard } from './components/security/auth.guard';
import { UserListComponent } from './components/user-list/user-list.component';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';


export const ROUTES: Routes = [
    //{path : '', component : HomeComponent, canActivate: [AuthGuard]},//canAtivate só acessa se estiver autorizado
    {path : '', component : ListarProdutoComponent},
    {path: 'login', component: LoginComponent},//canAtivate só acessa se estiver autorizado
    {path: 'user-new', component: UserNewComponent, canActivate: [AuthGuard]},
    {path: 'user-new/:id', component: UserNewComponent, canActivate: [AuthGuard]},
    {path: 'user-list', component: UserListComponent, canActivate: [AuthGuard]},
    {path: 'editar-produto/:id', component: EditarProdutoComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);
