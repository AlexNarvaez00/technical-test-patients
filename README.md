## Primeros Pasos

### Clonar el proyecto.

Ejecuta el siguiente comando en tu terminal.

```bash
git clone
```

### Instalar el proyecto.

Cambia de directorio hacia la carpeta donde se clono el proyecto.

```bash
cd patients
```

Una vez que estes en la carpeta, instala las dependencias con el siguiente comando.

```bash
pnpm install
```

Crea el archivo de configuracion de las variables de entorno llamado `.env` puedes ayudarte del archivo de ejemplo `env.example`.

```bash
touch .env
```

El archivo de debe de contener la siguiente variable.

```bash
#.env
EXPRESS_PORT=8080
```

### Iniciar el proyecto.

Para iniciar el servidor de desarrollo debes de ejecutar el siguiente comando.

```bash
pnpm dev
```

Los recursos disponibles son los siguientes.

| Metodo | Url                                  | Action                    |
| ------ | ------------------------------------ | ------------------------- |
| POST   | http://localhost:8080/api/v1/patient | Crear un nuevo pacient    |
| GET    | http://localhost:8080/api/v1/patient | Consultar a los pacientes |

## Uso de la API.

### Crear un nuevo paciente.

Para crear un nuevo paciente, debes de enviar en el cuerpo de la peticion algo como siguiente.

```js
{
  "name": "Ezeen",
  "age": 25,
  "symptoms": "Fiebre y vomito"
}
```

## Arquitectura

Estructura del Proyecto:

- `context/`: Representa los diferentes contextos acotados (bounded contexts)
    - `patient/`

Cada contexto sigue la estructura hexagonal clásica:

- `application/`: Casos de uso
- `domain/`: Reglas de negocio y entidades
- `infrastructure/`: Implementaciones técnicas

Ventajas de la Arquitectura Hexagonal en este proyecto:

- Independencia del Dominio:

El dominio está completamente aislado en carpetas como `patient/domain/`.

Las reglas de negocio están protegidas y no dependen de frameworks externos
Por ejemplo: `Patient.ts`, `PatientProps.ts` contienen la lógica de negocio pura

- Inversión de Dependencias:

Se utilizan interfaces como `PatientRepository.ts` en el dominio
Las implementaciones están en infrastructure, como `InMemoryPatientRepository.ts`.
Esto facilita el cambio de implementaciones sin otras partes del codigo

- Separación de Casos de Uso:

Cada operación está aislada en su propio caso de uso
Por ejemplo: `PatientSave.ts`, `PatientMatch.ts`
Esto mejora la mantenibilidad y hace el código más predecible

- Value Objects:

Uso extensivo de Value Objects para encapsular reglas de validación
Por ejemplo: `PatientAge.ts`, `PatientName.ts`
Evita el uso de primitivos y hace el código más robusto
