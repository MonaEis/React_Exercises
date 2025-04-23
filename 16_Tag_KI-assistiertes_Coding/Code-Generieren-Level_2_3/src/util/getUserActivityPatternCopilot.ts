type LoginData = {
    userId: string;
    timestamp: string; // ISO format
    location: string;
};

type AnalysisResult = {
    timeOfDay: string;
    locationConsistency: boolean;
    suspicious: boolean;
};

export function getUserActivityPattern(userId: string, logins: LoginData[]): AnalysisResult {
    const userLogins = logins.filter(login => login.userId === userId);

    if (userLogins.length === 0) {
        throw new Error(`No login data found for userId: ${userId}`);
    }

    const timeFrequency: Record<string, number> = {};
    const locationFrequency: Record<string, number> = {};

    userLogins.forEach(({ timestamp, location }) => {
        const hour = new Date(timestamp).getHours();
        const timeOfDay = 
            hour >= 5 && hour < 12 ? "morning" :
            hour >= 12 && hour < 18 ? "afternoon" :
            hour >= 18 && hour < 22 ? "evening" : "night";

        timeFrequency[timeOfDay] = (timeFrequency[timeOfDay] || 0) + 1;
        locationFrequency[location] = (locationFrequency[location] || 0) + 1;
    });

    const mostFrequentTimeOfDay = Object.keys(timeFrequency).reduce((a, b) =>
        timeFrequency[a] > timeFrequency[b] ? a : b
    );

    const uniqueLocations = Object.keys(locationFrequency).length;
    const mostFrequentLocationCount = Math.max(...Object.values(locationFrequency));
    const locationConsistency = mostFrequentLocationCount === userLogins.length;

    const suspicious = uniqueLocations > 3 || timeFrequency["night"] > 0;

    return {
        timeOfDay: mostFrequentTimeOfDay,
        locationConsistency,
        suspicious,
    };
}