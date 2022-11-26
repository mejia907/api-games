import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'platform',
    standalone: true
})

/**
 * Permite retornar la URL de la plataforma de cada videojuego
 */
export class PlatformPipe implements PipeTransform{
    transform(values: string) {
        let img: string[] = [];
        let src: string = '';

        for(const value of values.split(',')){
            if(value.trim()=='PC (Windows)'){
                src =  '/assets/images/windows.png';
            }
            if(value.trim()=='Web Browser'){
                src = '/assets/images/browser.png';
            }
            img = [...img, src];
        }
        
        return img;
    }

}