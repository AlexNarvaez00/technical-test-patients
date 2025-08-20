# 🏥 Patient Management API

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)

API REST para gestión de pacientes implementada con arquitectura hexagonal y TypeScript.

## 📋 Tabla de Contenidos

- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Arquitectura](#arquitectura)
- [Endpoints](#endpoints)

## 🚀 Instalación

### Prerequisitos

- Node.js >= 14
- pnpm

### Clonar el proyecto

```bash
git clone https://github.com/AlexNarvaez00/technical-test-patients.git
cd technical-test-patients
```

### Instalar dependencias

```bash
pnpm install
```

## ⚙️ Configuración

1. Crear archivo de variables de entorno:

```bash
cp .env.example .env
```

2. Configurar las variables necesarias:

```bash
# Server Configuration
EXPRESS_PORT=8080
```

## 💻 Uso

Iniciar el servidor de desarrollo:

```bash
pnpm dev
```

## 🔌 Endpoints

| Método | Endpoint          | Descripción          |
| ------ | ----------------- | -------------------- |
| `POST` | `/api/v1/patient` | Crear nuevo paciente |
| `GET`  | `/api/v1/patient` | Listar pacientes     |

### Ejemplos de uso

#### Crear paciente

```json
POST /api/v1/patient
Content-Type: application/json

{
  "name": "Ezeen",
  "age": 25,
  "symptoms": "Fiebre y vomito"
}
```

#### Consultar pacientes con filtros

Puedes filtrar, paginar y limitar los resultados usando query parameters:

```http
GET /api/v1/patient?filter[0][field]=name&filter[0][operator]=CONTAINS&filter[0][value]=a&filter[1][field]=age&filter[1][operator]=LT&filter[1][value]=46&skip=1&limit=10
```

Parámetros disponibles:

- `filter[n][field]`: Campo a filtrar (name, age, symptoms)
- `filter[n][operator]`: Operador de comparación (CONTAINS, LT, GT, EQ)
- `filter[n][value]`: Valor a comparar
- `skip`: Número de registros a saltar (paginación)
- `limit`: Cantidad máxima de registros a devolver

## 🏗️ Arquitectura

### Estructura del Proyecto

```

src/
├── context/
│ └── patient/
│ ├── application/ # Casos de uso
│ ├── domain/ # Reglas de negocio
│ └── infrastructure/ # Implementaciones

```

### Principios de Arquitectura Hexagonal

#### 🎯 Independencia del Dominio

- Dominio aislado y protegido
- Lógica de negocio pura
- Sin dependencias externas

#### 🔄 Inversión de Dependencias

- Interfaces en el dominio
- Implementaciones flexibles
- Fácil mantenimiento

#### 📦 Value Objects

- Encapsulación robusta
- Validaciones integradas
- Código más seguro

## Diagrama

![Descripción de la imagen](/diagram.png)
