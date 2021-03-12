import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'all',
        loadChildren: () => import('../pages/quiz-list/quiz-list.module').then( m => m.QuizListPageModule)
      },
      {
        path: 'ranks',
        loadChildren: () => import('../pages/ranks/ranks.module').then( m => m.RanksPageModule)
      },
      {
        path: 'authentication',
        loadChildren: () => import('../pages/authentication/authentication.module').then( m => m.AuthenticationPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
