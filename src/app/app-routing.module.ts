import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';
import { PAGE_ROUTES } from '@routes/routes';


const routes: Routes = PAGE_ROUTES

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: NoPreloading,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
