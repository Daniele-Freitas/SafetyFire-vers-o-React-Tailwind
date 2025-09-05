<?php
header("Access-Control-Allow-Origin: https://safetyfireservicos.com/"); 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'vendor/autoload.php';

use Mailgun\Mailgun;
use Dotenv\Dotenv;

// Carrega variáveis do .env (fora da public_html)
$dotenv = Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Coleta os dados do formulário com fallback
    $name    = $_POST["name"] ?? '';
    $email   = $_POST["email"] ?? '';
    $phone   = $_POST["phone"] ?? 'Não informado';
    $preferredContact = $_POST["preferredContact"] ?? 'Não especificado';
    $subject = $_POST["subject"] ?? 'Sem assunto';
    $message = $_POST["message"] ?? '';
    $origem  = $_POST["origem_formulario"] ?? 'Formulário não identificado';

    // Carrega as credenciais do .env
    $apiKey = $_ENV['MAILGUN_API_KEY'];
    $domain = $_ENV['MAILGUN_DOMAIN'];

    // Inicializa o Mailgun
    $mg = Mailgun::create($apiKey, 'https://api.mailgun.net');

    // Monta o corpo do e-mail
    $body = "Você acabou de receber um contato pelo site da Safety Fire\n\n";
    $body .= "📍 Origem do formulário: $origem\n";
    $body .= "👤 Nome: $name\n";
    $body .= "📧 Email: $email\n";
    $body .= "📞 Telefone: $phone\n";
    $body .= "⭐ Meio de contato preferido: $preferredContact\n";
    $body .= "📝 Assunto: $subject\n";
    $body .= "💬 Mensagem:\n$message";

    try {
        // Envia o e-mail
        $result = $mg->messages()->send($domain, [
            'from'    => 'SAFETY FIRE <mailgun@mg.safetyfireservicos.com>',
            'to'      => 'comercial@safetyfireservicos.com',
            'subject' => $subject,
            'text'    => $body
        ]);

        echo "Mensagem enviada com sucesso!";
    } catch (Exception $e) {
        echo "Erro ao enviar: " . $e->getMessage();
    }
} else {
    echo "Método não permitido.";
}
?>