import express from "express";
import TutorController from "../controllers/TutorController";
import SpecieController from "../controllers/SpecieController";
import BreedController from "../controllers/BreedController";
import PetController from "../controllers/PetController";
import PetPhotoController from "../controllers/PetPhotoController";
import AnalyticsController from "../controllers/AnalyticsController";
import FoundPetController from "../controllers/FoundPetController";
import RegisterContactController from "../controllers/RegisterContactController";

const routes = express.Router();

routes.post("/tutors", TutorController.store);
routes.get("/tutors/:tutorId", TutorController.show);
routes.get("/species", SpecieController.index);
routes.get("/species/:specieId/breeds", BreedController.index);
routes.post("/tutors/:tutorId/pets", PetController.store);
routes.get("/tutors/:tutorId/pets", PetController.index);
routes.post("/pets/:petId/photos", PetPhotoController.store);
routes.get("/pets/:petId/photos", PetPhotoController.index);
routes.get("/analytics", AnalyticsController.index);
routes.post("/found", FoundPetController.store);
routes.get("/found/:id", FoundPetController.show);
routes.post("/register", RegisterContactController.store);
routes.get("/register/:registerContactId", RegisterContactController.show);

routes.get("/", (req, res) => {
  res.json({ message: "API Route" });
});

export default routes;
