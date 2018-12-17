This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Guia de deploy en GitHub Page

1.- Instalar el paquete necesario

`npm install gh-pages --save-dev`

2.- Agregar una propiedad en el package.json, despues de la propiedad `private`

   `http://{username}.github.io/{repo-name}`
   
    donde {username} es nuestro usuario de github, y {repo-name} es el nombre
    de nuestro repositorio.
   
    Ejemplo: "homepage": "https://lrlucas.github.io/routingreact"
   
3.- Agregar 2 scrips al package.json

    "scripts": {  
      //...  
      "predeploy": "npm run build",  
      "deploy": "gh-pages -d build"  
    }
    
4.- Modificar el Router de nuestra aplicacion especificamente la etiqueta
`BrowserRouter` y agregarle la propiedad `basename="/{repo-name}/"` donde `{repo-name}` es el nombre de nuestra rama,
la propiedad `basename` recibe como parametro el subdominio donde va a estar alojado el router de una aplicacion
y como github page trabaja con subdominios esto hara que cada ves que despleguemos
una pagina usando este hosting github page, tomara el nombre de nuestro repositorio como nombre para el subdominio donde desplegara nuestra aplicacion

Ejemplo de como debe quedar la propiedad
 
    <BrowserRouter basename="/routingreact/">
    //... resto del codigo
    </BrowserRouter>
    
Mas informacion sobre la propiedad `basename` en el siguiente link [react-router-api](https://reacttraining.com/react-router/web/api/BrowserRouter/basename-string)
    
4.- Compilar la aplicacion de React

    Ejecutar el siguiente comando `npm run deploy`


5.- Hacer un commit de los ultimos cambios realizados

    git add .
    git commit -m "Create a React app and publish it to GitHub Pages" 
    git push origin master
    
6.- Una ves subidos los ultimos cambios al repositorio y despues de haber compilado, ir al repositorio en github
notaran que tiene una nueva rama creada, esa rama la creo el paquete de gh-page donde estan los archivos compilados de nuestro proyecto,
ahora el siguiente paso es ir a las configuracion de nuestro proyecto,
en el apartado de settings hacemos scroll esta encontrar la seccion de GitHub Pages
ahi tenemos que elegir el source de nuestra aplicacion para termine el proceso de deploy,
seleccionamos `gh-pages branch` y damos click en save.  
Con eso se habilitara la url de nuestro proyecto
una url que nosotros podemos compartir con nuestros amigos 


Para mas informacion sobre el paquete `gh-pages` visitar [info](https://github.com/gitname/react-gh-pages)