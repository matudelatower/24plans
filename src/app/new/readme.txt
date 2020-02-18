Ésta interfaz corresponde a la página #10 del PDF.

Faltantes

* opción de remover imágen de l agaleria
* opción de principal para la imagen de portada


-- Para resolver los botones sobre la imagen, una posible implementación es:

HTML
<div class="item profilepic-border" align="center">
	<button class="button profilebutton icon ion-camera" ng-click="upload()"></button>
	<img class="profilepic padding-bottom" ng-src="img/ionic.png" ng-click="upload()"></img>
</div>

CSS
.profilebutton {
    z-index: 2;
    position: absolute;
    left: 22%;
    top: 8%;
    margin: auto;
}
.profilepic {
	border:1px solid #000;
	width: 65%;
	height: 65%;
}
.profilepic-border {
	position: relative;
	background: #a3a3a3;
}