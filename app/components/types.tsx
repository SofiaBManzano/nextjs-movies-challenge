export default interface MovieType {
  title: string;
  description: string;
  genre: string;
  highlighted: boolean;
  id: string;
  poster: string;
  rating: number;
  thumbnail: string;
  cast: string;
}

export default interface GenreType {
  id: string;
  name: string;
}
export interface ButtonProps {
  primary: boolean;
  role: string;
  onClick: any;
}
export interface ButtonFilters {
  primary: boolean;
  isActive: boolean;
  label: string;
}

interface LoginProps {
  loginFail: boolean;
}
