import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyjobComponent } from './Components/applyjob-component/applyjob.component';
import { AboutComponent } from './Components/about-component/applyjob.component';

import { TopcvComponentComponent } from './Components/topcv-component/topcv-component.component';

import { RegisterComponent } from './Components/register-component/register.component';

import { BlogComponent } from './Components/blog/blog.component';

import { BlogSingleComponent } from './Components/blog-single/blog-single.component';

import { CreateCVComponentComponent } from './Components/create-cv-component/create-cv-component.component';

import { EmployerComponent } from './Components/employer-component/employer.component';

import { ContactComponent } from './Components/contact-component/contact.component';
import { JoblistComponentComponent } from './Components/joblist-component/joblist-component.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'applyJob',
    component: ApplyjobComponent,
  },
  {
    path: 'login',
    component: LoginComponentComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'topcv',
    component: TopcvComponentComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'createCV',
    component: CreateCVComponentComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blog-single',
    component: BlogSingleComponent,
  },
  {
    path: 'joblist',
    component: JoblistComponentComponent,
  },
  {
    path: 'employer',
    component: EmployerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
