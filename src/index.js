import { Application } from "stimulus";
// import { registerControllersFrom } from "@hotwired/stimulus-webpack-helpers";

import ToggleController from "./controllers/toggle_controller";

const application = Application.start();
// registerControllersFrom(application, __dirname);
application.register("toggle", ToggleController);
