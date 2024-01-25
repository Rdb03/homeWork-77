import {promises as fs} from 'fs';
import {IComments, CommentsWithOutId} from "./type";

const fileName = './db.json';
let data: IComments[] = [];

const fileDb = {
  async init() {
      try {
          const fileContents = await fs.readFile(fileName);
          data = JSON.parse(fileContents.toString());
      } catch (e) {
          data = [];
      }
  },
    async getItems() {
      return data;
    },
    async addItem(item: CommentsWithOutId) {
        const id = crypto.randomUUID();
        const comment = {id, ...item}
        data.push(comment);
        await this.save();
        return comment;
    },
    async save() {
      return fs.writeFile(fileName, JSON.stringify(data));
    }
};

export default fileDb;