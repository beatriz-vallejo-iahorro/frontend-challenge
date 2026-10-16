import { calcularCuota, porcentajeFinanciacion } from '../domain/hipoteca';

export function montarSimulador(root: HTMLElement): void {
  root.innerHTML = `
    <div class="simulador">
      <h1>Simulador de hipoteca</h1>
      <input id="precio" type="number" placeholder="Precio de la vivienda" />
      <input id="ahorros" type="number" placeholder="Ahorros aportados" />
      <input id="plazo" type="number" placeholder="Plazo (años)" value="30" />
      <input id="tin" type="number" placeholder="TIN (%)" step="0.01" />
      <div class="boton" id="calcular">Calcular</div>
      <div id="error" class="error"></div>
      <div id="resultado"></div>
    </div>
  `;

  const boton = document.getElementById('calcular')!;
  boton.addEventListener('click', () => {
    const precio = parseFloat((document.getElementById('precio') as HTMLInputElement).value);
    const ahorros = parseFloat((document.getElementById('ahorros') as HTMLInputElement).value);
    const plazo = parseFloat((document.getElementById('plazo') as HTMLInputElement).value);
    const tin = parseFloat((document.getElementById('tin') as HTMLInputElement).value);

    const error = document.getElementById('error')!;
    const resultado = document.getElementById('resultado')!;

    if (isNaN(precio) || isNaN(ahorros) || isNaN(plazo) || isNaN(tin)) {
      error.innerHTML = 'Datos incorrectos';
      resultado.innerHTML = '';
      return;
    }
    error.innerHTML = '';

    const importe = precio - ahorros;
    const cuota = calcularCuota(importe, tin, plazo);
    const financiacion = porcentajeFinanciacion(precio, ahorros);

    resultado.innerHTML =
      '<p>Importe a financiar: ' + importe.toFixed(2) + ' €</p>' +
      '<p>Financiación: ' + financiacion.toFixed(0) + '%</p>' +
      '<p>Cuota mensual: <strong>' + cuota + ' €</strong></p>';
  });
}
