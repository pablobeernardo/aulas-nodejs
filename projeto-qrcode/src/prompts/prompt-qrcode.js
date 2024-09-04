import chalk from "chalk";

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QRCode")
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre o tipo de QRCode (1- NORMAL ou 2- TERMINAL"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Por favor, insira um número válido (1- NORMAL ou 2- TERMINAL)"),
        required: true
    },
    
];

export default promptQRCode;