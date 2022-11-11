import { Injectable } from '@nestjs/common';
import { CategoriaEntity } from './categoria.entity';

@Injectable()
export class CategoriaService {

    private categorias: CategoriaEntity[] =[
        {
            id: 1,
            name: "MMORPG",
            status: "Activo",
            imgURL: "https://media.vandal.net/m/3-2022/20223269393326_1.jpg"

        },
        {
            id: 2,
            name: "Shooter",
            status: "Activo",
            imgURL: "https://as01.epimg.net/meristation/imagenes/2021/11/26/reportajes/1637951010_581176_1637951477_noticia_normal.jpg"
        },
        {
            id: 3,
            name: "PVP",
            status: "Activo",
            imgURL: "https://huelvaya.es/wp-content/uploads/2022/03/juegos-pvp.jpg"
        },
        {
            id: 4,
            name: "Racing",
            status: "Activo",
            imgURL: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/04/03/15543162237217.jpg"
        },
        {
            id: 5,
            name: "Sports",
            status: "Activo",
            imgURL: "https://cdn-3.expansion.mx/dims4/default/2ee030f/2147483647/strip/true/crop/800x450+0+0/resize/1800x1013!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fb6%2Ff4%2Fc3ca5f8e415385047e9a2c3f54bc%2F1-3.jpeg"
        },
        {
            id: 6,
            name: "Zombie",
            status: "Activo",
            imgURL: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/04/dying-light.jpg?itok=zLC0vp3d"
        },
    ];

    getCategorias(): CategoriaEntity[]{
        return this.categorias;
    }
}
