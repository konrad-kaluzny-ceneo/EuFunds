const { getData } = require("./data.js");

const findMaxLength = (arr) => {
  let maxLength = 0;

  for (const item of arr) {
    if (item == null || item === undefined) {
      continue;
    }
    if (typeof item === 'string' && item.length > maxLength) {
      maxLength = item.length;
    }
  }

  return maxLength;
};

async function checkData() {
  try {
    const projects = await getData();

    const titles = projects.map((project) => project.program || '');
    const beneficients = projects.map((project) => project.beneficient || '');
    const project_values = projects.map((project) => project.project_value || '');
    const cofinancing_values = projects.map((project) => project.cofinancing_value || '');
    const categories = projects.map((project) => project.category || '');
    const many_administrative_units = projects.map((project) => project.many_administrative_units || '');
    const thumbnailImageUrls = projects.map((project) => project.thumbnailImageUrl || '');
    const thumbnailImageUrl_wojewodztwo = projects.map((project) => project.thumbnailImageUrl_wojewodztwo || '');
    const urls = projects.map((project) => project.url || '');
    const outside_ids = projects.map((project) => project.outside_id || '');
    const powiats = projects.map((project) => project.powiat || '');
    const thumbnailImageUrl_programs = projects.map((project) => project.thumbnailImageUrl_program || '');
    const dzialanies = projects.map((project) => project.dzialanie || '');
    const funduszs = projects.map((project) => project.fundusz || '');
    const perspektywas = projects.map((project) => project.perspektywa || '');
    const opisProjektus = projects.map((project) => project.opisProjektu || '');

    const maxTitleLength = findMaxLength(titles);
    const maxBeneficientLength = findMaxLength(beneficients);
    const maxProjectValueLength = findMaxLength(project_values);
    const maxCofinancingValueLength = findMaxLength(cofinancing_values);
    const maxCategoryLength = findMaxLength(categories);
    const maxManyAdministrativeUnitsLength = findMaxLength(many_administrative_units);
    const maxThumbnailImageUrlLength = findMaxLength(thumbnailImageUrls);
    const maxThumbnailImageUrlWojewodztwoLength = findMaxLength(thumbnailImageUrl_wojewodztwo);
    const maxUrlLength = findMaxLength(urls);
    const maxOutsideIdLength = findMaxLength(outside_ids);
    const maxPowiatLength = findMaxLength(powiats);
    const maxThumbnailImageUrlProgramLength = findMaxLength(thumbnailImageUrl_programs);
    const maxDzialanieLength = findMaxLength(dzialanies);
    const maxFunduszLength = findMaxLength(funduszs);
    const maxPerspektywaLength = findMaxLength(perspektywas);
    const maxOpisProjektuLength = findMaxLength(opisProjektus);

    console.log(`Titles: Count: ${titles.length} Max Length: ${maxTitleLength}, example: ${titles[0]}`);
    console.log(`Beneficients: Count: ${beneficients.length} Max Length: ${maxBeneficientLength}, example: ${beneficients[0]}`);
    console.log(`Project Values: Count: ${project_values.length} Max Length: ${maxProjectValueLength}, example: ${project_values[0]}`);
    console.log(`Cofinancing Values: Count: ${cofinancing_values.length} Max Length: ${maxCofinancingValueLength}, example: ${cofinancing_values[0]}`);
    console.log(`Categories: Count: ${categories.length} Max Length: ${maxCategoryLength}, example: ${categories[0]}`);
    console.log(`Many Administrative Units: Count: ${many_administrative_units.length} Max Length: ${maxManyAdministrativeUnitsLength}, example: ${many_administrative_units[0]}`);
    console.log(`Thumbnail Image URLs: Count: ${thumbnailImageUrls.length} Max Length: ${maxThumbnailImageUrlLength}, example: ${thumbnailImageUrls[0]}`);
    console.log(`Thumbnail Image URL Wojewodztwo: Count: ${thumbnailImageUrl_wojewodztwo.length} Max Length: ${maxThumbnailImageUrlWojewodztwoLength}, example: ${thumbnailImageUrl_wojewodztwo[0]}`);
    console.log(`URLs: Count: ${urls.length} Max Length: ${maxUrlLength}, example: ${urls[0]}`);
    console.log(`Outside Ids: Count: ${outside_ids.length} Max Length: ${maxOutsideIdLength}, example: ${outside_ids[0]}`);
    console.log(`Powiats: Count: ${powiats.length} Max Length: ${maxPowiatLength}, example: ${powiats[0]}`);
    console.log(`Thumbnail Image URL Programs: Count: ${thumbnailImageUrl_programs.length} Max Length: ${maxThumbnailImageUrlProgramLength}, example: ${thumbnailImageUrl_programs[0]}`);
    console.log(`Dzialanies: Count: ${dzialanies.length} Max Length: ${maxDzialanieLength}, example: ${dzialanies[0]}`);
    console.log(`Funduszs: Count: ${funduszs.length} Max Length: ${maxFunduszLength}, example: ${funduszs[0]}`);
    console.log(`Perspektywas: Count: ${perspektywas.length} Max Length: ${maxPerspektywaLength}, example: ${perspektywas[0]}`);
    console.log(`Opis Projektus: Count: ${opisProjektus.length} Max Length: ${maxOpisProjektuLength}, example: ${opisProjektus[0]}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

checkData();
