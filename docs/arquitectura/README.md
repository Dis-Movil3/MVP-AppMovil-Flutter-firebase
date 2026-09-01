# Arquitectura de la Solución

---

## 1. Introducción

Esta carpeta contiene la documentación correspondiente a la arquitectura propuesta para la aplicación móvil multiplataforma desarrollada con Flutter y Firebase.

La arquitectura se plantea teniendo en cuenta la problemática identificada: tiempos de carga superiores a 8 segundos, interfaces no optimizadas para dispositivos móviles y ausencia de notificaciones push en tiempo real.

La solución busca proporcionar una arquitectura sencilla, escalable y orientada al desarrollo de un Producto Mínimo Viable (MVP) que pueda ser validado rápidamente con usuarios reales.

---

## 2. Objetivo de la arquitectura

Definir una arquitectura tecnológica que permita desarrollar una aplicación móvil multiplataforma para Android e iOS, utilizando Flutter como tecnología frontend y Firebase como plataforma backend, facilitando la autenticación, almacenamiento de información y envío de notificaciones en tiempo real.

La arquitectura también deberá contribuir al objetivo de alcanzar tiempos de carga inferiores a 1.5 segundos y permitir futuras mejoras a partir de los resultados obtenidos durante las iteraciones del MVP.

---

## 3. Tecnologías seleccionadas

Flutter -	Desarrollo de la aplicación móvil multiplataforma
Dart - Lenguaje de programación utilizado por Flutter
Firebase Authentication	- Gestión de autenticación de usuarios
Cloud Firestore	- Almacenamiento de información
Firebase Cloud Messaging	- Envío de notificaciones push
GitHub	- Control de versiones y documentación
Android	- Plataforma móvil objetivo

---

## 4. Capa de presentación

La aplicación será desarrollada con Flutter y contendrá las interfaces diseñadas durante la etapa UX/UI.

Esta capa será responsable de:

• Mostrar información al usuario.
• Recibir las acciones realizadas.
• Gestionar la navegación.
• Presentar mensajes y estados.
• Mostrar información obtenida desde Firebase.
• Gestionar la interacción con las notificaciones.

---

## 5. Capa de servicios

La aplicación utilizará los servicios de Firebase para proporcionar funcionalidades backend sin necesidad de construir inicialmente un servidor propio.

Los principales servicios serán:

## Firebase Authentication

Permitirá gestionar:

• Registro.
• Inicio de sesión.
• Autenticación.
• Cierre de sesión.
• Gestión básica de cuentas.

## Cloud Firestore

Será utilizado para almacenar y consultar información de la aplicación.

Su utilización permitirá centralizar los datos necesarios para el funcionamiento del MVP.

## Firebase Cloud Messaging

Será utilizado para implementar las notificaciones push.

Permitirá enviar información al usuario cuando exista algún evento o actualización relevante.

---

## 6. Rendimiento

La arquitectura considera desde su diseño el objetivo de reducir los tiempos de carga.

Se tendrán en cuenta estrategias como:

• Carga eficiente de información.
• Consultas optimizadas a Firestore.
• Reducción de recursos innecesarios.
• Optimización de imágenes.
• Uso adecuado de caché.
• Carga diferida de contenido cuando sea necesario.
• Minimización de operaciones durante el inicio de la aplicación.

El objetivo establecido es:

Tiempo de carga < 1.5 segundos.

Este valor será comprobado posteriormente mediante pruebas en dispositivos reales.

---

## 7. Seguridad

La arquitectura incorporará mecanismos básicos de seguridad mediante:

• Firebase Authentication.
• Reglas de seguridad de Firestore.
• Control de acceso a la información.
• Protección de credenciales.
• Validación de datos.
• Gestión adecuada de sesiones.

---

## 8. Escalabilidad

La arquitectura permitirá incorporar nuevas funcionalidades posteriormente sin modificar completamente la aplicación.

Entre las posibles ampliaciones se encuentran:

• Nuevos módulos.
• Nuevas notificaciones.
• Nuevos tipos de usuarios.
• Nuevos servicios.
• Nuevas consultas.
• Funcionalidades adicionales solicitadas por los usuarios.

---

## 9. Relación con Lean Mobile Development

La arquitectura se plantea inicialmente para soportar las funcionalidades esenciales del MVP.

El proceso seguirá el ciclo:

## Construir → Medir → Aprender → Mejorar.

Los resultados obtenidos durante las pruebas podrán generar modificaciones en:

• Componentes.
• Servicios.
• Flujo de información.
• Funcionalidades.
• Rendimiento.
• Experiencia de usuario.

---

## 10. Estado

Estado actual: Arquitectura propuesta.

La arquitectura será validada y ajustada durante las siguientes etapas del proyecto.
