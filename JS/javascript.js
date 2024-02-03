class ActionsUrl {
  static instance = null;
  static #createInstance = true;

  constructor() {
    if (ActionsUrl.instance || ActionsUrl.#createInstance) {
      throw new Error("Use Singleton.getInstance() to get an instance.");
    }
  }

  static getInstance() {
    ActionsUrl.#createInstance = false;
    if (!ActionsUrl.instance) {
      ActionsUrl.instance = new ActionsUrl();
    }
    ActionsUrl.#createInstance = true;
    return ActionsUrl.instance;
  }

  async #getUrl(url) {
    try {
      const response = await fetch(url);
      if (!response.status === "ok") {
        throw new Error("bad request");
      }
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async group(id) {
    const allData = await this.#getUrl(
      `https://jsonplaceholder.typicode.com/posts`
    );
    const groupedData = allData.groupBy(id);
    this.getData(groupedData);
  }

  getData(data) {
    console.log(data);
  }
}

function groupBy(keyword) {
  const objGroup = {};
  for (let x = 0; x < this.length; x++) {
    const key = this[x][keyword];
    if (objGroup[key]) {
      objGroup[key].push(this[x]);
    } else {
      objGroup[key] = [this[x]];
    }
  }
  return objGroup;
}

Array.prototype.groupBy = groupBy;
const actionsurl1 = ActionsUrl.getInstance();
actionsurl1.group("id");
