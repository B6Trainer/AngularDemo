import { Routes } from '@angular/router';
import { HomePage } from './module/home/home-page/home-page';
import { SongList } from './song/songlist/songlist';
import { Buildinghome } from './module/building/buildinghome/buildinghome';
import { WhoIsInTheBuildingComponent } from './module/building/who-is-in-the-building/who-is-in-the-building';
import { Pagenotfound } from './module/common/pagenotfound/pagenotfound';
import { ModernSonglist } from './song/modernsonglist/modernsonglist';
import { NewUserComponent } from './module/user/new-user-component/new-user-component';

export const routes: Routes = [

    {path: "" , component: HomePage},
    {path : "song" , component: SongList},
    {path : "modernsong" , component: ModernSonglist},
    {path : "building" , component: Buildinghome},
    {path: "whois", component: WhoIsInTheBuildingComponent},
    {path: "whois/:building", component: WhoIsInTheBuildingComponent},
    {path: "newuser", component: NewUserComponent},
    {path: "**" , component: Pagenotfound},
    
];
