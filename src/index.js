import { Application } from "stimulus";
// import { registerControllersFrom } from "@hotwired/stimulus-webpack-helpers";

import ToggleController from "./controllers/toggle_controller";
import IntroController from "./controllers/intro_controller";
import GreetController from "./controllers/greet_controller";

const application = Application.start();
// registerControllersFrom(application, __dirname);
application.register("toggle", ToggleController);
application.register("intro", IntroController);
application.register("greet", GreetController);
