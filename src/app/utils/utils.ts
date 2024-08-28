export function formatRut(rut: string): string {
    // Eliminar puntos y guión
    let cleanedRut = rut.replace(/\./g, '').replace('-', '');
    // Extraer dígito verificador
    let dv = cleanedRut.slice(-1);
    // Extraer número
    let number = cleanedRut.slice(0, -1);
  
    // Formatear el número con puntos cada tres dígitos
    let formattedNumber = '';
    while (number.length > 3) {
      formattedNumber = '.' + number.slice(-3) + formattedNumber;
      number = number.slice(0, -3);
    }
    formattedNumber = number + formattedNumber;
  
    // Retornar RUT formateado
    return formattedNumber + '-' + dv;
}

export function validateRut(rut: string): boolean {
    let cleanedRut = rut.replace(/\./g, '').replace('-', '');
    let number = cleanedRut.slice(0, -1);
    let dv = cleanedRut.slice(-1).toLowerCase();
  
    let sum = 0;
    let multiplier = 2;
  
    for (let i = number.length - 1; i >= 0; i--) {
        sum += parseInt(number.charAt(i)) * multiplier;
        multiplier = multiplier < 7 ? multiplier + 1 : 2;
    }
  
    let calculatedDv: any = 11 - (sum % 11);
    if (calculatedDv === 11) {
        calculatedDv = '0';
    } else if (calculatedDv === 10) {
        calculatedDv = 'k';
    } else {
        calculatedDv = calculatedDv.toString();
    }
  
    return dv === calculatedDv;
}
