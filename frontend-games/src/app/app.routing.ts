import { Route } from "@angular/router";
import { CategoriaComponent } from "./modules/categoria/categoria.component";
import { ListaComponent } from './modules/juegos/lista/lista.component';

export const routes: Route[] = [
    {
        path: '',
        component: CategoriaComponent
    },
    {
        path: 'juegos/:categoria',
        loadComponent:() => import('./modules/juegos/lista/lista.component')
        .then(c => c.ListaComponent)
    }

]