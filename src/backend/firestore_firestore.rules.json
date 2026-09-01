// Este archivo es muy importante porque tenemos un repositorio público.No debemos permitir que cualquier persona pueda leer o modificar toda la base de datos.
// Una primera versión podría ser:
 
// Importante: estas reglas son una base para el proyecto académico. Antes de un despliegue real habría que revisar cuidadosamente permisos, roles administrativos y validación de datos.


rules_version = '2';
 
service cloud.firestore {
  match /databases/{database}/documents {
 
    match /users/{userId} {
      allow read, write: if request.auth != null
&& request.auth.uid == userId;
    }
 
    match /services/{serviceId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
 
    match /notifications/{notificationId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
      allow update, delete: if false;
    }
 
    match /devices/{userId} {
      allow read, write: if request.auth != null
&& request.auth.uid == userId;
    }
  }
}

