******************************************
*Pasos para hacer proyectos con sass/scss*
*byBrianRN                               *
******************************************

-----------------------------------------------------------
ADVERTENCIA!!!!
Es necesario tener descargado NPM (node package manager)
-----------------------------------------------------------

1.-Crear carpeta "src" para recursos (imagenes, estilos, videos etc)

2.-Crear package.json (fuera de la carpeta src normalmente)
    New terminal>npm init

3.-DESCARGAR dependencias de sass
    New terminal>npm i sass

4.-INSTALAR las dependencias de sass
    New terminal>npm i -D sass

--------------------------------------------------------------------------------
ATENCION!!!
Para este punto, practicamente ya puedes usar sass para compilar y trabajar con
sass

En la carpeta src/scss creamos el archivo app.scss, ahi puedes empezar a escribir
codigo css y como ya lo mencione, compilarlo.
A continuacion seguire con los pasos para compilarlo con sass, aunque más adelante
explicaré como compilar con gulp que es lo optimo, pero es necesario seguir los pasos
para conocer y entender lo que estamos haciendo
--------------------------------------------------------------------------------

5.-En el package.json, en la seccion scripts creamos un script:
    "sass": "sass --watch src/scss:dist/css".
    Siendo:
        "sass" el nombre del script con el que se podra ejecutar la compilacion.
        El segundo sass dentro de las "" va dentro de la carpeta bin y ejecuta el script.
        "--watch" espera los cambios que haces
        "src/scss:dist/css" el src/scss es la ubicacion y dist/css es la ubicacion de guardado.

6.-Correr el script de compilacion sass y ctrl+s para mostrar los cambios
    New terminal>npm run sass 
    Siendo esto ultimo el script pasado que creamos.

--------------------------------------------------------------------------------
ATENCION!!!
Como ya mencione anteriormente, esto no es lo mas optimo para trabajar con sass
asi que vamos a utilizar gulp js que es una herramienta de automatizacion para
no hacer tantas vueltas y optimizar nuestro proyecto en cuanto a tiempos de trabajo y edicion
--------------------------------------------------------------------------------

7.-INSTALAR dependencias de gulp:
    New terminal>npm i -D gulp

8.-Crear gulpfile.js donde esta el index y el package.json (afuera pues)

9.-En el package.json creamos el script "dev":
    "dev": "gulp dev"

10.-INSTALAR dependencia gulp-sass:
    New terminal>npm i -D gulp-sass

11.-Dentro del gulpfile, importa lo necesario:
    import {src, dest, watch} from "gulp"
    import * as dartSass from "sass"
    import gulpSass from "gulp-sass"

12.-Cuerpo del gulpfile:
//aqui compilas sass, utilizando la dependencia de gulpSass
//y le decimos que la encuentra en dartSass:
const sass = gulpSass(dartSass)


export function css(done){

    src("src/scss/app.scss")
        .pipe(sass())
        .pipe(dest("dist/css"))

    done()
}

13.-Activamos el watch para que espere por cambios:
    //Activar watch
    export function dev(){          //No usamos done para que no termine y siga esperando cambios
    watch("src/scss/app.scss", css) //funcion watch, le decimos donde esta el archivo que
    //estará observando y que funcion ejecutara cuando hayan cambios
}

14.-Activamos el watch para todos los documentos scss con esta modificacion:
    watch("src/scss/**/*.scss", css)

15.-Usaremos en app.scss solamente el fordware para que se traiga todo de 
la carpeta "base" la cual contiene los _archivo.scss y asi no llenar el app.scss
de @use, @import o @fordware.

16-Mixins: Permite escribir codigo que sea re utilizado y se crea de la siguiente manera;
    utilizando @mixin nombre_del_mixin, para usarlo es @include nombre_del_mixin.

    




        