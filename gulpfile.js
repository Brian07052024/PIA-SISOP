// Importar funciones necesarias
import { src, dest, watch } from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import notify from "gulp-notify";

// Configuración de Sass
const sass = gulpSass(dartSass); // A la función de gulpSass le pasamos todas las de dartSass como parámetro

// Tarea para compilar SCSS
export function css() {
    return src("src/scss/app.scss") // Con la función src, le decimos dónde está el scss
        .pipe(sass().on("error", sass.logError)) // Le aplicamos sass con la función sass()
        .pipe(dest("build/css")) // Generamos la carpeta con el archivo final (css)
        .pipe(notify('CSS cargado')); // Notificación opcional al cargar CSS
}

// Tarea para copiar archivos JavaScript
export function javaScript() {
    return src("src/js/app.js") // Ruta de origen del archivo JS
        .pipe(dest("build/js")) // Carpeta de destino para archivos JS
        .pipe(notify('JS cargado')); // Notificación opcional al cargar JS
}

// Tarea para copiar imágenes
export function images() {
    return src("src/img/**/*") // Asegúrate de que la ruta de origen sea correcta
        .pipe(dest("build/img")) // Asegúrate de que la carpeta de destino sea 'img'
        .pipe(notify('Imagen cargada')); // Notificación opcional al cargar imágenes
}

// Activar watch
export function dev() {
    // Ejecuta las tareas al iniciar
    images(); 
    css();
    javaScript();

    // Observa cambios en los archivos
    watch("src/scss/**/*.scss", css); // Observa cambios en SCSS
    watch("src/img/**/*", images); // Observa cambios en imágenes
    watch("src/js/**/*", javaScript); // Observa cambios en archivos JavaScript
}
