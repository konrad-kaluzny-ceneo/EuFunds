const { PrismaClient } = require("@prisma/client");
const { getData } = require("./data.js");
const prisma = new PrismaClient();

const chunkSize = 1000; // Rozmiar paczki
const startTime = Date.now();

const formatETA = (eta) => {
  const seconds = Math.ceil(eta / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}m ${remainingSeconds}s`;
};

const load = async () => {
  try {
    const projects = await getData();

    await prisma.project.deleteMany();
    console.log("Deleted records in project table");

    await prisma.$queryRaw`ALTER TABLE Project AUTO_INCREMENT = 1`;
    console.log("Reset project auto increment to 1");

    // Podziel tablicę na paczki po 1000 projektów i dodaj je do bazy danych
    for (let i = 0; i < projects.length; i += chunkSize) {
      const chunk = projects.slice(i, i + chunkSize);
      console.log(`Adding ${chunk.length} projects to database`);
      await prisma.project.createMany({
        data: chunk,
      });

      // Oblicz i wyświetl ETA
      const elapsedTime = Date.now() - startTime;
      const progress = i + chunk.length;
      const total = projects.length;
      const remaining = total - progress;
      const eta = (elapsedTime / progress) * remaining;
      console.log(`ETA: ${formatETA(eta)}`);
    }

    console.log("Added project data");

    // // Jeśli zostały jeszcze jakieś pozostałe projekty, dodaj je teraz
    // const remainingProjects = projects.length % chunkSize;
    // if (remainingProjects > 0) {
    //   const remainingChunk = projects.slice(
    //     projects.length - remainingProjects
    //   );
    //   console.log(
    //     `Adding ${remainingChunk.length} remaining projects to database`
    //   );
    //   await prisma.project.createMany({
    //     data: remainingChunk,
    //   });
    // }

    console.log("Finished adding all projects");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
