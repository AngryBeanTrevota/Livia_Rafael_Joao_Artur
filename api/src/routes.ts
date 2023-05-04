import { Router } from "express";
import { loginController } from "./controllers/loginController";
import { classController } from "./controllers/classController";
import { characterController } from "./controllers/characterController";
import { studentController } from "./controllers/studentController";
import { teacherController } from "./controllers/teacherController";
import { itemController } from "./controllers/itemController";
import { quizController } from "./controllers/quizController";
import { authVerify } from "./middlewares/authVerify";

const router = Router();

const classCtrl = new classController();
const characterCtrl = new characterController();
const studentCtrl = new studentController();
const teacherCtrl = new teacherController();
const itemCtrl = new itemController();
const quizCtrl = new quizController();
const loginCtrl = new loginController();

// Login
router.post("/login", loginCtrl.login);
router.post("/cadastro", studentCtrl.create);

// Classes
router.post("/class", classCtrl.create);
router.get("/class/:id", classCtrl.view);
router.get("/class", classCtrl.index);
router.put("/class/:id", classCtrl.update);

// Characters
router.post("/character", characterCtrl.create);
router.get("/character/:id", characterCtrl.view);
router.get("/character", characterCtrl.index);
router.put("/character/:id", characterCtrl.update);

// Students
router.post("/student", studentCtrl.create);
router.get("/student/:id", studentCtrl.view);
router.get("/student", studentCtrl.index);
router.put("/student/:id", studentCtrl.update);

// Teachers
router.post("/teacher", teacherCtrl.create);
router.get("/teacher/:id", teacherCtrl.view);
router.get("/teacher", teacherCtrl.index);
router.put("/teacher/:id", teacherCtrl.update);

// Items
router.post("/item", itemCtrl.create);
router.get("/item/:id", itemCtrl.view);
router.get("/item", itemCtrl.index);
router.put("/item/:id", itemCtrl.update);

// Quizzes
router.post("/quiz", quizCtrl.create);
router.get("/quiz/:id", quizCtrl.view);
router.get("/quiz", quizCtrl.index);
router.put("/quiz/:id", quizCtrl.update);

export { router };
