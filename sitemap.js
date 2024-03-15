const generateSitemap = require("fs-sitemap-generator");

const DOMAIN = "https://acquiredtastecomedy.com";
const IGNORE_FOLDERS = ["_nuxt"];
const SOURCE_FOLDER = "dist";
const OUTPUT_FILE_NAME = "sitemap.xml";

const __init = async () => {
  generateSitemap(
    SOURCE_FOLDER,
    IGNORE_FOLDERS,
    DOMAIN,
    `${SOURCE_FOLDER}/${OUTPUT_FILE_NAME}`
  );
};

__init();