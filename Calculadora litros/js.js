let checkbox = document.getElementById("checkbox");
		checkbox.checked = false;

		let min_vueltas = document.getElementById("min_vueltas");
		let min_vuel_texto = document.getElementById("minutos_vueltas_texto");
		let lapMin = document.getElementById("lapMin");
		let lapSec = document.getElementById("lapSec");
		let litrosPorVuelta = document.getElementById("litrosPorVuelta");

		checkbox.addEventListener('change', function() {
			if (this.checked) {
				min_vuel_texto.innerHTML = "Vueltas de carrera:";
				lapMin.disabled = true;
				lapSec.disabled = true;
			} else {
				min_vuel_texto.innerHTML = "Minutos de carrera:";
				lapMin.disabled = false;
				lapSec.disabled = false;
			}
		});


		function clears() {
			document.getElementById("res").innerHTML = "";
			document.getElementById("res2").innerHTML = "";
			min_vueltas.value = "";
			lapMin.value = "";
			lapSec.value = "";
			litrosPorVuelta.value = "";
		}

		function calcular() {
			let min_vueltas_val = parseFloat(min_vueltas.value);
			let lapMin_val = parseFloat(lapMin.value);
			let lapSec_val = parseFloat(lapSec.value);
			let litrosPorVuelta_val = parseFloat(litrosPorVuelta.value);

			let laptime;
			let litros;
			let vueltas;

			if (checkbox.checked) {
				litros = (min_vueltas_val*litrosPorVuelta_val).toFixed(3);
			} else {
			 	laptime = (lapMin_val*60) + lapSec_val;
				litros = (((min_vueltas_val*60)/laptime)*litrosPorVuelta_val).toFixed(3);
				vueltas = (min_vueltas_val*60/laptime).toFixed(1);
			}

			document.getElementById("res").innerHTML = litros + " litros";
			if (!checkbox.checked) document.getElementById("res2").innerHTML = vueltas + "~ vueltas";
			else document.getElementById("res2").innerHTML = min_vueltas_val + " vueltas";
		}
		
		
		clears();