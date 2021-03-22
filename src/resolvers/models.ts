export interface IStudent {
    id: string,
    name: string,
    email: string,
    website: string,
    courses: string[]
};


export interface IReview {
    id: string,
    name: string,
    points: number,
    comment?: string
};

export interface ICourse {
    id: string,
    title: string,
    description: string,
    clases: number,
    time: number,
    level: string,
    logo: string,
    path: string,
    teacher: string,
    reviews: IReview[]
};
