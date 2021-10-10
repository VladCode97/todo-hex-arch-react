import Achievement from "../feature/achievements/domain/models/achievements";
import {AchievementDto} from "../feature/achievements/infrastructure/achievement-dto";

export class AchievementMother {
    static learnArchitecture(): Achievement {
        return { id: 'sfn-sqju-nba', name: 'Learn architecture', date: new Date('2021-07-24') }
    }

    static learnArchitectureDto(): AchievementDto {
        return { id: 'sfn-sqju-nba', name: 'Learn architecture', date: '2021-07-24' }
    }
}