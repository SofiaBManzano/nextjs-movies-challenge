# Revel Challenge NextJS

Esta es la prueba técnica que he realizado para Revel .

Consiste en una aplicación de tres pantallas:

- `/`

- `/login`

- `/movie/nombre-de-pelicula`

En cada una se renderizará una pantalla diferente.

Durante la prueba me he encontrado algunos problemas con la API en cuanto a CORS, y algún permiso de algunas fotos que venían de la API. Esto último no supe solucionarlo. Tenía pendiente esconder las fotos que no llegaran pero no he podido hacerlo por falta de tiempo.

### `/login`

Os animo a meter un usuario mal. Está divertido.

### `/`

He usado una librería para el slider del hero `react-multi-carousel`, customizando los estilos para que se adapte lo máximo posible al diseño.

`/movies/nombre-de-pelicula`

Completamente en construcción. He procurado dejarlo lo mejor posible, pero soy consciente de que faltan muchas cosas.

## Ejecutar la prueba

He tenido algunos problemas con Next y TypeScript a la hora de hacer el Build de la aplicación, así que para lanzar la prueba, por favor hacedlo con `npm run dev`

Para solucionar el problema de CORS intenté añadir los headers de CORS a las peticiones pero no solucionaba el problema. El workaround que encontré es abrir el navegador en modo `disable-web-security`. Dejo la solución aquí por si sirve de ayuda:

```
For Windows:

1. Open the start menu

2. Type windows+R or open "Run"

3. Execute the following command:

chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
```

## Lessons Learnt

Esta aplicación ha sido desarrollada con _Next.js_, _Typescript_ y la librería _Styled Components_.

El número de tecnologías citadas con las que he trabajado anteriormente es un total de: **cero**.

Eso significa que ha sido un auténtico reto para mi. No del que más contenta me siento, ya que no me ha dado tiempo a acabar la prueba, pero sí con el que más he aprendido: estoy muy contenta de haber sido capaz de haber conseguido desarrollar una aplicación de la mejor manera que sabía y me encantaría terminarla cuando me desempape un poco de ella.

Me he permitido añadir algunos elementos que no estaban en la prueba que no me llevaron mucho tiempo desarrollarlos, al mismo tiempo, hay muchas otras cosas que me hubiera encantando conseguir pero literalmente, no me ha sido posible.

Gracias de nuevo por esta oportunidad porque ya me llevo algo de esta experiencia, y son las ganas de aprender **con calma y tiempo** Typescript, Nextjs y Styled Components.
