import { Controller, Get, Param } from '@nestjs/common';
import { CategoriaEntity } from './categoria.entity';
import { CategoriaService } from './categoria.service';

@Controller('categoria')
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService){}

    @Get()
    getCategorias(): CategoriaEntity[]{
        return this.categoriaService.getCategorias();
    }

    @Get(':name')
    getListaJuegos(@Param('name') name: string){
        return this.categoriaService.getListaJuegos(name);
    }
}
