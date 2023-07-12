import { Router } from "express";
import { loginController } from "./controllers/loginController";
import { classController } from "./controllers/classController";import { studentController } from "./controllers/studentController";
import { teacherController } from "./controllers/teacherController";
import { itemController } from "./controllers/itemController";
import { quizController } from "./controllers/quizController";
import { studentItemsController } from "./controllers/studentItemsController";

const router = Router();

const classCtrl = new classController();
const studentCtrl = new studentController();
const teacherCtrl = new teacherController();
const itemCtrl = new itemController();
const quizCtrl = new quizController();
const loginCtrl = new loginController();
const studentItemCtrl = new studentItemsController();

// Login
router.post("/login", loginCtrl.login);
router.post("/register", studentCtrl.register);

// Classes
router.post("/class", classCtrl.create);
router.get("/class/:id", classCtrl.view);
router.get("/class", classCtrl.index);
router.put("/class/:id", classCtrl.update);
router.delete("/class/:id", classCtrl.delete);


// Students
router.get("/student", studentCtrl.index);
router.post("/student", studentCtrl.create);
router.get("/student/:id", studentCtrl.view);
router.put("/student/:id", studentCtrl.update);
router.delete("/student/:id", studentCtrl.delete);
router.get("/student/:id/itens", studentCtrl.getItens);

// Teachers
router.post("/teacher", teacherCtrl.create);
router.get("/teacher/:id", teacherCtrl.view);
router.get("/teacher", teacherCtrl.index);
router.put("/teacher/:id", teacherCtrl.update);
router.delete("/teacher/:id", teacherCtrl.delete);

// Items
router.post("/item", itemCtrl.create);
router.post("/itens", itemCtrl.createMany);
router.get("/item/:id", itemCtrl.view);
router.get("/item", itemCtrl.index);
router.put("/item/:id", itemCtrl.update);
router.delete("/item/:id", itemCtrl.delete);
router.delete("/item", itemCtrl.deleteAll);


// Quizzes
router.post("/quiz", quizCtrl.create);
router.get("/quiz/:id", quizCtrl.view);
router.get("/quiz", quizCtrl.index);
router.put("/quiz/:id", quizCtrl.update);
router.delete("/quiz/:id", quizCtrl.delete);

// StudentItems
router.post("/studentItem", studentItemCtrl.create);
router.get("/studentItem", studentItemCtrl.index);
router.get("/students/:student_id/items/:item_id", studentItemCtrl.view);
router.put("/students/:student_id/items/:item_id", studentItemCtrl.update);
router.put("/studentItem/equip", studentItemCtrl.equipItem);
router.get("/student/:student_id/items", studentItemCtrl.findStudentItems);
router.get("/student/:student_id/equipment", studentItemCtrl.getEquippedItem);
router.put( "/students/:student_id/items/:item_id/quantity", studentItemCtrl.updateQuantity );

router.delete("/students/:id/items/:id", studentItemCtrl.delete);


export { router };
