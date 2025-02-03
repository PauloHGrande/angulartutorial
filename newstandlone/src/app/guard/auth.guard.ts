import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let router = inject(Router);
  
  if (route.url.length > 0) {
    let menu = route.url[0].path;
  
    if(menu === 'about') {
      alert('você não tem acesso')
      router.navigate(['customer'])
      return false;
    }
  
  }
  
  return true;
};
