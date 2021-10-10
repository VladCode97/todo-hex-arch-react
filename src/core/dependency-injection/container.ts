import {container} from 'tsyringe';
import {ACHIEVEMENT_REPOSITORY, GLOBAL} from "./injection-token";
import {AchievementsHttpRepository} from "../../feature/achievements/infrastructure/achievements-http-repository";

container.register(ACHIEVEMENT_REPOSITORY, AchievementsHttpRepository);
container.registerInstance(GLOBAL, globalThis);

export {container};