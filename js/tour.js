function activarTooltip(triggerId, tooltipId) {
    const trigger = document.querySelector(`#${triggerId}`);
    const tooltip = document.querySelector(`#${tooltipId}`);

    trigger.addEventListener('mouseover', () => {
        tooltip.style.display = 'block';
    });

    trigger.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
    });
}

// Llama a la función para cada conjunto de elementos.........................................

activarTooltip('alojamiento-trigger', 'alojamiento-tooltip');
activarTooltip('translado-trigger', 'translado-tooltip');
activarTooltip('tren-trigger', 'tren-tooltip');
activarTooltip('actividades-trigger', 'actividades-tooltip');
activarTooltip('desayuno-trigger', 'desayuno-tooltip');
activarTooltip('salidas-trigger', 'salidas-tooltip');

activarTooltip('alojamiento-trigger01', 'alojamiento-tooltip01');
activarTooltip('translado-trigger01', 'translado-tooltip01');
activarTooltip('tren-trigger01', 'tren-tooltip01');
activarTooltip('actividades-trigger01', 'actividades-tooltip01');
activarTooltip('desayuno-trigger01', 'desayuno-tooltip01');
activarTooltip('salidas-trigger01', 'salidas-tooltip01');


activarTooltip('alojamiento-trigger02', 'alojamiento-tooltip02');
activarTooltip('translado-trigger02', 'translado-tooltip02');
activarTooltip('tren-trigger02', 'tren-tooltip02');
activarTooltip('actividades-trigger02', 'actividades-tooltip02');
activarTooltip('desayuno-trigger02', 'desayuno-tooltip02');
activarTooltip('salidas-trigger02', 'salidas-tooltip02');


