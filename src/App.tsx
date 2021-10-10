import React, {useEffect, useState} from 'react';
import {container} from "./core/dependency-injection/container";
import {GetAllAchievementsQuery} from "./feature/achievements/application/get-all-achievements-query";
import Achievement from "./feature/achievements/domain/models/achievements";

function App() {
    const [achievements, setAchievements] = useState<Achievement[]>();
    const getData = async () => {
        const getAllAchievementsQuery = container.resolve(GetAllAchievementsQuery);
        const results = await getAllAchievementsQuery.execute();
        setAchievements(results);
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className="App">
            {
                achievements?.map((a) =>
                    <>
                        <h5>{a.id}</h5>
                        <h5>{a.name}</h5>
                        <p>{new Date(a.date).toLocaleDateString()}</p>
                    </>
                )
            }
        </div>
    );
}

export default App;
