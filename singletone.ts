class Singleton {
  private static instance: Singleton;

  private constructor() { }

  public static getInstance(): Singleton {
      if (!Singleton.instance) {
          Singleton.instance = new Singleton();
      }

      return Singleton.instance;
  }

  private storage = {a: 1}

  public setStorage(key, value) {
    this.storage[key] = value;
  }

  public getStorage() {
    return this.storage
  }
}

const instance = Singleton.getInstance()
const instance2 = Singleton.getInstance()
instance.setStorage('b', 2)
instance2.setStorage('c', 3)
console.log(instance.getStorage())
console.log(instance2.getStorage())
console.log(instance2 === instance)