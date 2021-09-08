#  Creando un formulario simple e interactivo 🍋
![Texto de encabezado](https://res.cloudinary.com/www-ismyt-com/image/upload/v1628822848/IMAGENES/GITHUB/header-jordan-animation_c1is5k.svg)
<br>

Una de las principales razones por las cuales te dedicas a ***desarrollar software*** es la mejora constante de tu potencial como programador, quiero que estos post sirvan de ejemplo de la evolución que puedes lograr desarrollando el habito de enfocarte y programar cada día a un nivel que supere tu nivel anterior.
<br>
<br>

## Inspiración
Este proyecto fue creado con la finalidad de promover mi capacidad de desarrollo a nivel CSS/HTML/JS a un nivel muy básico, dentro del mismo intentó representar la forma más simple de emplear algunas pequeñas interacciones solo reutilizando las funciones que se encargan de las diferentes validaciones de los datos dentro del formulario.

![Imagen de referencia](https://res.cloudinary.com/www-ismyt-com/image/upload/v1631081457/IMAGENES/GITHUB/FORM/screen-form-design-base_dumqqz.png)


## El diseño

![Diseño de formulario web](https://res.cloudinary.com/www-ismyt-com/image/upload/v1631080907/IMAGENES/GITHUB/FORM/screen-form-design_s7c60t.png)

Bien, como parte importante del trabajo la inspiración de las diferentes imágenes está basada en la siguiente imagen original y el concepto de un formulario desarrollado para el concepto de barbería o cualquier otro tipo de proyecto pero variando la imagen de vector gráfico principal (SVG) construido con figma sin utilizar una herramienta profesional de diseño gráfico.

Las interacciones y el resto de archivos también están construidos en forma solo exportado a CSS con el objetivo de lograr una mejor adaptación del diseño para asegurar una compatibilidad con el resto de dispositivos.

<br>
<br>

## El tecnicismo
Ahora lo importante, destacamos lo más importante el truco CSS y JS para lograr las pequeñas interacciones.

Basándose en un diseño por componentes, está estructurado para que sea escalable lo que permite utilizar un elemento de tipo:

![Diseño de input](https://res.cloudinary.com/www-ismyt-com/image/upload/v1631081120/IMAGENES/GITHUB/FORM/screen-form-design-input_pzxo4e.png)

``` html
<div class="inputApellido">
    <input
    type="text"
    name="lastName"
    placeholder="Introducir apellido..."
    id="apellido"
    />
    <span data-animacion="true" class="spanApellido inputs"></span>
</div>

```

Para poder utilizar la gran funcionalidad llamada:
***Display grid*** que nos permite ser tan capaces y arquitectónicos como el mismo Bootstrap con un pequeño adhesivo de complejidad.

``` css
form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(calc(1fr * 7));
    grid-column-gap: 50px;
    grid-row-gap: 30px;
    padding: 0px 70px;
}

```

En todo caso, veamos algo del código JS donde principalmente seleccionas los elementos que estarás evaluando de forma completamente manual.

``` javascript
function validacionCelular() {
    var textVal = celular.value;
    vacio(textVal);
    if (textVal.length > 7) {
        spanCelular.dataset.animacion = "false";
        svgCelular.style.fill = "black";

    } else {
        spanCelular.dataset.animacion = "true"
        svgCelular.style.fill = "none";

    }
}

```
Con el paso de los años puedes simplemente definir una objeto a través de la información que extraes del form para validar si existe algún campo vacío o para detectar el input en actividad, sin embargo no es lo que necesitamos, son pocos campos y simplemente no representa una ganancia en rendimiento de miles de bytes por lo tanto no invierto tiempo en esto (pero como reto, intentalo).

¡Okay!, prestemos atención al evento de escucha cuando un elemento esté en modo enfoque (que estés dentro del elemento con el fin de hacer algo)

Ahora este otro, que es básicamente un evento que detecta cuando la tecla está presionada, ojo con este evento puede que si el usuario solo presiona y mantiene presionada la tecla te genere datos estúpidamente sucios para joderte (generalmente se trata de algún dev pendejo que no tiene nada que hacer), puedes hacerlo más eficiente con un simple change o un simple input que son eventos maravillosos a la hora de hacer validaciones.

![Validacion de estado de input](https://res.cloudinary.com/www-ismyt-com/image/upload/v1631081216/IMAGENES/GITHUB/FORM/screen-form-design-words_pwbrz2.png)

```js
//animadores y validadores
nombre.addEventListener("keyup", validacionNombre);
apellido.addEventListener("keyup", validacionApellido);
correo.addEventListener("keyup", validacionCorreo);
celular.addEventListener("keyup", validacionCelular);
mensaje.addEventListener("keyup", validacionMensaje);

```

En la parte de refactorización simplemente tengo la misma función que hace visible o invisible la animación de “esta activo y escribiendo” lo cual ahora me parece bastante asqueroso pero así lo hacía antes de dominar al 100% el uso de this, o cualquier otro evento.

``` js
// Código que requiere factorización
function interactionCorreo() {
    spanCorreo.style.visibility = "visible"; +
    validacionCorreo();
    test = this.id;
}

function interactionCelular() {
    spanCelular.style.visibility = "visible";
    validacionCelular();
    test = this.id;
}

function interactionMensaje() {
    spanMensaje.style.visibility = "visible";
    validacionMensaje();
    test = this.id;
}
```

Aquí viene una pequeña lógica de validación, esta validación simplemente es simple no requeriría un If/Else porque seguramente con un operador ternario podría solventar esto, sin embargo me gustan los If ya que aunque no es seguro que los recuerde en 3 meses si tengo agregar algún módulo o funcionalidad integrado con el form no tendré ni puta idea de que hacía este formulario con ese operador ternario (después de tu primer proyecto empresarial sabes que esto es una maldición de código de la que no te librarás.

En fin, espero que tengas una idea básica de cómo construir validaciones con JS e interacciones que se alimentan de esa validación.


Este es mi correo profesional ***jose@joseamaya.tech***, si me escribes te aseguro que tendrás una respuesta.

Atentamente, 

<br>

![Perfil](https://res.cloudinary.com/www-ismyt-com/image/upload/v1628821040/IMAGENES/GITHUB/profile_qcrojr.png)<br>
<strong style="color:#4E54FF;">José A. Amaya</strong>


<br>
<br>

[Link al repo](https://github.com/syntaxter/web-form-validation)
<br>

[Link a la demo](https://syntaxter.github.io/web-form-validation/)
<br>

[Siguemente en las redes como @syntaxter](https://www.instagram.com/syntaxter/)



