class Model {
  private message: string;

  constructor() {
    this.message = "";
  }

  public get(): string {
    return this.message;
  }

  public set(message: string): void {
    this.message = message;
  }
}

class View {
  public log(message: string): void {
    console.log(message);
  }
}

class Controller {
  private model: Model;
  private view: View;

  constructor(model: Model, view: View, message: string) {
    this.model = model;
    this.view = view;
    this.set(message);
  }

  public set(message: string): void {
    this.model.set(message);
    this.update();
  }

  public update(): void {
    this.view.log(this.model.get());
  }
}

const message = "hello, world";
const model = new Model();
const view = new View();

new Controller(model, view, message);