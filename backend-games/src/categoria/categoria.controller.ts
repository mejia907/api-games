import { Controller, Get } from '@nestjs/common';
import { CategoriaEntity } from './categoria.entity';
import { CategoriaService } from './categoria.service';

@Controller('categoria')
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService){}

    @Get()
    getAll(): CategoriaEntity[]{
        return this.categoriaService.getCategorias();
    }
}
