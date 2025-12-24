export const calculateExperience = (startDate: string): number => {
    const start = new Date(startDate).getTime();
    const now = Date.now();
    const diffTime = Math.abs(now - start);
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
    return diffYears;
}