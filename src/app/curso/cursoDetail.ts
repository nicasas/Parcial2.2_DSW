import { Curso } from './curso';
export class CursoDetail extends Curso{
    constructor( id: number, title: string, platform: string, launch_year: number, offers_certificate: boolean, description: string, image: string, duration_hours: number, public rating: number, public url: string, public price: number, public level: string, public language: string){
        super(id, title, platform, launch_year, offers_certificate, description, image, duration_hours);
    }
}
