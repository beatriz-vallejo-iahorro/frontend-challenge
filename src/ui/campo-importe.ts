export interface OpcionesCampoImporte {
  id: string;
  etiqueta: string;
  min: number;
  max: number;
  paso: number;
  valor: number;
}

/**
 * Campo de importe en euros: una caja de texto y un deslizador para el mismo valor.
 * Diseño: componente "textinput+slider" del Figma.
 */
export function campoImporte({ id, etiqueta, min, max, paso, valor }: OpcionesCampoImporte): string {
  return `
    <div class="campo-importe">
      <span class="campo-importe__etiqueta">${etiqueta}</span>
      <input class="campo-importe__caja" id="${id}" type="number" value="${valor}" />
      <input
        class="campo-importe__deslizador"
        id="${id}-deslizador"
        type="range"
        min="${min}"
        max="${max}"
        step="${paso}"
        value="${valor}"
      />
    </div>
  `;
}
