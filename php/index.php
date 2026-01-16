<?php
// Datos de conexión — cámbialos cuando tengas tu hosting
$host = 'localhost';
$user = 'usuario';
$pass = 'password';
$db   = 'enfermeras_db';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die('Error de conexión: ' . $conn->connect_error);
}

// Sanitizar
$nombre = $_POST['nombre'] ?? '';
$email = $_POST['email'] ?? '';
$telefono = $_POST['telefono'] ?? '';
$diploma = $_POST['diploma'] ?? '';
$certificado_notas = $_POST['certificado_notas'] ?? '';
$pasaporte = $_POST['pasaporte'] ?? '';

// Función para guardar archivos
function guardarArchivo($inputName) {
    if (!empty($_FILES[$inputName]['name'])) {
        $carpeta = 'uploads/';
        if (!is_dir($carpeta)) mkdir($carpeta);

        $ruta = $carpeta . basename($_FILES[$inputName]['name']);
        move_uploaded_file($_FILES[$inputName]['tmp_name'], $ruta);
        return $ruta;
    }
    return null;
}

$archivo_diploma = guardarArchivo('archivo_diploma');
$archivo_certificado = guardarArchivo('archivo_certificado');
$archivo_pasaporte = guardarArchivo('archivo_pasaporte');

// Guardar en la BD
$stmt = $conn->prepare("INSERT INTO postulantes 
(nombre, email, telefono, diploma, certificado_notas, pasaporte, archivo_diploma, archivo_certificado, archivo_pasaporte)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");

$stmt->bind_param(
    'sssssssss',
    $nombre, 
    $email, 
    $telefono, 
    $diploma, 
    $certificado_notas, 
    $pasaporte, 
    $archivo_diploma, 
    $archivo_certificado, 
    $archivo_pasaporte
);

if ($stmt->execute()) {
    echo "Registro enviado correctamente.";
} else {
    echo "Error al guardar los datos.";
}
?>
