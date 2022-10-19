import { Module } from '@nestjs/common';
import { CategoriaController } from './categoria/categoria.controller';
import { CategoriaService } from './categoria/categoria.service';

@Module({
  imports: [],
  controllers: [CategoriaController],
  providers: [CategoriaService],
})
export class AppModule {}
