'use strict';

// GENERAR NUEVOS ELEMENTOS A PETICIÓN (experience)_______________________
var idExperienceModifier = 2;
function addItemExperience() {
	var repeatedItemExperience = '<div class="experience-element" id="experience-element' + idExperienceModifier + '"><input class="class-input" id="job' + idExperienceModifier + '" type="text" name="puesto" placeholder="Puesto' + idExperienceModifier + '"><section class="experience-dates"><div class="date-container-from"><label class="label">Desde</label><select id="start_month-job' + idExperienceModifier + '" name="start_month" class="month"></select><select id="start_year-job' + idExperienceModifier + '" name="start_year" class="year"></select></div><div class="date-container-until"><label class="label" >Hasta</label><select id="end_month-job' + idExperienceModifier + '" name="end_month" class="month"></select><select id="end_year-job' + idExperienceModifier + '" name="end_year" class="year"></select><div class="actualidad"><label for="actualidad" class="present-button-p">Actualidad</label><input class="present-button" id="actualidad-job' + idExperienceModifier + '" type="checkbox" name="actualidad"></div></div></section><input class="class-input" id="company'+ idExperienceModifier + '" type="text" name="company" placeholder="Empresa"><textarea class="experience-text" id="description-job' + idExperienceModifier + '" name="description" rows="8" cols="80" placeholder="Despripción del puesto"></textarea><button type="button" name="button" class="button--save save-experience-button" id="save-experience-button-' + idExperienceModifier + '" data-id="' + idExperienceModifier + '">Guardar</button></div>';

	document.querySelector('.experience-element').insertAdjacentHTML('beforeend', repeatedItemExperience);

	document.getElementById('save-experience-button-' + idExperienceModifier).addEventListener('click',printProfessionalExperienceToPreview);

	idExperienceModifier++;

	anosInput ();
	selectMonths();
}

var newExperienceButton = document.querySelector('.new-experience-button');
newExperienceButton.addEventListener('click',addItemExperience);