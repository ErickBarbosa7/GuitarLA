# React ⚛️

## 1. ¿Qué es React?
**React** es una librería de JavaScript para crear interfaces de usuario (UI), principalmente para aplicaciones web.

Se basa en:
- Componentes reutilizables
- Actualización automática de la vista cuando cambian los datos
- Flujo de datos en una sola dirección

---

## 2. ¿Qué es un Componente?
Un **componente** es una pieza de la interfaz que puede reutilizarse.

Puede representar:
- Un botón
- Una tarjeta
- Un formulario
- Una página completa

Cada componente:
- Tiene su propio **estado**
- Puede recibir **props**
- Devuelve lo que se va a mostrar en pantalla

---

## 3. State (Estado)
El **State** es una variable especial en React que determina cómo se comporta y se renderiza un componente.  
Cuando el **State cambia**, React **actualiza la pantalla automáticamente**.

---

## 3. Props (Propiedades)
Las **Props** son como argumentos que se pasan de un componente **padre** a un componente **hijo**.

Son de **solo lectura**:  
El componente hijo **no puede modificarlas**, solo leerlas.

Se usan para:
- Reutilizar componentes
- Pasar datos
- Configurar comportamiento

---

## 3. Array `.map()`
`.map()` es un método de **JavaScript** que crea un nuevo arreglo transformando cada elemento del arreglo original.

En React, se usa principalmente para:
- Renderizar listas de componentes
- Mostrar datos dinámicos en pantalla

---

## 4. `key` (Llave única)
### ¿Qué es?
`key` es un **identificador único** que React necesita cuando renderizamos listas usando `.map()`.

### ¿Para qué sirve?
Ayuda a React a:
- Saber qué elemento **cambió**
- Cuál se **agregó**
- Cuál se **eliminó**

---

## 5. Interpolación
Las **JSX Expressions** permiten insertar variables, datos o expresiones de JavaScript dentro del JSX usando llaves `{}`.

Se usan para:
- Mostrar datos en pantalla
- Llamar variables (`{nombre}`)
- Evaluar expresiones (`{contador + 1}`)
- Acceder a props y state

Ejemplo:
```jsx
<h1>{nombre}</h1>
<p>{edad}</p>
```
## 6. Array .findIndex()
Es un método de JavaScript que devuelve el índice (posición numérica) del primer elemento de un array que cumpla una condición.

- Retorna el índice (0, 1, etc.) si el elemento ya existe.

- Retorna -1 si el elemento no existe.

Lógica implementada:

- Buscamos si la guitarra ya está en el carrito con .findIndex().

- Si existe (>= 0): Creamos una copia del carrito y aumentamos la cantidad en esa posición específica.

- Si no existe (-1): Agregamos la guitarra nueva al arreglo.

Ejemplo:
```
const itemExist = cart.findIndex(guitar => guitar.id === item.id)

if(itemExist >= 0) {
    // Existe: Aumentamos cantidad sin mutar el original directo
    const updatedCart = [...cart]
    updatedCart[itemExist].quantity++
    setCart(updatedCart)
} else {
    // No existe: Agregamos item nuevo
    item.quantity = 1
    setCart([...cart, item])
}
```

![Imfine](./public/img/imfine.jpg)
