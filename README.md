# APSI_P3

# Configuración

Crea un archivo .env en el directorio raíz del proyecto y especifica la URL de conexión de tu base de datos MongoDB de la siguiente manera:

```env
MONGO_URL=tu_url_de_conexion_mongodb
```

## Endpoints

### GET

#### -Obtener todos los discos
/discos/
  
Este endpoint devuelve una lista de todos los discos almacenados en la base de datos.

#### Obtener un disco por su ID
/discos/:id

Este endpoint devuelve los detalles de un disco específico basado en su ID.

#### Obtener discos por nombre
/discos/nombre/:nombre

Este endpoint devuelve una lista de discos que coinciden con el nombre proporcionado.

#### Obtener discos por formato
/discos/formato/:formato

Este endpoint devuelve una lista de discos que tienen el formato especificado.

#### Obtener discos por país de impresión
/discos/paisImpresion/:paisImpresion

Este endpoint devuelve una lista de discos que fueron impresos en el país especificado.

### POST


#### Crear un nuevo disco
/discos

Este endpoint permite crear un nuevo disco. Debes proporcionar los siguientes campos en el cuerpo de la solicitud:

```json
{
  "nombre": "Nombre del disco",
  "autor": "Nombre del autor",
  "formato": "Formato del disco",
  "matriz": "Nombre de matriz (opcional)",
  "pais_impresion": "País de impresión",
  "arte_portada": "URL de la imagen de portada"
}
```


### PUT

#### Actualizar un disco existente por su ID

/discos/:id

Este endpoint permite actualizar los detalles de un disco existente. Debes proporcionar los mismos campos que se mencionaron en el endpoint de creación.

### DELETE

#### Eliminar un disco por su ID

/discos/:id

Este endpoint permite eliminar un disco de la base de datos según su ID
