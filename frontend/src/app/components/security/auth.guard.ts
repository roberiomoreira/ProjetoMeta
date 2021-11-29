import { routes } from './../../app.routes';
import { SharedService } from './../../services/shared.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

    public shared : SharedService;

    constructor(
      private router: Router,
      private authenticationService: AuthenticationService){
        //this.shared = SharedService.getInstence();
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot)/*: boolean | Observable<boolean> */{
        const currentUser = this.authenticationService.currentUserValue;
        if(currentUser) {
            return true;
        } else {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }

}
