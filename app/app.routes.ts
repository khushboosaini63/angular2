import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloWorldComponent }   from './hello-world.component';
import { HomeComponent }   from './home/home.component';
import { NewsComponent }   from './news/news.component';
import { ContactComponent }   from './contact/contact.component';
import { AboutComponent }   from './about/about.component';

export const routes : Routes = [
    { path : '', component : HomeComponent },
    { path : 'home', component : HomeComponent },
    { path : 'news', component : NewsComponent },
    { path : 'contact', component : ContactComponent },
    { path : 'about', component : AboutComponent }
    
];

export const routing : ModuleWithProviders = RouterModule.forRoot(routes);