/**
 * Cuota mensual de un préstamo con sistema de amortización francés.
 *
 * @param capital Importe financiado, en euros.
 * @param tinAnual Tipo de interés nominal anual, en porcentaje (3.5 = 3,5 %).
 * @param meses Número de cuotas mensuales.
 * @returns Cuota mensual en euros.
 */
export function calcularCuota(capital: number, tinAnual: number, meses: number): number {
  const interesMensual = tinAnual / 100 / 12;
  const cuota = (capital * interesMensual) / (1 - Math.pow(1 + interesMensual, -meses));
  return Math.floor(cuota * 100) / 100;
}

/**
 * Porcentaje del precio de la vivienda que se financia.
 *
 * @param precio Precio de la vivienda, en euros.
 * @param ahorros Ahorros que aporta el comprador, en euros.
 * @returns Porcentaje (80 = 80 %).
 */
export function porcentajeFinanciacion(precio: number, ahorros: number): number {
  return ((precio - ahorros) / precio) * 100;
}
