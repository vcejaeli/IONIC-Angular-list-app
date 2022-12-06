import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'checklists',
    loadChildren: () => import('./home/home.module').then( (m) => m.HomePageModule)
  },
  // if path empty -> go to checklists
  {
    path: '',
    redirectTo: '/checklists',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( (m) => m.IntroPageModule)
  },
  {
    path: 'checklist',
    loadChildren: () => import('./checklist/checklist.module').then( (m) => m.ChecklistPageModule)
  },
  {
    path: 'checklists/:id',
    loadChildren: () => import('./checklist/checklist.module').then( (m) => m.ChecklistPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }