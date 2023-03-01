import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlternanceComponent } from './alternance/alternance.component';
import { BuildADevComponent } from './build-a-dev/build-a-dev.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TldrComponent } from './tldr/tldr.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tldr', component: TldrComponent },
  { path: 'alternance', component: AlternanceComponent },
  { path: 'build-a-dev', component: BuildADevComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
