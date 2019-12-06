import { Component, OnInit } from '@angular/core';
import { Recurso } from './model/recurso';

/**
 * @description Clase  que contiene la informacion y los
 * metodos de los recursos adicionales para mejorar el aprendizaje
 * 
 * @author Saray Burbano
 */

@Component({
  selector: 'app-externos',
  templateUrl: './externos.component.html',
  styleUrls: ['./externos.component.css']
})
export class ExternosComponent implements OnInit {

    /** 
   *Se declaran las variables globales a 
   *utilizar sobre las listas de recursos 
   */
public name: string = 'Externos';

 recurso_1 : Recurso;
 recurso_2 : Recurso;
 recurso_3 : Recurso;
 recurso_4 : Recurso;
 recurso_5 : Recurso;
 recurso_6 : Recurso;
 recurso_7 : Recurso;
 recurso_8 : Recurso;
 recurso_9 : Recurso;
 recurso_10 : Recurso;
 recurso_11 : Recurso;
 recurso_12 : Recurso;
 recurso_13 : Recurso;
 recurso_14 : Recurso;
 recurso_15 : Recurso;



 listaRecursos: Recurso[];

  /**
   *Constructor de la Clase
   */
  constructor() { }
  /**
   * Metodo que se ejecuta cuando inicial el componente
   * y la lista de las diferentes recusos recomemdadas
   */
  ngOnInit() {
    this.recurso_1 = {
      id:1,
      nombre:"Capacitate par el empleo",
      descripcion:"una plataforma en donde encontrarás un gran número de cursos gratuitos",
      link:"https://capacitateparaelempleo.org/pages.php?r=.index&filter_areaID=8"
    };
    this.recurso_2 = {
      id:2,
      nombre:"Introducción a JAVA",
      descripcion:"Es un curso gratuito ofrecido por coursera",
      link:"Un curso gratuito ofrecido por coursera"
    };
    
    this.recurso_3 = {
      id:3,
      nombre:"Curso de HTML desde cero",
      descripcion:"las bases para un desarrollador web profesional, curso gratuito ofrecido por azul web",
      link:"https://www.azulweb.net/curso-gratuito-de-html5-desde-cero-las-bases-para-un-desarrollador-web-profesional/?utm_campaign=arteprogra&utm_medium=facebook&utm_source=septiembre2019"
    };
    this.recurso_4 = {
      id:1,
      nombre:"JSON Web Tokens: Video",
      descripcion:"Introducción Práctica con Nodejs, Mongodb y async/await, un video tutorial realizado por fazt code. ",
      link:"https://youtu.be/qckBlIfOnlA"
    };
    this.recurso_5 = {
      id:1,
      nombre:"Reconocimiento Voz en Angular: Video",
      descripcion:"Es un videotutorial realizado por Universe of developers",
      link:"https://m.youtube.com/watch?v=SGEty2QxKEc&feature=youtu.be"
    };
    this.recurso_6 = {
      id:1,
      nombre:"Aprende JavaScript en 15 Minutos: Video",
      descripcion:"Un viseo tutorial realizado por Victor Robles WEB",
      link:"https://youtu.be/Q9fwkpxr3Dw"
    };
    this.recurso_7 = {
      id:1,
      nombre:"Nigbox",
      descripcion:"Una plataforma en donde encontrarás un gran número de cursos algunos gratuitos otros pagos",
      link:"https://www.nigbox.com/cursos/"
    };
    this.recurso_8 = {
      id:1,
      nombre:"14 Diplomados De Google Con Certificado Gratis",
      descripcion:"Encontrarás cursos diplomados con certificado gratuitos",
      link:"https://www.oyejuanjo.com/2016/11/14-diplomados-google-certificado-gratis.html"
    };
    this.recurso_9 = {
      id:1,
      nombre:"Curso de Angular 7: Video",
      descripcion:"Una serie de video tutoriales realizados por CodigoInteractivo",
      link:"https://www.youtube.com/watch?v=oqPxvds16Dk&list=PLZ6WzumExa5WVS0O-oByYH9YYoRrqG8oh"
    };
    this.recurso_10 = {
      id:1,
      nombre:"Aprende a dominar Git de cero a experto!: video",
      descripcion:"Un video taller ofrecido por EDteam",
      link:"https://www.udemy.com/course/aprende-a-dominar-git-de-cero-a-experto/"
    };
    this.recurso_11 = {
      id:1,
      nombre:"Angular, el framework para dominar la web",
      descripcion:"Un video taller ofrecido por EDteam",
      link:"https://youtu.be/mbx0jWBUjFk"
    };
    this.recurso_12 = {
      id:1,
      nombre:"Gráficos y JAVA 2D",
      descripcion:"Una presentación que te ayuda a dominar los gráficos en 2D en java",
      link:"https://laurel.datsi.fi.upm.es/_media/docencia/cursos/java/java2d.pdf"
    };
    this.recurso_13 = {
      id:1,
      nombre:"Java 2D",
      descripcion:"Un libro sobre como tratar con Java figuras, imágenes y texto en dos dimensiones",
      link:"http://www.lcc.uma.es/~galvez/ftp/libros/Java2D.pdf"
    };
    this.recurso_14 = {
      id:1,
      nombre:"Currículos exploratorios TIC",
      descripcion:"Un ambiente virtual de aprendizaje con actividades en programación",
      link:"http://aprende.colombiaaprende.edu.co/sites/default/files/naspublic/curriculos_ex/n2g10_pweb1/nivel2/web1/home-web1.html"
    };
    this.recurso_15 = {
      id:1,
      nombre:"Lenguaje de expresiones regulares .NET",
      descripcion:"Encontrarás cursos diplomados con certificado gratuitos",
      link:"https://docs.microsoft.com/es-es/dotnet/standard/base-types/regular-expression-language-quick-reference"
    };
/**
 * lista contenedor de recursos
 */
    this.listaRecursos = [
      this.recurso_1,
      this.recurso_2,
      this.recurso_3,
      this.recurso_4,
      this.recurso_5,
      this.recurso_6,
      this.recurso_7,
      this.recurso_8,
      this.recurso_9,
      this.recurso_10,
      this.recurso_11,
      this.recurso_12,
      this.recurso_13,
      this.recurso_14,
      this.recurso_15
    ]
    
    
  }

}
