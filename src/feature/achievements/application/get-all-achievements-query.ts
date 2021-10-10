import Achievement from "../domain/models/achievements";
import type {IAchievementRepository} from "../domain/repository/achievements-repository";
import  {inject, injectable} from "tsyringe";
import {ACHIEVEMENT_REPOSITORY} from "../../../core/dependency-injection/injection-token";

@injectable()
export class GetAllAchievementsQuery {

    constructor(
        @inject(ACHIEVEMENT_REPOSITORY)
        private readonly achievementRepository: IAchievementRepository) {
    }

    execute(): Promise<Achievement[]> {
        // @ts-ignore
        return this.achievementRepository.findAll();
    }

}