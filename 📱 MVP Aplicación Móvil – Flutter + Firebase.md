# 📱 MVP Aplicación Móvil – Flutter + Firebase

## 1. Descripción del proyecto

Este proyecto consiste en el diseño y desarrollo de una aplicación móvil multiplataforma utilizando **Flutter y Firebase**, orientada a solucionar una problemática relacionada con la experiencia de usuario y la latencia durante el acceso a servicios desde dispositivos móviles.

La problemática identificada corresponde a la existencia de **interfaces no optimizadas para dispositivos móviles, ausencia de notificaciones push en tiempo real y tiempos de carga superiores a 8 segundos en redes 4G/5G**, situaciones que pueden generar frustración en los usuarios y aumentar las tasas de abandono.

Como respuesta a esta problemática, se propone desarrollar un **Producto Mínimo Viable (MVP)** que permita implementar las funcionalidades esenciales de la solución, validar rápidamente su funcionamiento y obtener retroalimentación directa de usuarios reales.

El proyecto será desarrollado utilizando **Flutter** como framework multiplataforma y **Firebase** como plataforma de servicios backend.

---

## 2. Metodología: Lean Mobile Development

El desarrollo del proyecto se realizará bajo un enfoque de **Lean Mobile Development**, orientado a la creación rápida de un Producto Mínimo Viable (MVP) que pueda ser evaluado directamente por usuarios reales.

Esta metodología permite reducir el desarrollo innecesario de funcionalidades, priorizar las necesidades principales de los usuarios y tomar decisiones basadas en evidencia obtenida durante el proceso de validación.

El ciclo de trabajo será:

```text
┌───────────────────────┐
│ INVESTIGAR            │
│ Necesidades usuario   │
└───────────┬───────────┘
            ↓
┌───────────────────────┐
│ DISEÑAR               │
│ UX/UI y prototipo     │
└───────────┬───────────┘
            ↓
┌───────────────────────┐
│ CONSTRUIR             │
│ MVP con Flutter       │
└───────────┬───────────┘
            ↓
┌───────────────────────┐
│ MEDIR                 │
│ Rendimiento y SUS     │
└───────────┬───────────┘
            ↓
┌───────────────────────┐
│ APRENDER              │
│ Retroalimentación     │
└───────────┬───────────┘
            │
            └───────────────→ MEJORAR MVP
```

El proceso será iterativo, permitiendo incorporar mejoras a partir de los resultados obtenidos durante las pruebas con usuarios.

---

## 3. Objetivo general

Diseñar y desarrollar una aplicación móvil multiplataforma utilizando Flutter y Firebase, orientada a mejorar la experiencia de usuario y reducir la latencia en el acceso al servicio, logrando tiempos de carga inferiores a **1.5 segundos** en dispositivos Android e iOS, así como una calificación de usabilidad superior a **85 puntos en la escala System Usability Scale (SUS)** al finalizar el semestre.

---

## 4. Objetivos específicos

### Objetivo específico 1 – Investigación de usuario y prototipado UX/UI

Investigar las necesidades, expectativas y principales dificultades de los usuarios al acceder al servicio desde dispositivos móviles, con el propósito de definir los requerimientos funcionales y de experiencia de usuario, diseñar la arquitectura de navegación y desarrollar prototipos UX/UI optimizados para dispositivos Android e iOS.

### Objetivo específico 2 – Desarrollo Frontend e integración Backend

Desarrollar la aplicación móvil multiplataforma utilizando Flutter e integrar los servicios de Firebase necesarios para la gestión de usuarios, almacenamiento de información, comunicación con el backend y envío de notificaciones push en tiempo real, implementando estrategias de optimización que permitan reducir los tiempos de carga y mejorar el rendimiento de la aplicación.

### Objetivo específico 3 – Pruebas, validación y publicación

Evaluar el MVP en dispositivos reales Android e iOS mediante pruebas funcionales, de usabilidad y rendimiento, midiendo los tiempos de carga, comportamiento de las notificaciones y experiencia de navegación, con el propósito de identificar oportunidades de mejora hasta alcanzar un tiempo de carga inferior a 1.5 segundos y una calificación superior a 85 puntos en la escala SUS.

---

## 5. Problema identificado

Los usuarios experimentan una **mala experiencia al acceder al servicio desde navegadores móviles**, debido principalmente a:

- Interfaces no optimizadas para dispositivos móviles.
- Tiempos de carga superiores a 8 segundos.
- Falta de notificaciones push en tiempo real.
- Experiencia de navegación poco eficiente.
- Posible incremento en el abandono del servicio.

### Situación actual

```text
Usuario
   ↓
Navegador móvil
   ↓
Interfaz no optimizada
   ↓
Carga > 8 segundos
   ↓
Sin notificaciones en tiempo real
   ↓
Frustración
   ↓
Abandono
```

### Situación propuesta

```text
Usuario
   ↓
Aplicación móvil
   ↓
Flutter
   ↓
Interfaz optimizada
   ↓
Firebase
   ├── Autenticación
   ├── Datos
   └── Notificaciones Push
   ↓
Carga < 1.5 segundos
   ↓
Mejor experiencia
```

---

## 6. Producto Mínimo Viable (MVP)

El MVP corresponde a la primera versión funcional de la aplicación que contiene únicamente las funcionalidades esenciales necesarias para solucionar el problema identificado y validar la propuesta con usuarios reales.

### Funcionalidades iniciales del MVP

- Registro de usuario.
- Inicio de sesión.
- Pantalla principal optimizada para dispositivos móviles.
- Navegación sencilla e intuitiva.
- Consulta de información.
- Integración con Firebase.
- Notificaciones push en tiempo real.
- Manejo básico de errores.
- Diseño adaptable para Android e iOS.

Las funcionalidades adicionales serán consideradas únicamente después de analizar los resultados obtenidos durante la validación del MVP.

---

## 7. Ciclo Lean de desarrollo

El proyecto será desarrollado mediante ciclos iterativos.

### Ciclo 1 – Investigar

Se identificarán las necesidades, problemas y expectativas de los usuarios.

**Resultado esperado:**
- Perfil de usuario.
- Necesidades identificadas.
- Requerimientos iniciales.

### Ciclo 2 – Diseñar

Se diseñará la experiencia de usuario y la interfaz de la aplicación.

**Resultado esperado:**
- Arquitectura de navegación.
- Wireframes.
- Prototipo UX/UI.

### Ciclo 3 – Construir

Se desarrollará el MVP utilizando Flutter y Firebase.

**Resultado esperado:**
- Primera versión funcional de la aplicación.

### Ciclo 4 – Medir

El MVP será probado con usuarios reales y dispositivos físicos.

Se medirán:

- Tiempo de carga.
- Tiempo de respuesta.
- Funcionamiento de las notificaciones.
- Facilidad de navegación.
- Usabilidad.
- Puntuación SUS.

### Ciclo 5 – Aprender

Los resultados obtenidos serán analizados para identificar:

- Problemas de usabilidad.
- Funcionalidades que requieren modificación.
- Problemas de rendimiento.
- Necesidades no contempladas inicialmente.

### Ciclo 6 – Mejorar

A partir de los resultados se realizarán ajustes al MVP y se repetirá el proceso de validación cuando sea necesario.

---

## 8. Tecnologías utilizadas

| Tecnología | Utilización |
|---|---|
| Flutter | Desarrollo multiplataforma |
| Dart | Lenguaje de programación |
| Firebase Authentication | Autenticación de usuarios |
| Cloud Firestore | Gestión de información |
| Firebase Cloud Messaging | Notificaciones push |
| Git | Control de versiones |
| GitHub | Repositorio y documentación |

---

## 9. Arquitectura de la solución

La solución utilizará una arquitectura basada en una aplicación móvil desarrollada con Flutter e integrada con los servicios de Firebase.

```text
                     USUARIO
                        │
                        ▼
              ┌──────────────────┐
              │ APLICACIÓN        │
              │ FLUTTER           │
              └────────┬─────────┘
                       │
                       ▼
              ┌──────────────────┐
              │    FIREBASE      │
              ├──────────────────┤
              │ Authentication   │
              │ Cloud Firestore  │
              │ Cloud Messaging  │
              └──────────────────┘
                       │
              ┌────────┴─────────┐
              ▼                  ▼
          DATOS             NOTIFICACIONES
                              PUSH
```

Los diagramas completos de arquitectura se encuentran en:

`docs/03_arquitectura/`

---

## 10. Estructura del repositorio

```text
mvp-app-movil-flutter-firebase/
│
├── README.md
│
├── docs/
│   ├── 01_investigacion_usuario/
│   ├── 02_ux_ui/
│   ├── 03_arquitectura/
│   ├── 04_mvp/
│   ├── 05_validacion/
│   ├── 06_evidencias/
│   └── 07_presentacion/
│
├── src/
├── test/
└── .gitignore
```

---

## 11. Pruebas y validación

La validación del MVP se realizará utilizando usuarios reales y dispositivos Android e iOS.

### Pruebas funcionales

Se verificará el correcto funcionamiento de:

- Registro.
- Inicio de sesión.
- Navegación.
- Consulta de información.
- Notificaciones.
- Integración con Firebase.

### Pruebas de rendimiento

Se medirán principalmente:

- Tiempo de carga.
- Tiempo de respuesta.
- Consumo de recursos.
- Comportamiento en redes 4G/5G.

### Pruebas de usabilidad

Se utilizará la escala **System Usability Scale (SUS)** para medir la percepción de facilidad de uso de la aplicación.

---

## 12. Indicadores de éxito

| Indicador | Situación inicial | Meta |
|---|---:|---:|
| Tiempo de carga | > 8 segundos | **< 1.5 segundos** |
| Usabilidad SUS | Por determinar | **> 85 puntos** |
| Notificaciones | No disponibles en tiempo real | **Implementadas** |
| Plataformas | Navegador móvil | **Android e iOS** |
| Validación | Sin MVP validado | **Usuarios reales** |

Los valores obtenidos durante las pruebas serán documentados en:

`docs/05_validacion/`

---

## 13. Evidencias

Las evidencias del desarrollo y validación estarán disponibles en:

`docs/06_evidencias/`

Se incluirán:

- Investigación de usuarios.
- Prototipos UX/UI.
- Evolución del MVP.
- Capturas de la aplicación.
- Integración con Firebase.
- Notificaciones push.
- Pruebas en dispositivos reales.
- Mediciones de rendimiento.
- Resultados de SUS.
- Mejoras implementadas después de la validación.

---

## 14. Presentación del proyecto

La presentación utilizada para exponer el proyecto se encuentra en:

`docs/07_presentacion/`

Esta carpeta contendrá la presentación final en formatos PDF y/o PowerPoint.

---

## 15. Control de versiones

Git será utilizado para registrar la evolución del proyecto mediante commits.

Los cambios importantes estarán relacionados con las diferentes iteraciones del MVP.

Ejemplo:

```text
feat: crear prototipo inicial
feat: implementar login
feat: integrar Firebase Authentication
feat: implementar notificaciones push
test: realizar pruebas de rendimiento
test: realizar evaluación SUS
fix: optimizar tiempo de carga
docs: actualizar evidencias del MVP
```

---

## 16. Resultados esperados

Al finalizar el proyecto se espera obtener una aplicación móvil multiplataforma funcional que:

- Mejore la experiencia de usuario.
- Presente una interfaz optimizada para dispositivos móviles.
- Reduzca el tiempo de carga a menos de 1.5 segundos.
- Permita el envío de notificaciones push en tiempo real.
- Funcione en Android e iOS.
- Obtenga una puntuación SUS superior a 85.
- Haya sido validada directamente con usuarios reales.
- Incorpore mejoras basadas en los resultados de validación.

---

## 17. Estado del proyecto

🚧 **En desarrollo – MVP**

El proyecto se encuentra en proceso de investigación, diseño, construcción y validación mediante ciclos iterativos de Lean Mobile Development.

---

## 18. Autores

**Integrantes:**

- Nombre del integrante 1
- Nombre del integrante 2
- Nombre del integrante 3

**Asignatura:** Desarrollo de Aplicaciones para Móviles

**Metodología:** Lean Mobile Development

**Tecnologías principales:** Flutter + Firebase