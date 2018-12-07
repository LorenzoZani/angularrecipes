export class Recipe {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public liked: boolean = false,
    public createdAt: Date = new Date(),
    public tags: string[] = []
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.liked = liked;
    this.createdAt = createdAt;
    this.tags = tags;
  }
}
