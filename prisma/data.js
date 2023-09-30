const fs = require('fs');
const csv = require('csv-parser');

const csvFilePath = 'prisma/data.csv';

async function getData() {
  return new Promise((resolve, reject) => {
    const projects = [];

    fs.createReadStream(csvFilePath)
      .pipe(csv({ separator: ';' }))
      .on('data', (row) => {
        projects.push({
          program: row.program,
          beneficient: row.beneficient,
          project_value: parseFloat(row.project_value),
          cofinancing_value: parseFloat(row.cofinancing_value),
          category: row.category,
          many_administrative_units: row.many_administrative_units === 'TAK',
          thumbnailImageUrl: row.thumbnailImageUrl,
          thumbnailImageUrl_wojewodztwo: row.thumbnailImageUrl_wojewodztwo,
          url: row.url,
          outside_id: parseInt(row.outside_id),
          powiat: row.powiat,
          thumbnailImageUrl_program: row.thumbnailImageUrl_program,
          dzialanie: row.dzialanie,
          fundusz: row.fundusz,
          perspektywa: row.perspektywa,
          opisProjektu: row.opisProjektu,
        });
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
        resolve(projects);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

module.exports = {
  getData
};
