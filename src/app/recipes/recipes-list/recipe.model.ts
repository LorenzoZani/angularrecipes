export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public liked: boolean;

  constructor(
    name: string,
    description: string,
    imagePath: string,
    liked: boolean = false
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.liked = liked;
  }
}
