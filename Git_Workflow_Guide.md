# 📘 Git Workflow Guide para Alumnos

---

## 🎯 Objetivo

Establecer un flujo de trabajo claro para organizar las lecciones y
evitar conflictos entre ramas en el repositorio.

---

# 📂 Estructura del Proyecto

El repositorio tendrá la siguiente estructura base:

    /alumnos
        ├── alumno1/
        ├── alumno2/
        ├── alumno3/
        └── ...

## 🔹 Regla Principal

Cada alumno:

- Debe crear una carpeta con **su nombre y apellido** dentro de
  `/alumnos`
- Solo puede modificar archivos dentro de su propia carpeta
- No debe modificar carpetas de otros compañeros

---

# 🪜 Paso a Paso del Workflow

## 1️⃣ Crear tu rama personal

Desde la rama principal:

    git checkout -b nombre-apellido

Ejemplo:

    git checkout -b maximiliano-naveillan

---

## 2️⃣ Crear tu carpeta dentro de /alumnos

    /alumnos/tu-nombre-apellido/

Ejemplo:

    /alumnos/maximiliano-naveillan/

Dentro de esa carpeta subirás todas tus actividades.

---

## 3️⃣ Agregar solo tu carpeta

⚠️ IMPORTANTE: Solo debes hacer add a tu carpeta.

    git add lecciones/tu-nombre-apellido/

NO usar:

    git add .

---

## 4️⃣ Hacer commit

    git commit -m "Agrega lección X - nombre-apellido"

---

## 5️⃣ Hacer push a tu rama

    git push origin nombre-apellido

---

# 🚫 Lo que NO se debe hacer

- No modificar archivos fuera de tu carpeta
- No trabajar directamente en main
- No hacer push a main
- No usar git add .
- No eliminar carpetas de otros compañeros

---

# 🧠 Buenas Prácticas

✔ Usar nombres de carpeta claros y consistentes\
✔ Hacer commits descriptivos\
✔ Mantener tu rama actualizada con main si el docente lo indica\
✔ Verificar cambios antes de hacer push

---

# 📌 Resumen Visual del Flujo

    Crear rama → Crear carpeta personal →
    Modificar solo tu carpeta →
    git add tu-carpeta →
    git commit →
    git push a tu rama

---

## ✅ Resultado Esperado

- Orden en el repositorio
- Sin conflictos entre alumnos
- Control claro de versiones
- Historial limpio y organizado

---

🚀 Este workflow asegura una colaboración estructurada y profesional
dentro del equipo.
