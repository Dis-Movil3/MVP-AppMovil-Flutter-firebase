# Código Fuente

---

## 1. Descripción

La carpeta src contiene el código fuente correspondiente a la solución técnica propuesta para el proyecto de aplicación móvil.

Debido a que el proyecto utiliza una arquitectura basada en Flutter + Firebase, el código backend se implementa mediante Firebase Cloud Functions, permitiendo centralizar la lógica de negocio y proporcionar servicios que pueden ser consumidos por una futura aplicación Flutter.

---

## 2. Componentes

## backend

Contiene la implementación de los servicios backend.

## functions

Contiene las Firebase Cloud Functions que exponen la lógica de negocio.

## services

Contiene funciones encargadas de interactuar con los servicios de Firebase.

## controllers

Contiene la lógica asociada a las operaciones principales de la aplicación.

## firestore

Contiene las reglas de seguridad y configuración relacionada con Cloud Firestore.

## tests

Contiene la documentación y posteriormente las pruebas automatizadas del backend.

---

## 3. Funcionalidades implementadas

El backend está preparado para gestionar:

• Registro y autenticación de usuarios.
• Consulta de información.
• Gestión básica de usuarios.
• Consulta de servicios.
• Registro de dispositivos para notificaciones.
• Envío de notificaciones push.
• Protección de datos mediante reglas de Firestore.

## Rendimiento

El tiempo de carga inicial de la aplicación deberá ser:

Menor a 1.5 segundos.

---

## 4. Tecnologías

• Node.js.
• JavaScript.
• Firebase.
• Firebase Cloud Functions.
• Cloud Firestore.
• Firebase Authentication.
• Firebase Cloud Messaging.


---

## 5. Metodología

El desarrollo sigue el enfoque de Lean Mobile Development, por lo que el backend se limita inicialmente a los servicios necesarios para validar el Producto Mínimo Viable.

Las funcionalidades podrán ampliarse después de analizar los resultados de las pruebas con usuarios.

---

## 6. Seguridad

No se deben almacenar credenciales, claves privadas, tokens ni archivos de configuración sensibles dentro del repositorio público.

Los archivos de configuración privados deberán manejarse mediante variables de entorno o mecanismos seguros proporcionados por Firebase.
