import { Injectable } from '@nestjs/common';
import { CategoriaEntity } from './categoria.entity';

@Injectable()
export class CategoriaService {

    private categorias: CategoriaEntity[] =[
        {
            id: 1,
            name: "MMORPG",
            status: "Activo"
        },
        {
            id: 2,
            name: "Shooter",
            status: "Activo"
        },
        {
            id: 3,
            name: "PVP",
            status: "Activo"
        },
        {
            id: 4,
            name: "Racing",
            status: "Activo"
        },
        {
            id: 5,
            name: "Sports",
            status: "Activo"
        },
        {
            id: 6,
            name: "Zombie",
            status: "Activo"
        },
    ];

    getCategorias(): CategoriaEntity[]{
        return this.categorias;
    }
}
