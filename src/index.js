import { Application } from "stimulus";
// import { registerControllersFrom } from "@hotwired/stimulus-webpack-helpers";

import ToggleController from "./controllers/toggle_controller";
import IntroController from "./controllers/intro_controller";
import GreetController from "./controllers/greet_controller";
import clipboard_controller from "./controllers/clipboard_controller";
import accordian_controller from "./controllers/accordian_controller";
import todo_controller from "./controllers/todo_controller";
import checkbox_controller from "./controllers/checkbox_controller";
import progress_bar_controller from "./controllers/progress_bar_controller";

const application = Application.start();
// registerControllersFrom(application, __dirname);
application.register("toggle", ToggleController);
application.register("intro", IntroController);
application.register("greet", GreetController);
application.register("clipboard", clipboard_controller);
application.register("accordian", accordian_controller);
application.register("todo", todo_controller);
application.register("checkbox", checkbox_controller);
application.register("progress-bar", progress_bar_controller);
