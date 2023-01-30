import { CreaturesController } from "./Controllers/CreaturesController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController(); i don't need this for this project
  creaturesController = new CreaturesController();
}

window["app"] = new App();
