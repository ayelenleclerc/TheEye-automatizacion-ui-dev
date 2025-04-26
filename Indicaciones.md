## Indicaciones


**1-** Clonar o descargar el repositorio

**2-** En caso de descargar el zip: descomprimir carpeta, abrir en el editor (Yo uso Visual Studio Code, pero funciona en cualquier editor como Cursor)

**3-** Debe estar instalado NodeJs

**4-** Abrir un nuevo Terminal, (asegurarse de estar en la carpeta /theeye-automatizacion) escribir: npm install


#### PARA CORRER LAS PRUEBAS: 
##### *npm run test*

Abre cypress de forma visual, elegir el navegador y luego el tc que se quiere correr.



##### LOS SIGUIENTES SE CORREN SOLO POR CONSOLA PERO CREA UN REPORTE

##### *npm run test-dev*

abre cypress por consola, solo se iran viendo los resultados, si pasa o no y muestra donde esta el error.

Corre las pruebas sobre el navegador Electron que es nativo de Cypress.


##### *npm run test-chrome*

igual que el anterior, pero en chrome

##### *npm run test-config*

Corre los test de la seccion de configuracion. Valida que todos los elementos existen y son funcionales.

##### *npm run test-validDoc*

corre solo los test de validaciones de documentos procesados. Valida que los elementos básicos estén. Hay que asegurarse que no hay documentos cargados.

##### *npm run test-login*

corre solo los test de login

##### *npm run test-processDoc*

corre los test case del 002 al 008 que me pasó María.

cargar documento, clasificar de forma manual, ver tabla de datos cargados, procesamiento manual, caarga de multipagina y division de paginas.


### TEST DE Regresion

Para correr los test de regresion, primero configurar desde Esquemas, el documento principal.


##### *npm run test-regresionDocumentos*

Asegurarse que Documentos procesados esté vacío

Corre el regresion test de documentos procesados

##### *npm run test-regresionLotes*

Asegurarse que Lotes esté vacío

Corre el regresion test de lotes

##### *npm run test-regresionEsquemas*

Corre el regresion test de esquemas

(crea, modifica, importa y elimina  Verificar que no borre algún esquema de más, por errores de cypress puede pasar.)

En caso de eliminar algun esquema de más, como echeq u orden de pago, en la carpeta fixtures, dentro, en la carpeta schemas estan los esquemas para importar

En caso de importar algun nuevo esquema, ir a la carpeta fixtures, dentro, ir a la carpeta schemas buscar el archivo schemasId y reemplazar los valores por

los id que figuran en la app.

**IMPORTANTE** cada vez que se corre una prueba, reescribe el reporte, y elimina los videos anteriores.

**Guardar** copia de la carpeta Reports y Videos
