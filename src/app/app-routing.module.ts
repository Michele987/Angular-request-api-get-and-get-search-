import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiphyComponent } from './giphy/giphy.component';
import { GiphyDetailComponent } from './giphy-detail/giphy-detail.component';
import { GiphySearchComponent } from './giphy-search/giphy-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"",component:GiphyComponent},

  {path:"giphy",component:GiphyComponent},

  {path:"giphy-detail/:id",component:GiphyDetailComponent},

  {path:"giphySearch",component:GiphySearchComponent},
  
  {path:"**",component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
