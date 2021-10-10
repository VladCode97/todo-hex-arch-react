import {IAchievementRepository} from "../domain/repository/achievements-repository";
import Achievement from "../domain/models/achievements";
import {inject, injectable} from "tsyringe";
import {GLOBAL} from "../../../core/dependency-injection/injection-token";
import {AchievementMother} from "../../../test/achievement-mother";

@injectable()
export class AchievementsHttpRepository implements IAchievementRepository {

    constructor(
        @inject(GLOBAL)
        private readonly global: typeof globalThis
    ) {
    }

    async findAll(): Promise<Achievement[]> {
        return [AchievementMother.learnArchitecture()];
    }

}