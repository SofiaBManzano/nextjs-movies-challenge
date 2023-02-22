export default interface MovieType {
    title: string;
    description: string;
    genre: string;
    highlighted: boolean;
    id: string;
    poster: string;
    rating: number;
    thumbnail: string;
  }

  export default interface GenreType {
    id: string;
    name: string;
  }
  export interface ButtonProps {

    primary: boolean;
    active: boolean
    size: "small" | "medium" | "large";
    isActive: boolean;
    label: string;
  
  
  };