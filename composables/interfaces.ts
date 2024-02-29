interface ICharacter {
    id: number;
    name: string;
    image: string;
    link: string;
    description?: string;
};

interface IImage {
    src: string,
    title?: string,
    alt?: string
}
