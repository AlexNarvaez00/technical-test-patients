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
