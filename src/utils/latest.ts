import fs from "fs/promises";
import showdown from "showdown";
import slugify from "slugify";
import { ItemProps, Metadata } from "../pages";

export async function generateLatest(foldername: string):Promise<ItemProps[]> {
  const worksFolder = `src/content/${foldername}/`;
  const worksList = await fs.readdir(worksFolder);
  const worksMeta = [];

  //converter function
  const generateHTML = (content) => {
    const converter = new showdown.Converter({ metadata: true });
    const html:string = converter.makeHtml(content);
    const metadata = converter.getMetadata();
    metadata['slug'] = slugify(metadata['title']).toLowerCase();
    return { metadata, html };
  };

  for await (const work of worksList) {
    const fileInfo = await fs.stat(worksFolder + work);
    worksMeta.push({ name: work, createdAt: fileInfo.ctimeMs });
  }

  //sorting by most recent
  const compareDataParam = (a, b) => {
    if (a.createdAt > b.createdAt) return -1;
    if (a.createdAt < b.createdAt) return 1;
    else return 0;
  };
  worksMeta.sort(compareDataParam);
  const work1 = worksMeta[0];
  const work2 = worksMeta[1];

  const work1Content = await fs.readFile(worksFolder + work1.name, "utf8");
  const work2Content = await fs.readFile(worksFolder + work2.name, "utf8");
  const featuredWork = [];
  featuredWork.push(generateHTML(work1Content), generateHTML(work2Content));
  return featuredWork;
}
