export interface Track {
    id:number;
    track_url: string;
    track_name: string;
}

export const getTracks = async (): Promise<Track[]> => {
    const response = await fetch('http://localhost:5000/tracks');
    if (!response.ok) {
        throw new Error('Failed to fetch tracks');
    }
    return response.json();
};