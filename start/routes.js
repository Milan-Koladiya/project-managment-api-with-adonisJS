"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.group(() => {
  Route.post("/register", "UserController.Resister");
  Route.post("/login", "UserController.Login");
  Route.get("/currentUSer", "ProjectController.getLoginUser").middleware(
    "auth"
  );
  Route.post("/createProject", "ProjectController.createProject").middleware(
    "auth"
  );

  Route.delete("/projects/:id", "ProjectController.destroy").middleware("auth");
}).prefix("api");
