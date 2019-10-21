import { Component, OnInit } from '@angular/core';
import {Herramienta} from './model/heramienta'

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent implements OnInit {

  ide_1: Herramienta;
  ide_2: Herramienta;
  ide_3: Herramienta;
  listaIdes:Herramienta[];

  ediTCodigo_1: Herramienta;
  ediTCodigo_2: Herramienta;
  ediTCodigo_3: Herramienta;
  listaEditores:Herramienta[]

  herramineta_1: Herramienta;
  herramineta_2: Herramienta;
  herramineta_3: Herramienta;
  listaHerramientas:Herramienta[]

  constructor() { }

  ngOnInit() {
    this.ide_1= {
      id:1,
      logoUrl:'../../../assets/logos/ides/Eclipse.png',
      nombre:'Eclipse',
      descripcion:'Es uno de los entornos más conocidos y utilizados por los programadores, ya que se trata de un entorno de programación de código abierto y multiplataforma.',
      link:'https://www.eclipse.org/downloads/packages/'
    }
    this.ide_2= {
      id:2,
      logoUrl:'../../../assets/logos/ides/visulaEstudio.png',
      nombre:'Visual Studio',
      descripcion:"Fue diseñado por Microsoft y es uno de los mejores entornos de programación que existe.IDE completo para programar, depurar, probar e implementar soluciones en cualquier plataforma",
      link:'https://visualstudio.microsoft.com/es/?rr=https%3A%2F%2Fwww.google.com%2F'
    }
    this.ide_3= {
      id:3,
      logoUrl:'../../../assets/logos/ides/jetBrains.png',
      nombre:'IDEA',
      descripcion:'Esta específicamente diseñado para maximizar la productividad del desarrollador. El potente análisis de código estático y el diseño ergonómico hacen que el desarrollo no solo sea productivo sino también una experiencia agradable',
      link:"https://www.jetbrains.com/"
    }
     this.listaIdes=[
       this.ide_1,
       this.ide_2,
       this.ide_3,

     ]
    this.ediTCodigo_1= {
      id:1,
      logoUrl:"../../../assets/logos/editoresCodi/atom.png",
      nombre:"Atom",
      descripcion:"Atom es un editor de código de fuente de código abierto para macOS, Linux, y Windows​ con soporte para múltiples plug-in escritos en Node.js y control de versiones Git integrado, desarrollado por GitHub.",
      link:"https://atom.io/"
    }


    this.ediTCodigo_2= {
      id:2,
      logoUrl:"../../../assets/logos/editoresCodi/vscode.png",
      nombre:"Visual Studio Code",
      descripcion:"Visual Studio Code es un editor de código fuente ligero pero potente que se ejecuta en el escritorio y está disponible para Windows, Mac y Linux.",
      link:"https://code.visualstudio.com/"
    }

    this.ediTCodigo_3= {
      id:3,
      logoUrl:"../../../assets/logos/editoresCodi/coda2.png",
      nombre:"Coda2",
      descripcion:"Es un gran editor de texto rápido, limpio y potente. Vista previa perfecta de píxeles. Una forma integrada de abrir y administrar sus archivos locales y remotos. Y tal vez una pizca de SSH. Saluda, Coda para Mac",
      link:"https://panic.com/coda/"
    }
    this.listaEditores=[
      this.ediTCodigo_1,
      this.ediTCodigo_2,
      this.ediTCodigo_3,

    ]



    this.herramineta_1= {
      id:1,
      logoUrl:"../../../assets/logos/herraminetas/nodejs.png",
      nombre:"Node js",
      descripcion:"Es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Multiplataforma, de código abierto",
      link:"https://nodejs.org/es/"
    }
    this.herramineta_2= {
      id:2,
      logoUrl:"../../../assets/logos/herraminetas/typeScript.png",
      nombre:"TypeScript",
      descripcion:"Es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases.",
      link:"https://www.typescriptlang.org/"
    }
    this.herramineta_3 = {
      id:3,
      logoUrl:"../../../assets/logos/herraminetas/xamp.png",
      nombre:"XAMPP",
      descripcion:"Es una distribución de Apache completamente gratuita y fácil de instalar que contiene MariaDB, PHP y Perl. El paquete de instalación de XAMPP ha sido diseñado para ser increíblemente fácil de instalar y usar.",
      link:"https://www.apachefriends.org/es/index.html"
    }
    this.listaHerramientas=[
      this.herramineta_1,
      this.herramineta_2,
      this.herramineta_3,

    ]
  }


}
